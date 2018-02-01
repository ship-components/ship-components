(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_15__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _nodeHeight = __webpack_require__(12);
	
	var _nodeHeight2 = _interopRequireDefault(_nodeHeight);
	
	var _shipComponentsUtility = __webpack_require__(7);
	
	var _textInput = __webpack_require__(13);
	
	var _textInput2 = _interopRequireDefault(_textInput);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TextInput = function (_React$Component) {
	  _inherits(TextInput, _React$Component);
	
	  function TextInput(props) {
	    _classCallCheck(this, TextInput);
	
	    var _this = _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call(this, props));
	
	    _this.state = {
	      focus: false,
	      height: null,
	      minHeight: -Infinity,
	      maxHeight: Infinity
	    };
	
	    _this.calculateHeight = _this.calculateHeight.bind(_this);
	    _this.handleFocus = _this.handleFocus.bind(_this);
	    _this.handleBlur = _this.handleBlur.bind(_this);
	    _this.handleChange = _this.handleChange.bind(_this);
	    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
	    _this.handleEnterKey = _this.handleEnterKey.bind(_this);
	    _this.getFontSize = _this.getFontSize.bind(_this);
	    return _this;
	  }
	
	  _createClass(TextInput, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.calculateHeight();
	      window.addEventListener('resize', this.calculateHeight);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      // Render the content and then update the state/height
	      clearTimeout(this.updateId);
	      this.updateId = setTimeout(this.calculateHeight, 0);
	
	      clearTimeout(this.transitionUpdateId);
	      this.transitionUpdateId = setTimeout(this.calculateHeight, 250);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.updateId);
	      clearTimeout(this.transitionUpdateId);
	      window.removeEventListener('resize', this.calculateHeight);
	    }
	  }, {
	    key: 'handleFocus',
	    value: function handleFocus(event) {
	      if (!this.props.editable) {
	        return;
	      }
	      this.setState({
	        focus: true
	      });
	      if (typeof this.props.onFocus === 'function') {
	        this.props.onFocus(event);
	      }
	    }
	  }, {
	    key: 'handleBlur',
	    value: function handleBlur(event) {
	      this.setState({
	        focus: false
	      });
	      if (typeof this.props.onBlur === 'function') {
	        this.props.onBlur(event);
	      }
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(event) {
	      this.calculateHeight();
	
	      if (typeof this.props.onChange === 'function') {
	        this.props.onChange(event);
	      }
	    }
	  }, {
	    key: 'handleKeyDown',
	    value: function handleKeyDown(event) {
	      if (event.key === 'Enter' || event.keyCode === 13) {
	        this.handleEnterKey(event);
	      }
	      if (typeof this.props.onKeyDown === 'function') {
	        this.props.onKeyDown(event);
	      }
	    }
	  }, {
	    key: 'handleEnterKey',
	    value: function handleEnterKey(event) {
	      if (!(this.props.multiline && event.shiftKey)) {
	        // prevent new line if not Shift + Enter
	        event.preventDefault();
	      }
	      if (typeof this.props.onEnterKeyDown === 'function') {
	        this.props.onEnterKeyDown(event);
	      }
	    }
	
	    /**
	     * Calculate the height of the node and update the state
	     */
	
	  }, {
	    key: 'calculateHeight',
	    value: function calculateHeight() {
	      var state = (0, _nodeHeight2.default)(this.refs.input, this.props.minRows, this.props.maxRows);
	      // ONESONY-693, IE11 nodeHeight workaround
	      if (_shipComponentsUtility.Utils.isIEBrowser() && (!this.props.value || this.props.value.length === 0)) {
	        state.height = parseInt(this.getFontSize(), 10);
	      }
	      this.setState(state);
	    }
	  }, {
	    key: 'getFontSize',
	    value: function getFontSize() {
	      return window.getComputedStyle(this.refs.wrapper).getPropertyValue('font-size');
	    }
	
	    /**
	    * Get css class names for the component for it's different states
	    * @return {String}
	    */
	
	  }, {
	    key: 'classNames',
	    value: function classNames() {
	      var classes = ['text-input', _textInput2.default.container, this.props.className];
	
	      var value = this.props.value || this.props.defaultValue;
	      var valueIsNotEmpty = value && value.length > 0;
	
	      if (this.state.focus || valueIsNotEmpty) {
	        classes.push(_textInput2.default.active);
	      }
	
	      if (this.state.focus) {
	        classes.push(_textInput2.default.focus);
	      }
	
	      if (this.props.label) {
	        classes.push(_textInput2.default.hasLabel);
	      }
	
	      if (valueIsNotEmpty && typeof this.props.validate === 'function') {
	        if (this.validate(this.props.value)) {
	          classes.push(_textInput2.default.success);
	        } else {
	          classes.push(_textInput2.default.error);
	        }
	      }
	
	      return classes.filter(function (cla) {
	        return typeof cla === 'string' && cla.length;
	      }).join(' ').trim();
	    }
	
	    /**
	     * If we have a validate function call it
	     * @param  {Mixed} value
	     * @return {Boolean}
	     */
	
	  }, {
	    key: 'validate',
	    value: function validate(value) {
	      if (typeof this.props.validate !== 'function') {
	        return true;
	      }
	      return this.props.validate(value);
	    }
	
	    /**
	     * Render
	     * @return {React}
	     */
	
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var styles = { props: props };
	
	      styles.height = this.state.height;
	
	      var maxHeight = Math.max(styles.maxHeight ? styles.maxHeight : -Infinity, this.state.maxHeight);
	
	      // Hide scrollbar if we don't need it
	      if (maxHeight >= this.state.height) {
	        styles.overflow = 'hidden';
	      } else {
	        styles.overflow = 'auto';
	      }
	
	      return _react2.default.createElement(
	        'div',
	        { className: this.classNames() },
	        _react2.default.createElement(
	          'div',
	          { className: _textInput2.default.fieldContainer },
	          _react2.default.createElement('textarea', {
	            placeholder: this.props.placeholder,
	            tabIndex: this.props.tabIndex,
	            onDragStart: this.props.onDragStart,
	            onDragEnd: this.props.onDragEnd,
	            onDragOver: this.props.onDragOver,
	            className: 'text-input--field ' + _textInput2.default.field,
	            ref: 'input',
	            disabled: this.props.disabled || !this.props.editable,
	            style: styles,
	            value: this.props.value,
	            onClick: this.props.onClick,
	            onFocus: this.handleFocus,
	            onBlur: this.handleBlur,
	            onChange: this.handleChange,
	            onKeyDown: this.handleKeyDown
	          }),
	          this.props.label ? _react2.default.createElement(
	            'label',
	            { className: 'text-input--label ' + _textInput2.default.label },
	            this.props.label
	          ) : null
	        ),
	        this.props.error ? _react2.default.createElement(
	          'label',
	          { className: 'text-input--error ' + _textInput2.default.error },
	          this.props.error
	        ) : null
	      );
	    }
	  }]);
	
	  return TextInput;
	}(_react2.default.Component);
	
	/**
	 * Defaults
	 * @type {Object}
	 */
	
	
	exports.default = TextInput;
	TextInput.defaultProps = {
	  editable: true,
	  value: '',
	  label: null
	};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * @alias to pluck
	 */
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _pluck = __webpack_require__(9);
	
	Object.defineProperty(exports, 'pluck', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_pluck).default;
	  }
	});
	exports.objectSize = objectSize;
	exports.isObject = isObject;
	exports.isFunction = isFunction;
	exports.isString = isString;
	exports.isArray = isArray;
	exports.isUndefined = isUndefined;
	exports.bind = bind;
	exports.bindAll = bindAll;
	exports.mergeDeep = mergeDeep;
	exports.deepCopy = deepCopy;
	exports.isIEBrowser = isIEBrowser;
	exports.detectIEVersion = detectIEVersion;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * Returns the size of an Object
	 * @param     {Object}    obj
	 * @return    {Number}    size
	 */
	function objectSize(obj) {
	  var size = 0,
	      key = void 0;
	  for (key in obj) {
	    if (obj.hasOwnProperty(key)) {
	      size++;
	    }
	  }
	
	  return size;
	}
	
	/**
	 * Checks if value is the language type of Object
	 * will skip values === null
	 * @param     {Mixed}    prop
	 * @return    {Bool}
	 */
	function isObject(prop) {
	  // Weird behaviour with spec in Javascript, the typeof Array is Object
	  return prop !== null && !Array.isArray(prop) && (typeof prop === 'undefined' ? 'undefined' : _typeof(prop)) === 'object';
	}
	
	/**
	 * Checks if value is classified as a Function object
	 * @param     {Mixed}    prop
	 * @return    {Bool}
	 */
	function isFunction(prop) {
	  return typeof prop === 'function';
	}
	
	/**
	 * Checks if value is classified as a String primitive or object
	 * @param     {Mixed}    prop
	 * @return    {Bool}
	 */
	function isString(prop) {
	  return typeof prop === 'string';
	}
	
	/**
	 * Checks if value is classified as an Array object
	 * @param     {Mixed}    prop
	 * @return    {Bool}
	 */
	function isArray(prop) {
	  return Array.isArray(prop);
	}
	
	/**
	 * Checks if value is undefined
	 * @param     {Mixed}    prop
	 * @return    {Bool}
	 */
	function isUndefined(prop) {
	  return typeof prop === 'undefined';
	}
	
	/**
	 * Bind to itself
	 * @param     {args...}
	 * @return    {Undefined}
	 * @example   bind(this, 'handleClick', 'handleSubmit');
	 */
	function bind() {
	  var args = Array.prototype.slice.call(arguments);
	  var ctx = args.splice(0, 1)[0];
	  for (var i = 0; i < args.length; i++) {
	    ctx[args[i]] = ctx[args[i]].bind(ctx);
	  }
	}
	
	/**
	 * Binds methods of an object to the object itself,
	 * overwriting the existing method.
	 * Method names may be specified as individual arguments
	 * or as arrays of method names
	 * @param     {Object}  obj
	 * @return    {Object}  result
	 */
	function bindAll(obj) {
	  var result = obj;
	
	  for (var prop in result) {
	    if (result.hasOwnProperty(prop) && typeof result[prop] === 'function') {
	      result[prop] = result[prop].bind(result);
	    }
	  }
	  return result;
	}
	
	/**
	 * This method is like _.assign except that it
	 * recursively merges own and inherited enumerable
	 * string keyed properties of source objects into the
	 * destination object
	 * @param     {Object}      target
	 * @param     {Object}      source
	 * @return    {Object}      target
	 */
	function mergeDeep(target, source) {
	  if (isObject(target) && isObject(source)) {
	    for (var key in source) {
	      if (isObject(source[key])) {
	        if (!target[key]) {
	          Object.assign(target, _defineProperty({}, key, {}));
	        }
	        mergeDeep(target[key], source[key]);
	      } else {
	        target[key] = source[key];
	      }
	    }
	  }
	  return target;
	}
	
	/**
	 * Recursive object copy
	 *
	 * @param     {Array<Objects> || Objects}    obj
	 * @return    {Array<Objects> || Objects}
	 */
	/* eslint-disable */
	function deepCopy(obj) {
	  var result;
	
	  // Handle Date
	  if (obj instanceof Date) {
	    result = new Date();
	    result.setTime(obj.getTime());
	    return result;
	  }
	
	  var gdcc = '__getDeepCircularCopy__';
	  if (obj !== Object(obj)) {
	    return obj; // primitive value
	  }
	
	  var set = gdcc in obj;
	  var cache = obj[gdcc];
	
	  if (set && typeof cache === 'function') {
	    return cache();
	  }
	  // else
	  obj[gdcc] = function () {
	    return result;
	  }; // overwrite
	
	  // Array of objects
	  if (obj instanceof Array) {
	    result = [];
	    for (var i = 0; i < obj.length; i++) {
	      result[i] = deepCopy(obj[i]);
	    }
	  } else if (obj instanceof Object) {
	    // Object or nested objects (tree)
	    result = {};
	    for (var prop in obj) {
	      if (prop !== gdcc) {
	        result[prop] = deepCopy(obj[prop]);
	      } else if (set) {
	        result[prop] = deepCopy(cache);
	      }
	    }
	  } else {
	    throw new Error('Unable to copy obj! Its type is not supported.');
	  }
	
	  if (set) {
	    obj[gdcc] = cache; // reset
	  } else {
	    delete obj[gdcc]; // unset again
	  }
	  return result;
	}
	/*eslint-enable */
	
	/**
	 * Detect IE browser
	 * @param  {String} prop
	 * @return {Bool}
	 */
	function isIEBrowser(prop) {
	  switch (prop) {
	    case 'ie10':
	      return navigator.appVersion.indexOf('MSIE 10') !== -1 && navigator.appVersion.indexOf('Trident') === -1;
	    case 'ie11':
	      return navigator.appVersion.indexOf('Trident') !== -1 && navigator.appVersion.indexOf('MSIE 10') === -1;
	    case 'edge':
	      return navigator.appVersion.indexOf('Edge') !== -1;
	    // IE10 || IE11
	    default:
	      return navigator.appVersion.indexOf('Trident') !== -1 || navigator.appVersion.indexOf('MSIE 10') !== -1;
	  }
	}
	
	/**
	 * Detect IE browser version
	 * @return {String}
	 */
	function detectIEVersion() {
	  var ua = window ? window.navigator.userAgent : navigator.userAgent;
	
	  // Test values; Uncomment to check result …
	
	  // IE 10
	  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
	
	  // IE 11
	  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
	
	  // Edge 12 (Spartan)
	  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
	
	  // Edge 13
	  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';
	
	  var msie = ua.indexOf('MSIE ');
	  if (msie > 0) {
	    // IE 10 or older => return version number
	    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	  }
	
	  var trident = ua.indexOf('Trident/');
	  if (trident > 0) {
	    // IE 11 => return version number
	    var rv = ua.indexOf('rv:');
	    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	  }
	
	  var edge = ua.indexOf('Edge/');
	  if (edge > 0) {
	    // Edge (IE 12+) => return version number
	    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	  }
	
	  // other browser
	  return false;
	}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = getIn;
	/**
	 * Get a nested value of an object or return
	 * @param  {Array<String>}  path
	 * @param  {Object}         obj
	 * @param  {Mixed}          defaultValue
	 * @return {Mixed}
	 */
	function getIn(path, obj, defaultValue) {
	  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || path instanceof Array !== true) {
	    return defaultValue;
	  } else if (path.length === 0) {
	    return obj;
	  }
	
	  // Let the cloning begin
	  path = path.slice(0);
	  var result = Object.assign({}, obj);
	
	  while (path.length > 0) {
	    var key = path.shift();
	    if (!(key in result)) {
	      // Can'd the the key in the object so return the defaultValue
	      return defaultValue;
	    }
	    result = result[key];
	  }
	
	  return result;
	}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function isType(type) {
	  var not = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	  var val = arguments[2];
	
	  var result = void 0;
	  if (type === 'Undefined') {
	    // If value is set to the global `undefined` we'll get the wrong result.
	    // Minifiers may do this
	    result = typeof val === 'undefined';
	  } else {
	    result = Object.prototype.toString.call(val) === '[object ' + type + ']';
	  }
	  return not ? !result : result;
	}
	
	var keys = {
	  obj: 'Object',
	  str: 'String',
	  undef: 'Undefined',
	  func: 'Function',
	  nul: 'Null',
	  arr: 'Array',
	  num: 'Number'
	};
	
	var obj = exports.obj = isType.bind(null, 'Object', false);
	
	var str = exports.str = isType.bind(null, 'String', false);
	
	var undef = exports.undef = isType.bind(null, 'Undefined', false);
	
	var func = exports.func = isType.bind(null, 'Function', false);
	
	var nul = exports.nul = isType.bind(null, 'Null', false);
	
	var arr = exports.arr = isType.bind(null, 'Array', false);
	
	var num = exports.num = isType.bind(null, 'Number', false);
	
	function iter(not, val) {
	  var result = obj(val) || arr(val) || func(val);
	  return not ? !result : result;
	}
	
	var iterable = exports.iterable = iter.bind(null, false);
	
	var not = exports.not = function () {
	  var fns = {};
	  for (var key in keys) {
	    if (keys.hasOwnProperty(key)) {
	      fns[key] = isType.bind(null, keys[key], true);
	    }
	  }
	  fns.iterable = iter.bind(null, true);
	  return fns;
	}(undefined);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	/**
	 * List of key events
	 * @param  {String} prop
	 * @return {Number}
	 */
	var _require = __webpack_require__(1),
	    isUndefined = _require.isUndefined;
	
	function KeyEvents(prop) {
	    // Browser detection
	    var KeyEvent = !module ? window.KeyEvent : void 0;
	
	    if (isUndefined(KeyEvent)) {
	        KeyEvent = {
	            DOM_VK_CANCEL: 3,
	            DOM_VK_HELP: 6,
	            DOM_VK_BACK_SPACE: 8,
	            DOM_VK_TAB: 9,
	            DOM_VK_CLEAR: 12,
	            DOM_VK_RETURN: 13,
	            DOM_VK_ENTER: 14,
	            DOM_VK_SHIFT: 16,
	            DOM_VK_CONTROL: 17,
	            DOM_VK_ALT: 18,
	            DOM_VK_PAUSE: 19,
	            DOM_VK_CAPS_LOCK: 20,
	            DOM_VK_ESCAPE: 27,
	            DOM_VK_SPACE: 32,
	            DOM_VK_PAGE_UP: 33,
	            DOM_VK_PAGE_DOWN: 34,
	            DOM_VK_END: 35,
	            DOM_VK_HOME: 36,
	            DOM_VK_LEFT: 37,
	            DOM_VK_UP: 38,
	            DOM_VK_RIGHT: 39,
	            DOM_VK_DOWN: 40,
	            DOM_VK_PRINTSCREEN: 44,
	            DOM_VK_INSERT: 45,
	            DOM_VK_DELETE: 46,
	            DOM_VK_0: 48,
	            DOM_VK_1: 49,
	            DOM_VK_2: 50,
	            DOM_VK_3: 51,
	            DOM_VK_4: 52,
	            DOM_VK_5: 53,
	            DOM_VK_6: 54,
	            DOM_VK_7: 55,
	            DOM_VK_8: 56,
	            DOM_VK_9: 57,
	            DOM_VK_SEMICOLON: 59,
	            DOM_VK_EQUALS: 61,
	            DOM_VK_A: 65,
	            DOM_VK_B: 66,
	            DOM_VK_C: 67,
	            DOM_VK_D: 68,
	            DOM_VK_E: 69,
	            DOM_VK_F: 70,
	            DOM_VK_G: 71,
	            DOM_VK_H: 72,
	            DOM_VK_I: 73,
	            DOM_VK_J: 74,
	            DOM_VK_K: 75,
	            DOM_VK_L: 76,
	            DOM_VK_M: 77,
	            DOM_VK_N: 78,
	            DOM_VK_O: 79,
	            DOM_VK_P: 80,
	            DOM_VK_Q: 81,
	            DOM_VK_R: 82,
	            DOM_VK_S: 83,
	            DOM_VK_T: 84,
	            DOM_VK_U: 85,
	            DOM_VK_V: 86,
	            DOM_VK_W: 87,
	            DOM_VK_X: 88,
	            DOM_VK_Y: 89,
	            DOM_VK_Z: 90,
	            DOM_VK_CONTEXT_MENU: 93,
	            DOM_VK_NUMPAD0: 96,
	            DOM_VK_NUMPAD1: 97,
	            DOM_VK_NUMPAD2: 98,
	            DOM_VK_NUMPAD3: 99,
	            DOM_VK_NUMPAD4: 100,
	            DOM_VK_NUMPAD5: 101,
	            DOM_VK_NUMPAD6: 102,
	            DOM_VK_NUMPAD7: 103,
	            DOM_VK_NUMPAD8: 104,
	            DOM_VK_NUMPAD9: 105,
	            DOM_VK_MULTIPLY: 106,
	            DOM_VK_ADD: 107,
	            DOM_VK_SEPARATOR: 108,
	            DOM_VK_SUBTRACT: 109,
	            DOM_VK_DECIMAL: 110,
	            DOM_VK_DIVIDE: 111,
	            DOM_VK_F1: 112,
	            DOM_VK_F2: 113,
	            DOM_VK_F3: 114,
	            DOM_VK_F4: 115,
	            DOM_VK_F5: 116,
	            DOM_VK_F6: 117,
	            DOM_VK_F7: 118,
	            DOM_VK_F8: 119,
	            DOM_VK_F9: 120,
	            DOM_VK_F10: 121,
	            DOM_VK_F11: 122,
	            DOM_VK_F12: 123,
	            DOM_VK_F13: 124,
	            DOM_VK_F14: 125,
	            DOM_VK_F15: 126,
	            DOM_VK_F16: 127,
	            DOM_VK_F17: 128,
	            DOM_VK_F18: 129,
	            DOM_VK_F19: 130,
	            DOM_VK_F20: 131,
	            DOM_VK_F21: 132,
	            DOM_VK_F22: 133,
	            DOM_VK_F23: 134,
	            DOM_VK_F24: 135,
	            DOM_VK_NUM_LOCK: 144,
	            DOM_VK_SCROLL_LOCK: 145,
	            DOM_VK_COMMA: 188,
	            DOM_VK_PERIOD: 190,
	            DOM_VK_SLASH: 191,
	            DOM_VK_BACK_QUOTE: 192,
	            DOM_VK_OPEN_BRACKET: 219,
	            DOM_VK_BACK_SLASH: 220,
	            DOM_VK_CLOSE_BRACKET: 221,
	            DOM_VK_QUOTE: 222,
	            DOM_VK_META: 224
	        };
	    }
	
	    return prop ? KeyEvent[prop] : KeyEvent;
	}
	
	module.exports = KeyEvents;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _require = __webpack_require__(1),
	    isIEBrowser = _require.isIEBrowser;
	
	/**
	 * File upload dialog
	 * @constructor param {String} type
	 */
	
	
	var NativeFileUploadDialog = function () {
	  function NativeFileUploadDialog(type) {
	    _classCallCheck(this, NativeFileUploadDialog);
	
	    this.type = type;
	    this.input = document.createElement('input');
	    if (this.type) {
	      this.input.setAttribute('accept', this.type);
	    }
	    this.input.setAttribute('style', 'visibility: hidden; opacity: 0; position: absolute;');
	    this.input.setAttribute('type', 'file');
	    // Check to see if browser is an IE10 or IE11 or edge
	    this.isIE10 = isIEBrowser('ie10');
	    this.isIE11 = isIEBrowser('ie11');
	    this.isEdge = isIEBrowser('edge');
	    // onChange event listener
	    // Based on browser type
	    if (this.isIE10 && this.input.attachEvent) {
	      // IE 10
	      this.input.attachEvent('onchange', this.onChange.bind(this), false);
	    } else {
	      // Other browsers including IE11
	      this.input.addEventListener('change', this.onChange.bind(this), false);
	    }
	  }
	
	  /**
	   * Allow access to the input elment for other props
	   * @param {String} prop
	   * @param {String} val
	   */
	
	
	  _createClass(NativeFileUploadDialog, [{
	    key: 'setAttribute',
	    value: function setAttribute(prop, val) {
	      this.input.setAttribute(prop, val);
	      return this;
	    }
	
	    /**
	     * Alias function for types
	     * @param  {String} type
	     */
	
	  }, {
	    key: 'setType',
	    value: function setType(type) {
	      this.type = type;
	      return this.setAttribute('type', type);
	    }
	
	    /**
	     * Show the dialog
	     */
	
	  }, {
	    key: 'open',
	    value: function open() {
	      if (this.type) {
	        this.input.setAttribute('accept', this.type);
	      }
	
	      document.body.appendChild(this.input);
	      this.input.click();
	
	      return this;
	    }
	  }, {
	    key: 'thenWith',
	    value: function thenWith(callback) {
	      this._callback = callback;
	
	      // Callback needs to fire here when using IE10 or IE11
	      // Reason: onChange event fires first
	      // Gets the files (IF ANY), then
	      // thenWith function fires
	      if ((this.isIE10 || this.isIE11 || this.isEdge) && typeof this.files !== 'undefined') {
	        this._callback(this.files);
	      }
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(event) {
	      this.event = event;
	
	      // Grab the uploaded files
	      if (this.isIE10) {
	        // IE10
	        this.files = event.srcElement.files;
	      } else {
	        // Other browsers including IE11
	        this.files = event.target.files;
	      }
	
	      // Callback fires when not using IE10 browser
	      // callback is undefined for IE10 at this stage
	      if (typeof this._callback === 'function') {
	        this._callback(this.files);
	      }
	
	      this.input.parentNode.removeChild(this.input);
	    }
	  }]);
	
	  return NativeFileUploadDialog;
	}();
	
	exports.default = NativeFileUploadDialog;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getIn = undefined;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _getIn = __webpack_require__(2);
	
	Object.defineProperty(exports, 'getIn', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_getIn).default;
	  }
	});
	exports.keys = keys;
	exports.toArray = toArray;
	exports.each = each;
	exports.size = size;
	exports.searchFn = searchFn;
	exports.any = any;
	exports.find = find;
	exports.findIndex = findIndex;
	exports.hasIn = hasIn;
	exports.isEqual = isEqual;
	
	var _is = __webpack_require__(3);
	
	var is = _interopRequireWildcard(_is);
	
	var _getIn2 = __webpack_require__(2);
	
	var _getIn3 = _interopRequireDefault(_getIn2);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Returns the Objects keys
	 * @param  {Object} obj
	 * @return {Array}  result
	 */
	function keys(obj) {
	  var result = [];
	  for (var key in obj) {
	    if (obj.hasOwnProperty(key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * Converts an Object to an Array
	 * @param  {Object} val
	 * @return {Array}  result
	 */
	function toArray(val) {
	  if (is.not.obj(val)) {
	    return val;
	  }
	  var objKeys = keys(val);
	  return objKeys.map(function (keyName) {
	    return val[keyName];
	  });
	}
	
	/**
	 * Iterate through each Object keys
	 * And binds a callback to each keys
	 * @param  {Object} val
	 * @param  {func}   fn
	 */
	function each(val, fn) {
	  if (is.obj(val)) {
	    val = toArray(val);
	  }
	  if (is.not.arr(val)) {
	    throw new TypeError('InvalidArgument: Not iterable');
	  }
	  for (var i, l = val.length; i < l; i++) {
	    fn.call(val, val[i], i, val);
	  }
	}
	
	/**
	 * Returns the size of an object or array
	 * @param  {Object || Array} val
	 * @return {Number}
	 */
	function size(val) {
	  if (is.obj(val)) {
	    return keys(val).length;
	  } else if (is.arr(val)) {
	    return val.length;
	  } else {
	    return -1;
	  }
	}
	
	/**
	 * Returns the function if available inside an object
	 * @param  {Object || Array || Func} val
	 * @return {mixed}
	 */
	function searchFn(val) {
	  if (is.func(val)) {
	    return val;
	  } else if (is.obj(val)) {
	    return function (item) {
	      if (is.not.obj(item)) {
	        return false;
	      }
	      var found = 0;
	      for (var key in val) {
	        if (val.hasOwnProperty(key) && item[key] === val[key]) {
	          found += 1;
	        }
	      }
	      return size(val) === found;
	    };
	  } else {
	    throw new TypeError('InvalidArgument: compare argument must be a function or object');
	  }
	}
	
	/**
	 * Similar to Javscript .some() function
	 * @param  {Object || Array}  values
	 * @param  {Func}             compare
	 * @return {Bool}
	 */
	function any(values, compare) {
	  // If not array or object, return
	  if ((typeof values === 'undefined' ? 'undefined' : _typeof(values)) !== 'object') {
	    return false;
	  }
	
	  if (is.obj(values)) {
	    values = toArray(values);
	  }
	  for (var i = 0, l = values.length; i < l; i++) {
	    if (searchFn(compare).call(values, values[i], i, values) === true) {
	      return true;
	    }
	  }
	  return false;
	}
	
	/**
	 * Similar to  Underscore _.find() function
	 * @param  {Array}  arr
	 * @param  {Func}   compare
	 * @param  {Mixed}  ctx (default value) optional
	 * @return {Mixed}
	 */
	function find(arr, compare, ctx) {
	  if (is.not.arr(arr)) {
	    return arr;
	  }
	
	  for (var i = 0, l = arr.length; i < l; i++) {
	    if (searchFn(compare).call(ctx || arr, arr[i], i, arr) === true) {
	      return arr[i];
	    }
	  }
	  return void 0;
	}
	
	/**
	 * Returns the index of an item in array if exisits, -1 otherwise
	 * @param  {Array}  arr
	 * @param  {Func}   compare
	 * @param  {Mixed}  ctx (default value) optional
	 * @return {Number} -1 if can't find it
	 */
	function findIndex(arr, compare, ctx) {
	  if (is.not.arr(arr)) {
	    return arr;
	  }
	  for (var i = 0, l = arr.length; i < l; i++) {
	    if (searchFn(compare).call(ctx || arr, arr[i], i, arr) === true) {
	      return i;
	    }
	  }
	  return -1;
	}
	
	/**
	 * Returns true if an object has the matched value,
	 * otherwise false
	 * @param  {Object}         obj
	 * @param  {Array<String>}  path
	 * @return {Mixed}
	 */
	function hasIn(obj, path) {
	  return is.not.undef((0, _getIn3.default)(obj, path));
	}
	
	/**
	 * First compres the size of two objects and then does a shallow
	 * comparison of the two objects values
	 * @param  {Mixed} one
	 * @param  {Mixed} two
	 * @return {Boolean}
	 */
	function isEqual(a, b) {
	  if (a === b) {
	    // Immutable
	    return true;
	  } else if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) !== (typeof b === 'undefined' ? 'undefined' : _typeof(b))) {
	    // Type mismatch
	    return false;
	  } else if (a instanceof Array && b instanceof Array && a.length !== b.length) {
	    // Array length mismatch
	    return false;
	  } else if (a instanceof Array && b instanceof Array) {
	    // Recurisively compare array values
	    return a.every(function (val, i) {
	      return isEqual(a[i], b[i]);
	    });
	  } else if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object' && Object.keys(a).length !== Object.keys(b).length) {
	    // Key length mismatch
	    return false;
	  } else if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
	    // Recurisively check object keys
	    return Object.keys(a).every(function (key) {
	      return isEqual(a[key], b[key]);
	    });
	  } else {
	    // No matches
	    return false;
	  }
	}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.KeyEvents = exports.NativeFileUploadDialog = exports.ParseUrl = exports.Collections = exports.Sort = exports.Utils = exports.Strings = undefined;
	
	var _strings = __webpack_require__(11);
	
	var strings = _interopRequireWildcard(_strings);
	
	var _utils = __webpack_require__(1);
	
	var utils = _interopRequireWildcard(_utils);
	
	var _sort = __webpack_require__(10);
	
	var sort = _interopRequireWildcard(_sort);
	
	var _collections = __webpack_require__(6);
	
	var collections = _interopRequireWildcard(_collections);
	
	var _parseUrl = __webpack_require__(8);
	
	var _parseUrl2 = _interopRequireDefault(_parseUrl);
	
	var _NativeFileUploadDialog = __webpack_require__(5);
	
	var _NativeFileUploadDialog2 = _interopRequireDefault(_NativeFileUploadDialog);
	
	var _KeyEvents = __webpack_require__(4);
	
	var _KeyEvents2 = _interopRequireDefault(_KeyEvents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = strings; /**
	                            * Exports
	                            *
	                            * @examples
	                            *    import {capitalize, stringShortener} from "ship-components-utility";
	                            */
	
	var Strings = exports.Strings = strings;
	var Utils = exports.Utils = utils;
	var Sort = exports.Sort = sort;
	var Collections = exports.Collections = collections;
	
	var ParseUrl = exports.ParseUrl = _parseUrl2.default;
	var NativeFileUploadDialog = exports.NativeFileUploadDialog = _NativeFileUploadDialog2.default;
	var KeyEvents = exports.KeyEvents = _KeyEvents2.default;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';
	
	var urlPattern = new RegExp('^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?');
	
	/**
	 * Breaks a URL into parts
	 * @param {String} url
	 */
	function parseUrl(url) {
	  var matches = url.match(urlPattern);
	  if (matches) {
	    return {
	      protocol: matches[2],
	      hostname: matches[4],
	      path: matches[5],
	      query: matches[7],
	      fragment: matches[9]
	    };
	  } else {
	    return void 0;
	  }
	}
	
	module.exports = parseUrl;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = pluck;
	
	var _is = __webpack_require__(3);
	
	var is = _interopRequireWildcard(_is);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	/**
	 * Extract only certian fields form an objectSize
	 * @param    {Object}           src
	 * @param    {Array<String>}    fields
	 * @return   {Object}
	 */
	function pluck(src, fields) {
	  if (is.not.obj(src)) {
	    throw new Error('src is not an object');
	  } else if (is.not.arr(fields)) {
	    throw new Error('fields is not an array');
	  }
	
	  var result = {};
	  fields.forEach(function (key) {
	    if (key in src) {
	      result[key] = src[key];
	    }
	  });
	  return result;
	}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.compareDates = compareDates;
	exports.sortBy = sortBy;
	exports.sortByDates = sortByDates;
	/** ****************************************************************************
	 * Sort
	 *
	 * @author       Isaac Suttell <isaac_suttell@playstation.sony.com>
	 * @file         Sorting functions to be user on front and backend
	 * @flow
	 ******************************************************************************/
	
	/**
	 * Check to see if a string starts with a '-'
	 * @type    {RegExp}
	 */
	var directionRegex = /^\-.*/;
	
	/**
	 * Compare two dates
	 *
	 * @param     {Date}    a
	 * @param     {Date}    b
	 * @return    {Number}
	 */
	function compareDates(a, b) {
	  var aTest = a instanceof Date ? a : new Date(a);
	  var bTest = b instanceof Date ? b : new Date(b);
	  return aTest - bTest;
	}
	
	/**
	 * Create a sorting function to sort an array of objects by prop. We accept any
	 * number of arguments to sort by
	 *
	 * @param     {String...}    prop
	 * @return    {Function}
	 */
	function sortBy() {
	  var props = Array.prototype.slice.call(arguments);
	
	  /**
	   * Comparator
	   *
	   * @param     {Object}    a
	   * @param     {Object}    b
	   * @return    {Number}
	   */
	  // Disable the eslint warning on function complexity
	  // TO DO: Improve the anonymus function performance
	  // eslint-disable-next-line
	  return function (a, b) {
	    // Loop through each prop we want to sort by
	    var index = -1;
	    while (++index < props.length) {
	      // Determine if we sort asc or desc
	      var direction = directionRegex.test(props[index]) ? -1 : 1;
	
	      // Trim the prop since the object key can't have spaces in it
	      var prop = props[index].trim().replace(/^\-/, '');
	
	      var keys = prop.split('.');
	
	      // Sort by sub properties
	      if (keys.length > 1) {
	        for (var i = 0; i < keys.length - 1; i++) {
	          a = a[keys[i]];
	          b = b[keys[i]];
	        }
	      }
	      prop = keys[keys.length - 1];
	
	      if (a[prop] instanceof Date && b[prop instanceof Date]) {
	        return compareDates(a[prop], b[prop]) * direction;
	      } else if (a[prop] && b[prop] && a[prop] > b[prop]) {
	        return 1 * direction;
	      } else if (a[prop] && b[prop] && a[prop] < b[prop]) {
	        return -1 * direction;
	      } else if (a[prop] && !b[prop]) {
	        return 1 * direction;
	      } else if (!a[prop] && b[prop]) {
	        return -1 * direction;
	      }
	      // If a[prop] matches b[prop] try the next prop
	    }
	    // Default matches
	    return 0;
	  };
	}
	
	/**
	 * Create a sorting function to sort an array of objects by prop. We accept any
	 * number of arguments to sort by
	 *
	 * @param     {String...}    prop
	 * @return    {Function}
	 */
	function sortByDates() {
	  var props = Array.prototype.slice.call(arguments);
	
	  /**
	   * Comparator
	   *
	   * @param     {Object}    a
	   * @param     {Object}    b
	   * @return    {Number}
	   */
	  return function (a, b) {
	    // Loop through each prop we want to sort by
	    var index = -1;
	    while (++index < props.length) {
	      // Determine if we sort asc or desc
	      var direction = directionRegex.test(props[index]) ? -1 : 1;
	
	      // Trim the prop since the object key can't have spaces in it
	      var prop = props[index].trim().replace(/^\-/, '');
	
	      return compareDates(a[prop], b[prop]) * direction;
	    }
	    // Default matches
	    return 0;
	  };
	}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.hash = hash;
	exports.slugify = slugify;
	exports.capitalize = capitalize;
	exports.titleCase = titleCase;
	exports.camelCase = camelCase;
	exports.toUnderscoreCase = toUnderscoreCase;
	exports.generateRandomString = generateRandomString;
	exports.stringShortener = stringShortener;
	exports.convertHTMLToString = convertHTMLToString;
	/**
	 * Convert a string to a unique hash we can use as an key
	 * http://stackoverflow.com/a/7616484
	 * @param  {String} str
	 * @return {Number}
	 */
	function hash(str) {
	  var result = 0;
	  if (str.length === 0) {
	    return result;
	  }
	  for (var i = 0, len = str.length; i < len; i++) {
	    var chr = str.charCodeAt(i);
	    result = (result << 5) - result + chr;
	    result |= 0; // Convert to 32bit integer
	  }
	  return result;
	}
	
	/**
	 * Convert a string into something that is url and css friendly
	 * @param     {String}    str
	 * @return    {String}
	 */
	function slugify(str) {
	  if (typeof str !== 'string') {
	    return str;
	  }
	  return str.trim().toLowerCase().replace(/\s|\/|\\|\!|\'|\"|\&/g, '-').replace('--', '-');
	}
	
	/**
	 * Capitalize string
	 * If more than one word, the 1st word will be capilized
	 * @param     {String}    str
	 * @return    {String}
	 */
	function capitalize(str) {
	  if (typeof str !== 'string') {
	    return str;
	  }
	
	  return str.charAt(0).toUpperCase() + str.slice(1);
	}
	
	/**
	 * Title case string
	 * @param     {String}    str
	 * @return    {String}
	 */
	function titleCase(str) {
	  return str.split(/\s/g).map(function (word) {
	    return capitalize(word, true);
	  }).join(' ');
	}
	
	/**
	 * Convert to camelCase string
	 * @param     {String}    str
	 * @return    {String}
	 */
	function camelCase(str) {
	  return str.charAt(0).toLowerCase() + titleCase(str).replace(/\s/g, '').substr(1);
	}
	
	/**
	 * Convert camel case to underscore case
	 * @param  {String} str
	 * @return {String}
	 */
	function toUnderscoreCase(str) {
	  if (!str) {
	    return str;
	  }
	  return str.replace(/\.?([A-Z])/g, function (x, y) {
	    return '_' + y.toLowerCase();
	  }).replace(/^_/, '').toUpperCase();
	}
	
	/**
	 * Generates a short random String
	 * @param  {Number} len
	 * @return {String}
	 */
	function generateRandomString(len) {
	  len = len || 7;
	  return (Math.random() * Math.pow(36, len)).toString(36).split('.')[0];
	}
	
	/**
	 * Shorten string
	 * @param     {String}    str
	 * @param     {Number}    charCount [default==100]
	 * @return    {String}
	 */
	function stringShortener(str) {
	  var charCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
	
	  if (typeof str !== 'string' || str.length < charCount) {
	    return str;
	  }
	
	  return str.slice(0, charCount) + ' ...';
	}
	
	/**
	 * Removes HTML tags from string
	 *
	 * @param     {String}    str
	 * @return    {String}
	 */
	function convertHTMLToString(str) {
	  if (typeof str !== 'string') {
	    return str;
	  }
	
	  return str.replace(/<\/?[^>]+(>|$)/g, '');
	}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Stypes to hide the text input
	 * @type {String}
	 */
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = nodeHeight;
	var HIDDEN_TEXTAREA_STYLE = '\n  height:0;\n  visibility:hidden;\n  overflow:hidden;\n  position:absolute;\n  z-index:-1000;\n  top:0;\n  right:0\n';
	
	var SIZING_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-rendering', 'text-transform', 'width', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];
	
	/**
	 * Reference to text area we use to calculate the styles
	 */
	var hiddenTextarea = void 0;
	
	function calculateNodeStyling(node) {
	  if (!node) {
	    throw new TypeError('InvalidArgument: missing argument');
	  }
	  var style = window.getComputedStyle(node);
	
	  var boxSizing = style.getPropertyValue('box-sizing') || style.getPropertyValue('-moz-box-sizing') || style.getPropertyValue('-webkit-box-sizing');
	
	  var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));
	
	  var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));
	
	  var sizingStyle = SIZING_STYLE.map(function (name) {
	    return name + ':' + style.getPropertyValue(name);
	  }).join(';');
	
	  var nodeInfo = {
	    sizingStyle: sizingStyle,
	    paddingSize: paddingSize,
	    borderSize: borderSize,
	    boxSizing: boxSizing
	  };
	
	  return nodeInfo;
	}
	
	function nodeHeight(uiTextNode) {
	  var minRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	  var maxRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	
	  if (!hiddenTextarea) {
	    hiddenTextarea = document.createElement('textarea');
	    document.body.appendChild(hiddenTextarea);
	  }
	
	  // Copy all CSS properties that have an impact on the height of the content in
	  // the textbox
	
	  var _calculateNodeStyling = calculateNodeStyling(uiTextNode),
	      paddingSize = _calculateNodeStyling.paddingSize,
	      borderSize = _calculateNodeStyling.borderSize,
	      boxSizing = _calculateNodeStyling.boxSizing,
	      sizingStyle = _calculateNodeStyling.sizingStyle;
	
	  // Need to have the overflow attribute to hide the scrollbar otherwise
	  // text-lines will not calculated properly as the shadow will technically be
	  // narrower for content
	
	
	  hiddenTextarea.setAttribute('style', sizingStyle + ';' + HIDDEN_TEXTAREA_STYLE);
	  hiddenTextarea.value = uiTextNode.value ? uiTextNode.value : '';
	
	  var result = {
	    minHeight: -Infinity,
	    maxHeight: Infinity,
	    height: hiddenTextarea.scrollHeight
	  };
	
	  if (boxSizing === 'border-box') {
	    // border-box: add border, since height = content + padding + border
	    result.height = result.height + borderSize;
	  } else if (boxSizing === 'content-box') {
	    // remove padding, since height = content
	    result.height = result.height - paddingSize;
	  }
	
	  // measure height of a textarea with a single row
	  hiddenTextarea.value = '';
	  var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
	
	  var modifiers = [{
	    fn: 'max',
	    value: maxRows,
	    prop: 'maxHeight'
	  }, {
	    fn: 'min',
	    value: minRows,
	    prop: 'minHeight'
	  }];
	
	  modifiers.filter(function (modifier) {
	    return modifier.value !== null;
	  }).forEach(function (mod) {
	    var rowHeight = singleRowHeight * mod.value;
	    if (boxSizing === 'border-box') {
	      rowHeight = rowHeight + paddingSize + borderSize;
	    }
	    result.height = Math[mod.fn](rowHeight, result.height);
	    result[mod.prop] = rowHeight;
	  });
	
	  return result;
	}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"container":"text-input--container","focus":"text-input--focus","fieldContainer":"text-input--fieldContainer","error":"text-input--error","success":"text-input--success","field":"text-input--field","label":"text-input--label","active":"text-input--active","hasLabel":"text-input--hasLabel"};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=TextInput.js.map