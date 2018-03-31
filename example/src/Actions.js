import ActionTypes from './ActionTypes'
import Dispatcher from './Dispatcher'

export default {
	addMessage (text) {
		Dispatcher.dispatch({
			text,
			type: ActionTypes.ADD_MESSAGE
		})
	},

	changeData (data) {
		Dispatcher.dispatch({
			data,
			type: ActionTypes.CHANGE_DATA
		})
	}
}