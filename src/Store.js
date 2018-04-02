/* Abstract class */
/* eslint-disable class-methods-use-this, no-unused-vars */
const Observer = require('./Observer')
const AbstractClassError = require('./errors/AbstractClassError')
const AbstractMethodError = require('./errors/AbstractMethodError')

/**
 * Наследует класс Observer.
 * Класс для хранения данных.
 * @class
 * @abstract
 * @extends Observer
 */
class Store extends Observer {

	/**
	 * Создаёт экземпляр Store
	 * @constructs
	 * @param {Dispatcher} dispatcher - Экземпляр класса Dispatcher
	 * @param {sny} state - внутреннее состояние хранилища
	 */
	constructor (dispatcher, state) {
		super()

		if (this.constructor === Store) {
			throw new AbstractClassError('Store')
		}

		this._dispatcher = dispatcher
		this._state = state

		// Подписываемся на события Dispatcher'а
		dispatcher.on(payload => this._onDispatch(payload))
	}

	/**
	 * Функция обратного вызова для события сгенерированного внутренним экземпляром класса Dispatcher
	 * @private
	 * @param {any} payload - полученные данные
	 */
	_onDispatch (payload) {
		this._state = this.mutate(this._state, payload)
		this.fire(this._state)
	}

	/**
	 * Мутирует состояние хранилища
	 * @abstract
	 * @param  {any} state - состояние хранилища
	 * @param  {any} payload - полученные данные
	 * @return {any} Новое состояние
	 */
	mutate (state, payload) {
		throw new AbstractMethodError('Store', 'mutate')
	}


	/**
	 * Возвращает внутреннее состояние хранилища
	 * @readonly
	 * @return {any}
	 */
	get state () {
		return this._state
	}
}

module.exports = Store