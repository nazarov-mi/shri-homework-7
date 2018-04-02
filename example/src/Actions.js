import ActionTypes from './ActionTypes'
import Dispatcher from './Dispatcher'

// Действия, которые может совершить пользователь
export default {
	// Добавить сообщение
	addMessage (text) {
		Dispatcher.dispatch({
			text,
			type: ActionTypes.ADD_MESSAGE
		})
	},

	// Изменить данные
	changeData (data) {
		Dispatcher.dispatch({
			data,
			type: ActionTypes.CHANGE_DATA
		})
	}
}