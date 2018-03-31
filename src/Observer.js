/* Abstract class */
/* eslint-disable class-methods-use-this, no-unused-vars */
const AbstractClassError = require('./errors/AbstractClassError')

/**
 * Класс реализует шаблон проектирования наблюдатель —
 * механизма подписки на события и рассылки данных между подписчиками.
 * @abstract
 * @class
 */
class Observer {

	/**
	 * Создаёт экземпляр Observer
	 * @constructs
	 */
	constructor () {
		if (this.constructor === Observer) {
			throw new AbstractClassError('Observer')
		}

		this._callbacks = []
	}

	/**
	 * Подписывает функцию обратного вызова, если она не была подписана ранее
	 * @param  {Function} callback - функция обратного вызова
	 * @return {Observer} Возвращает текущий экземпляр класса
	 */
	on (callback) {
		if (typeof callback === 'function') {
			const index = this._callbacks.indexOf(callback)

			if (index < 0) {
				this._callbacks.push(callback)
			}
		}

		return this
	}

	/**
	 * Отписывает функцию обратного вызова от событий
	 * @param  {Function} callback - функция обратного вызова
	 * @return {Observer} Возвращает текущий экземпляр класса
	 */
	off (callback) {
		const index = this._callbacks.indexOf(callback)

		if (index >= 0) {
			this._callbacks.splice(index, 1)
		}

		return this
	}

	/**
	 * Рассылает данные между всему функциями обратного вызова
	 * @param  {any} payload - данные для рассылки
	 * @return {Observer} Возвращает текущий экземпляр класса
	 */
	fire (payload) {
		this._callbacks.forEach(callback => callback(payload))
		return this
	}
}

module.exports = Observer