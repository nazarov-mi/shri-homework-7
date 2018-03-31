import fw from 'fw'
import ActionTypes from './ActionTypes'
import Dispatcher from './Dispatcher'

class Store extends fw.Store {
	constructor () {
		super(Dispatcher)
	}

	/* eslint-disable-next-line class-methods-use-this */
	createState () {
		return {
			messages: [],
			data: ''
		}
	}

	/* eslint-disable-next-line class-methods-use-this */
	mutate (state, payload) {
		switch (payload.type) {
			case ActionTypes.ADD_MESSAGE:
				state.messages.push(payload.text)
				break

			case ActionTypes.CHANGE_DATA:
				state.data = payload.data // eslint-disable-line no-param-reassign
				break

			default:
				// nothing
		}

		return state
	}
}

export default new Store()