(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("react-addons-css-transition-group"), require("react-dom"), require("ship-components-highlight-click"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "react-addons-css-transition-group", "react-dom", "ship-components-highlight-click"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React"), require("react-addons-css-transition-group"), require("react-dom"), require("ship-components-highlight-click")) : factory(root["React"], root["react-addons-css-transition-group"], root["react-dom"], root["ship-components-highlight-click"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
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
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(4);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactAddonsCssTransitionGroup = __webpack_require__(3);
	
	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
	
	var _shipComponentsHighlightClick = __webpack_require__(5);
	
	var _shipComponentsHighlightClick2 = _interopRequireDefault(_shipComponentsHighlightClick);
	
	var _checkBox = __webpack_require__(1);
	
	var _checkBox2 = _interopRequireDefault(_checkBox);
	
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
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	} /** ****************************************************************************
	   * CheckBox
	   *
	   * @author       Isaac Suttell <isaac@isaacsuttell.com>
	   * @file         Reusable checkbox component. Requires webpack with style/css-loader
	   ******************************************************************************/
	
	// Modules
	
	
	var CheckBox = function (_React$Component) {
	  _inherits(CheckBox, _React$Component);
	
	  /**
	   * Material Design inspired Cseckbox Component. Can either be controlled or uncontrolled.
	   * @param  {Object} props
	   */
	  function CheckBox(props) {
	    _classCallCheck(this, CheckBox);
	
	    var _this = _possibleConstructorReturn(this, (CheckBox.__proto__ || Object.getPrototypeOf(CheckBox)).call(this, props));
	
	    _this.state = {
	      selected: props.readOnly === true ? props.selected : props.defaultValue
	    };
	    return _this;
	  }
	
	  /**
	   * If we're in readOnly mode then keep the state in sync with the props
	   * @param  {Object} nextProps
	   */
	
	  _createClass(CheckBox, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.props.readOnly === true && this.state.selected !== nextProps.selected) {
	        this.setState({
	          selected: nextProps.selected
	        });
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return this.props.selected !== nextProps.selected || this.state.selected !== nextState.selected || this.props.label !== nextProps.label;
	    }
	
	    /**
	     * Toggle it
	     */
	
	  }, {
	    key: 'handleClick',
	    value: function handleClick() {
	      var _this2 = this;
	
	      // Toggle
	      this.setState({
	        selected: !this.state.selected
	      }, function () {
	        // Ensure the state is update to date
	        _this2.triggerChangeEvent();
	      });
	    }
	
	    /**
	     * Create and send a change event to the parent
	     */
	
	  }, {
	    key: 'triggerChangeEvent',
	    value: function triggerChangeEvent() {
	      var _this3 = this;
	
	      // Grab the dom element so the event.target is correct
	      var el = _reactDom2.default.findDOMNode(this.refs.input);
	
	      // Generate a change event to let the parent know
	      try {
	        (function () {
	          var customEvent = new window.MouseEvent('change');
	
	          // Calls parent change function with the custom event and the right target
	          var handler = function (ev) {
	            // Clean up
	            el.removeEventListener('change', handler);
	            if (typeof this.props.onChange === 'function') {
	              // Call
	              this.props.onChange.call(ev, ev);
	            }
	          }.bind(_this3);
	
	          // Attach
	          el.addEventListener('change', handler);
	
	          // Trigger
	          el.dispatchEvent(customEvent);
	        })();
	      } catch (err) {
	        // Fallback to just passing an object with the element in it
	        if (typeof this.props.onChange === 'function') {
	          // Call
	          this.props.onChange({
	            target: el
	          });
	        }
	      }
	    }
	    /**
	     * Render Method
	     * @return {React}
	     */
	
	  }, {
	    key: 'render',
	    value: function render() {
	      var classNames = 'ship-check-box ' + _checkBox2.default.container;
	
	      var selected = this.props.readOnly === true ? this.props.selected : this.state.selected;
	
	      if (selected) {
	        classNames += ' ' + _checkBox2.default.checked;
	      }
	
	      if (this.props.className) {
	        classNames += ' ' + this.props.className;
	      }
	
	      return _react2.default.createElement(_shipComponentsHighlightClick2.default, {
	        className: classNames,
	        onClick: this.handleClick.bind(this) }, _react2.default.createElement('div', {
	        className: _checkBox2.default.input
	      }, _react2.default.createElement('span', { className: _checkBox2.default['icon-background'] + ' ' + this.props.outlineIconClass + ' ' + _checkBox2.default.icon }), _react2.default.createElement(_reactAddonsCssTransitionGroup2.default, {
	        transitionName: _checkBox2.default,
	        transitionEnterTimeout: 500,
	        transitionLeaveTimeout: 500 }, selected === true ? _react2.default.createElement('span', { className: _checkBox2.default.icon + ' ' + this.props.selectedIconClass }) : null)), _react2.default.createElement('label', { className: _checkBox2.default.label }, this.props.label || this.props.children), _react2.default.createElement('input', {
	        className: _checkBox2.default.controller,
	        readOnly: this.props.readOnly,
	        type: this.props.type,
	        checked: this.state.selected,
	        value: this.props.value || this.state.selected,
	        ref: 'input'
	      }));
	    }
	  }]);
	
	  return CheckBox;
	}(_react2.default.Component);
	
	/**
	 * Type Checks
	 * @type {Object}
	 * @static
	 */
	
	exports.default = CheckBox;
	CheckBox.propTypes = {
	  defaultValue: _react2.default.PropTypes.bool,
	  readOnly: _react2.default.PropTypes.bool,
	  selected: _react2.default.PropTypes.bool,
	  value: _react2.default.PropTypes.string,
	  label: _react2.default.PropTypes.string,
	  onChange: _react2.default.PropTypes.func,
	  outlineIcon: _react2.default.PropTypes.element,
	  selectedIcon: _react2.default.PropTypes.element
	};
	
	/**
	 * Defaults
	 * @type {Object}
	 * @static
	 */
	CheckBox.defaultProps = {
	  type: 'checkbox',
	  defaultValue: false,
	  readOnly: false,
	  outlineIconClass: 'icon-check_box_outline_blank',
	  selectedIconClass: 'icon-check_box'
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"container":"check-box--container","icon":"check-box--icon","input":"check-box--input","icon-background":"check-box--icon-background","label":"check-box--label","checked":"check-box--checked","controller":"check-box--controller","enter":"check-box--enter","enterActive":"check-box--enterActive","leave":"check-box--leave","leaveActive":"check-box--leaveActive"};

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
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=Checkbox.js.map