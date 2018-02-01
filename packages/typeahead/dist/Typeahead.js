(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("classnames"), require("react-dom"), require("ship-components-outsideclick"), require("ship-components-textinput"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "classnames", "react-dom", "ship-components-outsideclick", "ship-components-textinput"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React"), require("classnames"), require("react-dom"), require("ship-components-outsideclick"), require("ship-components-textinput")) : factory(root["React"], root["classnames"], root["react-dom"], root["ship-components-outsideclick"], root["ship-components-textinput"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__) {
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/** ****************************************************************************
	 * Typeahead
	 *
	 * @author       Isaac Suttell <isaac_suttell@playstation.sony.com>
	 * @file         As the user types, show a list of options
	 ******************************************************************************/
	
	// Modules
	
	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _fuzzy = __webpack_require__(6);
	
	var _fuzzy2 = _interopRequireDefault(_fuzzy);
	
	var _shipComponentsTextinput = __webpack_require__(10);
	
	var _shipComponentsTextinput2 = _interopRequireDefault(_shipComponentsTextinput);
	
	var _shipComponentsOutsideclick = __webpack_require__(9);
	
	var _shipComponentsOutsideclick2 = _interopRequireDefault(_shipComponentsOutsideclick);
	
	var _TypeaheadList = __webpack_require__(4);
	
	var _TypeaheadList2 = _interopRequireDefault(_TypeaheadList);
	
	var _typeahead = __webpack_require__(1);
	
	var _typeahead2 = _interopRequireDefault(_typeahead);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	// Components
	
	
	var Typeahead = function (_React$Component) {
	  _inherits(Typeahead, _React$Component);
	
	  function Typeahead(props) {
	    _classCallCheck(this, Typeahead);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.state = {
	      hide: true,
	      visible: _this.getResults.call(_this, props.value, props.options),
	      currentValue: props.value,
	      selected: 0
	    };
	
	    // Ensure proper context
	    var bindFn = ['getResults', 'handleChange', 'handleSelected', 'handleHide', 'keyEvent', 'handleKeyDown', 'handleBlur', '_onEnter', '_onUp', '_onDown', 'handleValidate', 'handleOutsideClick'];
	    bindFn.forEach(function (fn) {
	      return _this[fn] = _this[fn].bind(_this);
	    });
	    return _this;
	  }
	
	  Typeahead.prototype.componentDidMount = function componentDidMount() {
	    if (this.props.scrollParentClass) {
	      window.addEventListener('resize', this.handleHide);
	    }
	  };
	
	  /**
	   * Update selection if options change
	   *
	   * @param     {Object}    nextProps
	   */
	
	  Typeahead.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var currentValue = this.state.currentValue;
	
	    if (nextProps.value !== this.props.value) {
	      currentValue = nextProps.value;
	    }
	
	    // Get new results
	    var visible = this.getResults(currentValue, nextProps.options);
	
	    this.setState({
	      currentValue: currentValue,
	      visible: visible,
	      selected: 0
	    });
	  };
	
	  Typeahead.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this.props.scrollParentClass) {
	      window.removeEventListener('resize', this.handleHide);
	    }
	  };
	
	  Typeahead.prototype.handleHide = function handleHide() {
	    this.setState({
	      hide: true
	    });
	  };
	
	  /**
	   * Search get fuzzy search results
	   *
	   * @param     {String}           value
	   * @param     {Array<string>}    options
	   * @return    {Array<object>}
	   */
	
	  Typeahead.prototype.getResults = function getResults(currentValue, options) {
	    if (typeof currentValue === 'undefined') {
	      currentValue = '';
	    }
	
	    var results = _fuzzy2.default.filter(currentValue.toString() || '', options, {
	      pre: '<span class=\'' + this.props.matchedClass + '\'>',
	      post: '</span>',
	      extract: this.props.extract
	    });
	
	    // If we have an exact match, move it to the top
	    var exactIndex = results.findIndex(function (result) {
	      return result.original.value === currentValue;
	    });
	    if (exactIndex > -1) {
	      var exacted = results.splice(exactIndex, 1)[0];
	      results.unshift(exacted);
	    }
	
	    if (this.props.maxVisible && this.props.maxVisible > 0) {
	      results = results.slice(0, this.props.maxVisible);
	    }
	
	    return results;
	  };
	
	  /**
	   * Update the search results and parent
	   */
	
	  Typeahead.prototype.handleChange = function handleChange(event, callback) {
	    var _this2 = this;
	
	    var state = {
	      currentValue: event.target.value || '',
	      selected: 0
	    };
	
	    // Get new results
	    state.visible = state.currentValue.length > 0 ? this.getResults(state.currentValue, this.props.options) : [];
	
	    state.hide = false;
	    if (state.visible.length === 1) {
	      state.hide = state.visible[0].original.value === event.target.value;
	    }
	
	    this.setState(state, function () {
	      if (typeof _this2.props.onChange === 'function') {
	        _this2.props.onChange({
	          target: {
	            value: _this2.state.currentValue
	          }
	        });
	      }
	      if (typeof callback === 'function') {
	        callback();
	      }
	    });
	  };
	
	  /**
	    * Handle list item clicks
	    *
	    * @param     {Object}    option
	    */
	
	  Typeahead.prototype.handleSelected = function handleSelected(option, event) {
	    var _this3 = this;
	
	    event.stopPropagation();
	    if ((typeof option === 'undefined' ? 'undefined' : _typeof(option)) !== 'object') {
	      throw new TypeError('Option is not an object');
	    }
	    if (this.state.currentValue.length === '' || this.state.visible.length === 0) {
	      return;
	    }
	
	    var ev = {
	      target: {
	        value: option.original.value
	      }
	    };
	
	    this.handleChange(ev, function () {
	      if (typeof _this3.props.onSelected === 'function') {
	        _this3.props.onSelected(option, event);
	      }
	
	      var state = {
	        hide: true
	      };
	
	      if (_this3.props.clearOnSelect) {
	        state.currentValue = '';
	        state.selected = 0;
	        state.visible = [];
	      }
	      _this3.setState(state);
	    });
	  };
	
	  /**
	   * Associate a function handler depending on the keypress
	   *
	   * @param     {string}    keyName
	   * @return    {Function}
	   */
	
	  Typeahead.prototype.keyEvent = function keyEvent(keyName) {
	    switch (keyName) {
	      case 'Enter':
	        // if menu is hidden, do normal tab behavior
	        return this.state.hide ? void 0 : this._onEnter;
	      case 'ArrowDown':
	      case 'Down':
	        return this._onDown;
	      case 'ArrowUp':
	      case 'Up':
	        return this._onUp;
	      default:
	        return void 9;
	    }
	  };
	
	  /**
	   * Activate the currently selected item
	   */
	
	  Typeahead.prototype._onEnter = function _onEnter(event) {
	    if (this.state.visible[this.state.selected]) {
	      this.handleSelected(this.getSelected(), event);
	    }
	  };
	
	  /**
	   * Return the active selection
	   */
	
	  Typeahead.prototype.getSelected = function getSelected() {
	    return this.state.visible[this.state.selected];
	  };
	
	  /**
	   * Event to move the selection up the list
	   */
	
	  Typeahead.prototype._onUp = function _onUp() {
	    var current = this.state.selected;
	    this.setState({
	      selected: current > 0 ? current - 1 : 0
	    });
	  };
	
	  /**
	   * Event to move the selection down the list
	   */
	
	  Typeahead.prototype._onDown = function _onDown() {
	    var current = this.state.selected;
	    var max = this.state.visible.length - 1;
	    this.setState({
	      selected: current < max ? current + 1 : max
	    });
	  };
	
	  Typeahead.prototype.stopHiding = function stopHiding() {
	    if (this.state.hide === true) {
	      this.setState({
	        hide: false
	      });
	    }
	  };
	
	  /**
	   * Function to help ignore special key strokes
	   * @param  {String}  keyName
	   * @return {Boolean}
	   */
	
	  Typeahead.prototype.isSpecialKey = function isSpecialKey(keyName) {
	    return ['Alt', 'CapsLock', 'Control', 'Fn', 'Meta', 'Shift', 'Tab'].includes(keyName);
	  };
	
	  /**
	   * Call any associated key events
	   *
	   * @param     {Event}    event
	   */
	
	  Typeahead.prototype.handleKeyDown = function handleKeyDown(event) {
	    if (!this.isSpecialKey(event.key)) {
	      this.stopHiding();
	    }
	
	    var handler = this.keyEvent(event.key);
	    if (typeof handler === 'function') {
	      event.preventDefault();
	      handler.call(this, event);
	    }
	
	    if (typeof this.props.onKeyDown === 'function') {
	      this.props.onKeyDown(event);
	    }
	  };
	
	  Typeahead.prototype.handleOutsideClick = function handleOutsideClick() {
	    this.setState({
	      hide: true
	    });
	  };
	
	  Typeahead.prototype.handleBlur = function handleBlur(event) {
	    if (typeof this.props.onBlur === 'function') {
	      this.props.onBlur(event);
	    }
	
	    this.setState({
	      hide: true
	    });
	  };
	
	  Typeahead.prototype.renderEmpty = function renderEmpty(classes) {
	    return _react2.default.createElement('div', { className: classes }, _react2.default.createElement('div', { className: 'typeahead--container' }, _react2.default.createElement('div', { className: 'typeahead--input form-input' }, this.state.currentValue)));
	  };
	
	  Typeahead.prototype.handleValidate = function handleValidate(value) {
	    if (typeof this.props.validate === 'function') {
	      return this.props.validate(value, this.getSelected());
	    }
	    return true;
	  };
	
	  /**
	   * Render
	   *
	   * @return    {Render}
	   */
	
	  Typeahead.prototype.render = function render() {
	    var _classNames;
	
	    var classes = (0, _classnames2.default)('typeahead', this.props.className, (_classNames = {}, _defineProperty(_classNames, _typeahead2.default.editable, this.props.editable), _defineProperty(_classNames, 'typeahead--editable', this.props.editable), _classNames));
	
	    if (!this.props.editable) {
	      return this.renderEmpty(classes);
	    }
	
	    // Type checking to prevent React 15 warning
	    var customProps = null;
	    if (this.refs.textInput && _typeof(this.refs.textInput) === 'object') {
	      customProps = {
	        editable: true,
	        validate: this.handleValidate,
	        minRows: 1,
	        maxRows: 1,
	        error: this.props.error
	      };
	    }
	
	    return _react2.default.createElement('div', { className: classes }, _react2.default.createElement(_shipComponentsOutsideclick2.default, {
	      className: (0, _classnames2.default)('typeahead--container', _typeahead2.default.container),
	      onClick: this.handleOutsideClick.bind(this)
	    }, _react2.default.createElement('div', null, _react2.default.createElement(_shipComponentsTextinput2.default, _extends({
	      ref: 'textInput',
	      className: (0, _classnames2.default)('typeahead--input', _typeahead2.default.input),
	      onChange: this.handleChange,
	      onKeyDown: this.handleKeyDown,
	      onBlur: this.handleBlur,
	      onFocus: this.props.onFocus,
	      value: this.state.currentValue,
	      label: this.props.placeholder
	    }, customProps)), this.props.isLoading ? _react2.default.createElement('span', { className: (0, _classnames2.default)('icon-refresh', _typeahead2.default.loading) }) : null), _react2.default.createElement(_TypeaheadList2.default, {
	      scrollingParentClass: this.props.scrollParentClass,
	      onScrollingParentScroll: this.handleHide,
	      hidden: this.state.hide,
	      empty: this.state.hide || this.props.isLoading ? void 0 : this.props.empty,
	      selected: this.state.selected,
	      value: this.state.currentValue,
	      extract: this.props.extract,
	      visible: this.state.hide ? [] : this.state.visible,
	      onSelected: this.handleSelected
	    })));
	  };
	
	  return Typeahead;
	}(_react2.default.Component);
	
	// Type checking
	
	
	var _React$PropTypes = _react2.default.PropTypes,
	    number = _React$PropTypes.number,
	    string = _React$PropTypes.string,
	    array = _React$PropTypes.array,
	    bool = _React$PropTypes.bool,
	    func = _React$PropTypes.func;
	
	Typeahead.propTypes = {
	  maxVisible: number,
	  matchedClass: string,
	  placeholder: string,
	  value: string,
	  label: string,
	  options: array,
	  clearOnSelect: bool,
	  editable: bool,
	  empty: bool,
	  isLoading: bool,
	  extract: func,
	  onChange: func
	};
	
	Typeahead.defaultProps = {
	  isLoading: false,
	  editable: true,
	  empty: false,
	  options: [],
	  label: '',
	  value: '',
	  placeholder: '',
	  maxVisible: 5,
	  clearOnSelect: false,
	  matchedClass: 'typeahead-found',
	  extract: function extract(item) {
	    return item;
	  }
	};
	
	exports.default = Typeahead;

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"container":"typeahead--container","list":"typeahead--list","item":"typeahead--item","hidden":"typeahead--hidden","selected":"typeahead--selected","found":"typeahead--found","loading":"typeahead--loading","spin":"typeahead--spin","editable":"typeahead--editable"};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	/** ****************************************************************************
	 * Typeahead List
	 *
	 * @author       Isaac Suttell <isaac_suttell@playstation.sony.com>
	 * @file         Shows a list of options when a user types
	 ******************************************************************************/
	
	// Modules
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(8);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _TypeaheadOption = __webpack_require__(5);
	
	var _TypeaheadOption2 = _interopRequireDefault(_TypeaheadOption);
	
	var _typeahead = __webpack_require__(1);
	
	var _typeahead2 = _interopRequireDefault(_typeahead);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	// Components
	
	
	var TypeaheadList = function (_React$Component) {
	  _inherits(TypeaheadList, _React$Component);
	
	  function TypeaheadList(props) {
	    _classCallCheck(this, TypeaheadList);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.state = {
	      fixedDropdownStyle: {
	        top: 'inherit',
	        width: 'inherit',
	        left: 'inherit',
	        position: 'fixed'
	      }
	    };
	    return _this;
	  }
	
	  /**
	   * Try to keep the selected comp in view
	   */
	
	  TypeaheadList.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    // if drop down with scrolling parent became active, update the positioning styles
	    if (this.shouldCalculateDropdownStyle(prevProps)) {
	      this.setState(this.fixedDropdownStyle());
	    }
	  };
	
	  /**
	   * remove scroll listener if its there
	   */
	
	  TypeaheadList.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this.scrollParent) {
	      this.scrollParent.removeEventListener('scroll', this.props.onScrollingParentScroll);
	    }
	  };
	
	  TypeaheadList.prototype.shouldCalculateDropdownStyle = function shouldCalculateDropdownStyle(prevProps) {
	    return this.props.scrollingParentClass && this.props.visible.length > 0 && (prevProps.hidden && !this.props.hidden || this.props.visible.length !== prevProps.visible.length);
	  };
	
	  /**
	   * Store a reference to Typeahead's scrolling ancestor node
	   * @param  {string} parentClass  the unique className of the scrolling ancestor node
	   */
	
	  TypeaheadList.prototype.registerScrollParent = function registerScrollParent(parentClass) {
	    var list = _reactDom2.default.findDOMNode(this);
	    if (!list) {
	      return void 0;
	    }
	    var ancestor = list.parentNode;
	    while (ancestor && ancestor !== document) {
	      if (ancestor.classList.contains(parentClass)) {
	        ancestor.addEventListener('scroll', this.props.onScrollingParentScroll);
	        this.scrollParent = ancestor;
	        return ancestor;
	      }
	      ancestor = ancestor.parentNode;
	    }
	  };
	
	  /**
	   * Calculate where to place the dropdown when dropdown must have position:fixed
	   */
	
	  TypeaheadList.prototype.fixedDropdownStyle = function fixedDropdownStyle() {
	    if (!this.scrollParent && !this.registerScrollParent(this.props.scrollingParentClass)) {
	      if (process.env.NODE_ENV !== 'production') {
	        console.error('<Typeahead /> could not get scrollParent for fixedDropdownStyle()');
	      }
	      return;
	    }
	    var parent = _reactDom2.default.findDOMNode(this).parentNode;
	    var source = parent;
	    var offsetTop = 0;
	    var scrollParentTop = this.scrollParent.scrollTop;
	    while (source) {
	      offsetTop += source.offsetTop;
	      source = source.offsetParent;
	    }
	
	    return {
	      fixedDropdownStyle: {
	        width: parent.offsetWidth + 'px',
	        position: 'fixed',
	        left: 'inherit',
	        top: offsetTop - scrollParentTop + parent.offsetHeight + 'px'
	      }
	    };
	  };
	
	  /**
	   * Calculate where to place the dropdown when dropdown must have position:fixed
	   */
	
	  TypeaheadList.prototype.getDropdownStyle = function getDropdownStyle() {
	    return this.props.scrollingParentClass && this.props.visible.length > 0 ? this.state.fixedDropdownStyle : {};
	  };
	
	  TypeaheadList.prototype.hasOptions = function hasOptions() {
	    return this.props.value && this.props.visible instanceof Array && this.props.visible.length > 0;
	  };
	
	  /**
	   * Render list by order of score
	   */
	
	  TypeaheadList.prototype.render = function render() {
	    var _this2 = this;
	
	    if (this.props.visible.length === 0 && this.props.empty !== false) {
	      // Can't find anything
	      return _react2.default.createElement('ul', {
	        className: _typeahead2.default.list
	      }, _react2.default.createElement(_TypeaheadOption2.default, { empty: this.props.empty }));
	    }
	
	    var listClass = this.hasOptions() ? _typeahead2.default.list : (0, _classnames2.default)(_typeahead2.default.list, _typeahead2.default.hidden);
	    var listStyle = this.getDropdownStyle();
	    return _react2.default.createElement('ul', {
	      style: listStyle,
	      className: (0, _classnames2.default)('typeahead--list', listClass)
	    }, this.props.visible.filter(function (item) {
	      return item && item.score && item.original;
	    }).sort(function (a, b) {
	      return b.score - a.score;
	    }).map(function (option, index) {
	      var key = _this2.props.extract(option.original);
	      return _react2.default.createElement(_TypeaheadOption2.default, {
	        key: key,
	        selected: _this2.props.selected === index,
	        option: option,
	        onClick: _this2.props.onSelected.bind(null, option) });
	    }));
	  };
	
	  return TypeaheadList;
	}(_react2.default.Component);
	
	// Type checking
	
	
	exports.default = TypeaheadList;
	var _React$PropTypes = _react2.default.PropTypes,
	    number = _React$PropTypes.number,
	    string = _React$PropTypes.string,
	    array = _React$PropTypes.array,
	    bool = _React$PropTypes.bool,
	    func = _React$PropTypes.func;
	
	TypeaheadList.propTypes = {
	  selected: number,
	  value: string,
	  visible: array,
	  empty: bool,
	  extract: func,
	  onSelected: func
	};
	
	/**
	 * Defaults
	 * @static
	 * @type {Object}
	 */
	TypeaheadList.defaultProps = {
	  empty: false,
	  visible: [],
	  onSelected: function onSelected() {}
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(3);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _typeahead = __webpack_require__(1);
	
	var _typeahead2 = _interopRequireDefault(_typeahead);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var TypeaheadOption = function (_React$Component) {
	  _inherits(TypeaheadOption, _React$Component);
	
	  /**
	   * Setup
	   */
	  function TypeaheadOption(props) {
	    _classCallCheck(this, TypeaheadOption);
	
	    // Binding
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
	    return _this;
	  }
	
	  /**
	   * Option clicked. Must be on mouse down so we can intercept the focus
	   */
	
	  TypeaheadOption.prototype.handleMouseDown = function handleMouseDown(event) {
	    // Prevent the blur event from happening and let the text edit keep its focus
	    event.preventDefault();
	
	    // Call parent
	    if (typeof this.props.onClick === 'function') {
	      this.props.onClick(event);
	    }
	  };
	
	  /**
	   * Render
	   * @return    {React}
	   */
	
	  TypeaheadOption.prototype.render = function render() {
	    var classes = (0, _classnames2.default)('typeahead--item', _typeahead2.default.item, _defineProperty({
	      'typeahead--selected': this.props.selected
	    }, _typeahead2.default.selected, this.props.selected));
	
	    if (this.props.empty) {
	      return _react2.default.createElement('li', { className: classes }, typeof this.props.empty === 'string' ? this.props.empty : 'No Results...');
	    }
	
	    return _react2.default.createElement('li', {
	      className: classes,
	      onMouseDown: this.handleMouseDown
	      /* eslint-disable */
	      , dangerouslySetInnerHTML: { __html: this.props.option.string }
	      /* eslint-enable */
	    });
	  };
	
	  return TypeaheadOption;
	}(_react2.default.Component);
	
	// Type checking
	
	
	exports.default = TypeaheadOption;
	var _React$PropTypes = _react2.default.PropTypes,
	    bool = _React$PropTypes.bool,
	    object = _React$PropTypes.object;
	
	TypeaheadOption.propTypes = {
	  selected: bool,
	  empty: bool,
	  option: object
	};
	
	TypeaheadOption.defaultProps = {
	  empty: false,
	  option: {
	    original: '',
	    string: ''
	  }
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Fuzzy
	 * https://github.com/myork/fuzzy
	 *
	 * Copyright (c) 2012 Matt York
	 * Licensed under the MIT license.
	 */
	
	(function() {
	
	var root = this;
	
	var fuzzy = {};
	
	// Use in node or in browser
	if (true) {
	  module.exports = fuzzy;
	} else {
	  root.fuzzy = fuzzy;
	}
	
	// Return all elements of `array` that have a fuzzy
	// match against `pattern`.
	fuzzy.simpleFilter = function(pattern, array) {
	  return array.filter(function(str) {
	    return fuzzy.test(pattern, str);
	  });
	};
	
	// Does `pattern` fuzzy match `str`?
	fuzzy.test = function(pattern, str) {
	  return fuzzy.match(pattern, str) !== null;
	};
	
	// If `pattern` matches `str`, wrap each matching character
	// in `opts.pre` and `opts.post`. If no match, return null
	fuzzy.match = function(pattern, str, opts) {
	  opts = opts || {};
	  var patternIdx = 0
	    , result = []
	    , len = str.length
	    , totalScore = 0
	    , currScore = 0
	    // prefix
	    , pre = opts.pre || ''
	    // suffix
	    , post = opts.post || ''
	    // String to compare against. This might be a lowercase version of the
	    // raw string
	    , compareString =  opts.caseSensitive && str || str.toLowerCase()
	    , ch;
	
	  pattern = opts.caseSensitive && pattern || pattern.toLowerCase();
	
	  // For each character in the string, either add it to the result
	  // or wrap in template if it's the next string in the pattern
	  for(var idx = 0; idx < len; idx++) {
	    ch = str[idx];
	    if(compareString[idx] === pattern[patternIdx]) {
	      ch = pre + ch + post;
	      patternIdx += 1;
	
	      // consecutive characters should increase the score more than linearly
	      currScore += 1 + currScore;
	    } else {
	      currScore = 0;
	    }
	    totalScore += currScore;
	    result[result.length] = ch;
	  }
	
	  // return rendered string if we have a match for every char
	  if(patternIdx === pattern.length) {
	    // if the string is an exact match with pattern, totalScore should be maxed
	    totalScore = (compareString === pattern) ? Infinity : totalScore;
	    return {rendered: result.join(''), score: totalScore};
	  }
	
	  return null;
	};
	
	// The normal entry point. Filters `arr` for matches against `pattern`.
	// It returns an array with matching values of the type:
	//
	//     [{
	//         string:   '<b>lah' // The rendered string
	//       , index:    2        // The index of the element in `arr`
	//       , original: 'blah'   // The original element in `arr`
	//     }]
	//
	// `opts` is an optional argument bag. Details:
	//
	//    opts = {
	//        // string to put before a matching character
	//        pre:     '<b>'
	//
	//        // string to put after matching character
	//      , post:    '</b>'
	//
	//        // Optional function. Input is an entry in the given arr`,
	//        // output should be the string to test `pattern` against.
	//        // In this example, if `arr = [{crying: 'koala'}]` we would return
	//        // 'koala'.
	//      , extract: function(arg) { return arg.crying; }
	//    }
	fuzzy.filter = function(pattern, arr, opts) {
	  if(!arr || arr.length === 0) {
	    return [];
	  }
	  if (typeof pattern !== 'string') {
	    return arr;
	  }
	  opts = opts || {};
	  return arr
	    .reduce(function(prev, element, idx, arr) {
	      var str = element;
	      if(opts.extract) {
	        str = opts.extract(element);
	      }
	      var rendered = fuzzy.match(pattern, str, opts);
	      if(rendered != null) {
	        prev[prev.length] = {
	            string: rendered.rendered
	          , score: rendered.score
	          , index: idx
	          , original: element
	        };
	      }
	      return prev;
	    }, [])
	
	    // Sort by score. Browsers are inconsistent wrt stable/unstable
	    // sorting, so force stable by using the index in the case of tie.
	    // See http://ofb.net/~sethml/is-sort-stable.html
	    .sort(function(a,b) {
	      var compare = b.score - a.score;
	      if(compare) return compare;
	      return a.index - b.index;
	    });
	};
	
	
	}());
	


/***/ },
/* 7 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=Typeahead.js.map