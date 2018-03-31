import Store from './Store'
import Actions from './Actions'
import sendToServer from './sendToServer'

const $ = (selector, target) => (target || document).querySelector(selector)

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

async function send (data) {
	try {
		const message = await sendToServer(data)
		Actions.addMessage(message)
	} catch (e) {
		Actions.addMessage(e.message)
	}
}

let oldData = Store.state.data
Store.on((state) => {
	if (state.data !== oldData) {
		send(state.data)
		oldData = state.data
	} else {
		$label.innerHTML = `<p>${state.messages.join('</p><p>')}</p>`
	}
})