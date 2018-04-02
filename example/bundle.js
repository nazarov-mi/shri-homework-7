/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fw = __webpack_require__(1);

var _fw2 = _interopRequireDefault(_fw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Возвращаем новый экземпляр класса fw.Dispatcher
exports.default = new _fw2.default.Dispatcher();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports.Dispatcher = __webpack_require__(7);
module.exports.Store = __webpack_require__(8);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* Abstract class */
/* eslint-disable class-methods-use-this, no-unused-vars */
var AbstractClassError = __webpack_require__(3);

/**
 * Класс реализует шаблон проектирования наблюдатель —
 * механизма подписки на события и рассылки данных между подписчиками.
 * @abstract
 * @class
 */

var Observer = function () {

	/**
  * Создаёт экземпляр Observer
  * @constructs
  */
	function Observer() {
		_classCallCheck(this, Observer);

		if (this.constructor === Observer) {
			throw new AbstractClassError('Observer');
		}

		this._callbacks = [];
	}

	/**
  * Подписывает функцию обратного вызова, если она не была подписана ранее
  * @param  {Function} callback - функция обратного вызова
  * @param  {Boolean} greatPriority - если является true —
  * функция обратного вызова добавляется в начало очереди
  * @return {Observer} Возвращает текущий экземпляр класса
  */


	_createClass(Observer, [{
		key: 'on',
		value: function on(callback) {
			var greatPriority = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

			if (typeof callback === 'function') {
				var index = this._callbacks.indexOf(callback);

				if (index < 0) {
					if (greatPriority) {
						this._callbacks.unshift(callback);
					} else {
						this._callbacks.push(callback);
					}
				}
			}

			return this;
		}

		/**
   * Отписывает функцию обратного вызова от событий
   * @param  {Function} callback - функция обратного вызова
   * @return {Observer} Возвращает текущий экземпляр класса
   */

	}, {
		key: 'off',
		value: function off(callback) {
			var index = this._callbacks.indexOf(callback);

			if (index >= 0) {
				this._callbacks.splice(index, 1);
			}

			return this;
		}

		/**
   * Рассылает данные между всему функциями обратного вызова
   * @param  {any} payload - данные для рассылки
   * @return {Observer} Возвращает текущий экземпляр класса
   */

	}, {
		key: 'fire',
		value: function fire(payload) {
			this._callbacks.forEach(function (callback) {
				return callback(payload);
			});
			return this;
		}
	}]);

	return Observer;
}();

module.exports = Observer;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Класс ошибки создания абстракного класса
 * @class
 */
var AbstractClassError =

/**
 * Создаёт экземпляр AbstractClassError
 * @constructs
 */
function AbstractClassError(className) {
	_classCallCheck(this, AbstractClassError);

	throw new Error("\u041F\u043E\u043F\u044B\u0442\u043A\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440\u0430 \u0430\u0431\u0441\u0442\u0440\u0430\u043A\u0442\u043D\u043E\u0433\u043E \u043A\u043B\u0430\u0441\u0441\u0430 " + className);
};

module.exports = AbstractClassError;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
// Типы действий
exports.default = {
	ADD_MESSAGE: 'ADD_MESSAGE',
	CHANGE_DATA: 'CHANGE_DATA'
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Store = __webpack_require__(6);

var _Store2 = _interopRequireDefault(_Store);

var _Actions = __webpack_require__(10);

var _Actions2 = _interopRequireDefault(_Actions);

var _Dispatcher = __webpack_require__(0);

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

var _sendToServer = __webpack_require__(11);

var _sendToServer2 = _interopRequireDefault(_sendToServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $ = function $(selector, target) {
	return (target || document).querySelector(selector);
};

function initLog() {
	var $log = $('.log');

	// Функция логирования
	function log(data) {
		$log.innerHTML += data;
	}

	// Логирование Dispatcher'а
	_Dispatcher2.default.on(function (payload) {
		var data = JSON.stringify(payload);
		var html = ['<p><b>В Dispatcher пришёл запрос с данными</b></p>', '<pre>' + data + '</pre>'].join('');

		log(html);
	}, true);

	// Логирование хранилища

	// Старое состояние
	var oldState = JSON.stringify(_Store2.default.state);

	_Store2.default.on(function (state) {
		var newState = JSON.stringify(state);
		var html = ['<p><b>В хранилище изменились данные</b></p>', '<p>+ Старое состояние</p>', '<pre>' + oldState + '</pre>', '<p>+ Новое состояние</p>', '<pre>' + newState + '</pre>'].join('');

		log(html);

		oldState = newState;
	});
}

initLog();

// Функция отправки данных на сервер
async function send(data) {
	var message = void 0;

	try {
		message = await (0, _sendToServer2.default)(data);
	} catch (e) {
		message = e.message;
	}

	_Actions2.default.addMessage(message);
}

// Инициализация представления
var $apply = $('.view-stub__apply');
var $input = $('.view-stub__input');
var $label = $('.view-stub__label');

$apply.addEventListener('click', function () {
	var data = $input.value;

	if (data) {
		_Actions2.default.changeData(data);
		$input.value = '';
	}
});

// Установка слушателей на хранилище
var oldData = _Store2.default.state.data;
_Store2.default.on(function (state) {
	if (state.data !== oldData) {
		send(state.data);
		oldData = state.data;
	} else {
		$label.innerHTML = '<p>' + state.messages.join('</p><p>') + '</p>';
	}
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fw = __webpack_require__(1);

var _fw2 = _interopRequireDefault(_fw);

var _ActionTypes = __webpack_require__(4);

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

var _Dispatcher = __webpack_require__(0);

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Класс для хранения данных, наследует обстрактный класс fw.Store
 * @class
 * @extends fw.Store
 */
var Store = function (_fw$Store) {
	_inherits(Store, _fw$Store);

	/**
  * Создаёт экземпляр Store
  * @constructs
  */
	function Store() {
		_classCallCheck(this, Store);

		return _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).call(this, _Dispatcher2.default, {
			messages: [],
			data: ''
		}));
	}

	// Переопределяем функцию мутации
	/**
  * @inheritDoc
  */
	/* eslint-disable-next-line class-methods-use-this */


	_createClass(Store, [{
		key: 'mutate',
		value: function mutate(state, payload) {
			switch (payload.type) {
				// Добавить сообщение
				case _ActionTypes2.default.ADD_MESSAGE:
					state.messages.push(payload.text);
					break;

				// Изменить данные
				case _ActionTypes2.default.CHANGE_DATA:
					state.data = payload.data; // eslint-disable-line no-param-reassign
					break;

				default:
				// nothing
			}

			return state;
		}
	}]);

	return Store;
}(_fw2.default.Store);

// Возвращаем новый экземпляр хранилища


exports.default = new Store();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Observer = __webpack_require__(2);

/**
 * Необходим для работы вместе с хранилищем данных Store, наследует класс Observer
 * @class
 * @extends Observer
 */

var Dispatcher = function (_Observer) {
	_inherits(Dispatcher, _Observer);

	/**
  * Создаёт экземпляр Dispatcher
  * @constructs
  */
	function Dispatcher() {
		_classCallCheck(this, Dispatcher);

		return _possibleConstructorReturn(this, (Dispatcher.__proto__ || Object.getPrototypeOf(Dispatcher)).call(this));
	}

	/**
  * Рассылает данные между всему функциями обратного вызова
  * @param  {any} payload - данные для рассылки
  * @return {Dispatcher} Возвращает текущий экземпляр класса
  */


	_createClass(Dispatcher, [{
		key: 'dispatch',
		value: function dispatch(payload) {
			return this.fire(payload);
		}
	}]);

	return Dispatcher;
}(Observer);

module.exports = Dispatcher;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Abstract class */
/* eslint-disable class-methods-use-this, no-unused-vars */
var Observer = __webpack_require__(2);
var AbstractClassError = __webpack_require__(3);
var AbstractMethodError = __webpack_require__(9);

/**
 * Наследует класс Observer.
 * Класс для хранения данных.
 * @class
 * @abstract
 * @extends Observer
 */

var Store = function (_Observer) {
	_inherits(Store, _Observer);

	/**
  * Создаёт экземпляр Store
  * @constructs
  * @param {Dispatcher} dispatcher - Экземпляр класса Dispatcher
  * @param {sny} state - внутреннее состояние хранилища
  */
	function Store(dispatcher, state) {
		_classCallCheck(this, Store);

		var _this = _possibleConstructorReturn(this, (Store.__proto__ || Object.getPrototypeOf(Store)).call(this));

		if (_this.constructor === Store) {
			throw new AbstractClassError('Store');
		}

		_this._dispatcher = dispatcher;
		_this._state = state;

		// Подписываемся на события Dispatcher'а
		dispatcher.on(function (payload) {
			return _this._onDispatch(payload);
		});
		return _this;
	}

	/**
  * Функция обратного вызова для события сгенерированного внутренним экземпляром класса Dispatcher
  * @private
  * @param {any} payload - полученные данные
  */


	_createClass(Store, [{
		key: '_onDispatch',
		value: function _onDispatch(payload) {
			this._state = this.mutate(this._state, payload);
			this.fire(this._state);
		}

		/**
   * Мутирует состояние хранилища
   * @abstract
   * @param  {any} state - состояние хранилища
   * @param  {any} payload - полученные данные
   * @return {any} Новое состояние
   */

	}, {
		key: 'mutate',
		value: function mutate(state, payload) {
			throw new AbstractMethodError('Store', 'mutate');
		}

		/**
   * Возвращает внутреннее состояние хранилища
   * @readonly
   * @return {any}
   */

	}, {
		key: 'state',
		get: function get() {
			return this._state;
		}
	}]);

	return Store;
}(Observer);

module.exports = Store;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Класс ошибки вызова абстрактного метода
 * @class
 */
var AbstractMethodError =

/**
 * Создаёт экземпляр AbstractMethodError
 * @constructs
 */
function AbstractMethodError(className, methodName) {
	_classCallCheck(this, AbstractMethodError);

	throw new Error("\u041D\u0435 \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D \u043C\u0435\u0442\u043E\u0434 " + methodName + " \u043A\u043B\u0430\u0441\u0441\u0430 " + className);
};

module.exports = AbstractMethodError;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ActionTypes = __webpack_require__(4);

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

var _Dispatcher = __webpack_require__(0);

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Действия, которые может совершить пользователь
exports.default = {
	// Добавить сообщение
	addMessage: function addMessage(text) {
		_Dispatcher2.default.dispatch({
			text: text,
			type: _ActionTypes2.default.ADD_MESSAGE
		});
	},


	// Изменить данные
	changeData: function changeData(data) {
		_Dispatcher2.default.dispatch({
			data: data,
			type: _ActionTypes2.default.CHANGE_DATA
		});
	}
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

// Отправка данных на сервер
exports.default = function (data) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			if (Math.random() > .3) {
				resolve("\u0421\u0435\u0440\u0432\u0435\u0440 \u043F\u0440\u0438\u043D\u044F\u043B \u0434\u0430\u043D\u043D\u044B\u0435 \xAB" + data + "\xBB");
			} else {
				reject(new Error("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \xAB" + data + "\xBB"));
			}
		}, 500);
	});
};

/***/ })
/******/ ]);