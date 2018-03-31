const Observer = require('./Observer')

/**
 * Наследует класс Observer.
 * Необходим для работы вместе с хранилищем данных Store.
 * @class
 * @extends Observer
 */
class Dispatcher extends Observer {

	/**
	 * Создаёт экземпляр Dispatcher
	 * @constructs
	 */
	constructor () {
		super()
	}

	/**
	 * Подписывает функцию обратного вызова, если она не была подписана ранее
	 * @param  {Function} callback - функция обратного вызова
	 * @return {Dispatcher} Возвращает текущий экземпляр класса
	 */
	dispatch (payload) {
		return this.fire(payload)
	}
}

module.exports = Dispatcher