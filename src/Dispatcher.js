const Observer = require('./Observer')

/**
 * Необходим для работы вместе с хранилищем данных Store, наследует класс Observer
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
	 * Рассылает данные между всему функциями обратного вызова
	 * @param  {any} payload - данные для рассылки
	 * @return {Dispatcher} Возвращает текущий экземпляр класса
	 */
	dispatch (payload) {
		return this.fire(payload)
	}
}

module.exports = Dispatcher