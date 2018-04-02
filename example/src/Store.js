import fw from 'fw'
import ActionTypes from './ActionTypes'
import Dispatcher from './Dispatcher'

/**
 * Класс для хранения данных, наследует обстрактный класс fw.Store
 * @class
 * @extends fw.Store
 */
class Store extends fw.Store {

	/**
	 * Создаёт экземпляр Store
	 * @constructs
	 */
	constructor () {
		super(Dispatcher, {
			messages: [],
			data: ''
		})
	}

	// Переопределяем функцию мутации
	/**
	 * @inheritDoc
	 */
	/* eslint-disable-next-line class-methods-use-this */
	mutate (state, payload) {
		switch (payload.type) {
			// Добавить сообщение
			case ActionTypes.ADD_MESSAGE:
				state.messages.push(payload.text)
				break

			// Изменить данные
			case ActionTypes.CHANGE_DATA:
				state.data = payload.data // eslint-disable-line no-param-reassign
				break

			default:
				// nothing
		}

		return state
	}
}

// Возвращаем новый экземпляр хранилища
export default new Store()