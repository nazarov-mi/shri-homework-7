import Store from './Store'
import Actions from './Actions'
import Dispatcher from './Dispatcher'
import sendToServer from './sendToServer'

const $ = (selector, target) => (target || document).querySelector(selector)

function initLog () {
	const $log = $('.log')

	// Функция логирования
	function log (data) {
		$log.innerHTML += data
	}

	// Логирование Dispatcher'а
	Dispatcher.on((payload) => {
		const data = JSON.stringify(payload)
		const html = [
			'<p><b>В Dispatcher пришёл запрос с данными</b></p>',
			`<pre>${data}</pre>`
		].join('')

		log(html)
	}, true)

	// Логирование хранилища

	// Старое состояние
	let oldState = JSON.stringify(Store.state)

	Store.on((state) => {
		const newState = JSON.stringify(state)
		const html = [
			'<p><b>В хранилище изменились данные</b></p>',
			'<p>+ Старое состояние</p>',
			`<pre>${oldState}</pre>`,
			'<p>+ Новое состояние</p>',
			`<pre>${newState}</pre>`
		].join('')

		log(html)

		oldState = newState
	})
}

initLog()


// Функция отправки данных на сервер
async function send (data) {
	let message

	try {
		message = await sendToServer(data)
	} catch (e) {
		message = e.message
	}

	Actions.addMessage(message)
}

// Инициализация представления
const $apply = $('.view-stub__apply')
const $input = $('.view-stub__input')
const $label = $('.view-stub__label')

$apply.addEventListener('click', () => {
	const data = $input.value

	if (data) {
		Actions.changeData(data)
		$input.value = ''
	}
})

// Установка слушателей на хранилище
let oldData = Store.state.data
Store.on((state) => {
	if (state.data !== oldData) {
		send(state.data)
		oldData = state.data
	} else {
		$label.innerHTML = `<p>${state.messages.join('</p><p>')}</p>`
	}
})