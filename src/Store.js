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
	 */
	constructor (dispatcher) {
		super()

		if (this.constructor === Store) {
			throw new AbstractClassError('Store')
		}

		this._dispatcher = dispatcher
		this._state = this.createState()

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
	 * Создаёт новый экземпляр внутреннего состояния хранилища
	 * @abstract
	 * @return {any} Состояние хранилища
	 */
	createState () {
		throw new AbstractMethodError('Store', 'createState')
	}

	/**
	 * Мутирует переданное состояние
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