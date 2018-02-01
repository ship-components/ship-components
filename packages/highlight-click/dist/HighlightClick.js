/*!
 *        .__    .__                                                                          __                   .__    .__       .__    .__  .__       .__     __                   .__  .__        __    
 *   _____|  |__ |__|_____             ____  ____   _____ ______   ____   ____   ____   _____/  |_  ______         |  |__ |__| ____ |  |__ |  | |__| ____ |  |___/  |_            ____ |  | |__| ____ |  | __
 *  /  ___/  |  \|  \____ \   ______ _/ ___\/  _ \ /     \\____ \ /  _ \ /    \_/ __ \ /    \   __\/  ___/  ______ |  |  \|  |/ ___\|  |  \|  | |  |/ ___\|  |  \   __\  ______ _/ ___\|  | |  |/ ___\|  |/ /
 *  \___ \|   Y  \  |  |_> > /_____/ \  \__(  <_> )  Y Y  \  |_> >  <_> )   |  \  ___/|   |  \  |  \___ \  /_____/ |   Y  \  / /_/  >   Y  \  |_|  / /_/  >   Y  \  |   /_____/ \  \___|  |_|  \  \___|    < 
 * /____  >___|  /__|   __/           \___  >____/|__|_|  /   __/ \____/|___|  /\___  >___|  /__| /____  >         |___|  /__\___  /|___|  /____/__\___  /|___|  /__|            \___  >____/__|\___  >__|_ \
 *      \/     \/   |__|                  \/            \/|__|               \/     \/     \/          \/               \/  /_____/      \/       /_____/      \/                    \/             \/     \/
 * ship-components-highlight-click 0.2.0
 * Description: Generates temporary click highlights
 * Author: Isaac Suttell
 * Homepage: https://github.com/ship-components/ship-components-highlight-click/issues#readme
 * Bugs: https://github.com/ship-components/ship-components-highlight-click/issues
 * License: MIT
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(3);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _highlightClick = __webpack_require__(1);

	var _highlightClick2 = _interopRequireDefault(_highlightClick);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** ****************************************************************************
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * HighlightClick
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author       Isaac Suttell <isaac_suttell@playstation.sony.com>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file         Show expanding circles where the user clicks
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ******************************************************************************/

	// Modules


	// CSS Modules


	var HighlightClick = function (_React$Component) {
	  _inherits(HighlightClick, _React$Component);

	  /**
	   * Wrapper component that generates click highlights when the user clicks inside it
	   * @param  {Object} props
	   */
	  function HighlightClick(props) {
	    _classCallCheck(this, HighlightClick);

	    var _this = _possibleConstructorReturn(this, (HighlightClick.__proto__ || Object.getPrototypeOf(HighlightClick)).call(this, props));

	    _this.state = {
	      clicks: []
	    };
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }

	  /**
	   * Clean up any async timeouts when we unount
	   */


	  _createClass(HighlightClick, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.state.clicks.forEach(function (click) {
	        clearTimeout(click.timeoutId);
	      });
	    }

	    /**
	     * Figure out the relative position in the element where the user clicked
	     * @param  {React}   el
	     * @param  {Event}   event
	     * @return {Object}
	     */

	  }, {
	    key: 'getRelativeClickPosition',
	    value: function getRelativeClickPosition(el, event) {
	      el = el || _reactDom2.default.findDOMNode(this);
	      var elOffset = HighlightClick.getElementOffset(el);
	      return {
	        top: event.pageY - elOffset.top,
	        left: event.pageX - elOffset.left
	      };
	    }

	    /**
	     * The bread and butter. Creates a highglight
	     * @param  {Event} event
	     * @return {[type]}       [description]
	     */

	  }, {
	    key: 'handleClick',
	    value: function handleClick(event) {
	      var el = _reactDom2.default.findDOMNode(this);

	      // Figure out where the click is
	      var click = this.getRelativeClickPosition(el, event);

	      // Ensure we have a unqiue id we can keep track of
	      click.id = Date.now();

	      // Async remove click after it times out
	      click.timeoutId = setTimeout(this.removeClick.bind(this, click), this.props.timeout);

	      // Clone to prevent accidently changes
	      var clicks = this.state.clicks.slice(0);

	      // Add the new click
	      clicks.push(click);

	      // Save
	      this.setState({
	        clicks: clicks
	      });

	      if (typeof this.props.onClick === 'function') {
	        this.props.onClick(event);
	      }
	    }

	    /**
	     * Remove the click from the state since we don't need it anymore
	     * @param  {Object} click
	     */

	  }, {
	    key: 'removeClick',
	    value: function removeClick(click) {
	      // Clone
	      var clicks = this.state.clicks.slice(0);

	      // Find it
	      var index = clicks.findIndex(function (item) {
	        return item.id === click.id;
	      });

	      if (index > -1) {
	        // Remove it
	        clicks.splice(index, 1);

	        // Update
	        this.setState({
	          clicks: clicks
	        });
	      }
	    }

	    /**
	     * Render any active highlights
	     * @return {React}
	     */

	  }, {
	    key: 'renderHighlights',
	    value: function renderHighlights() {
	      var _this2 = this;

	      if (this.props.disabled || !this.state.clicks.length) {
	        return null;
	      }

	      return this.state.clicks.map(function (click) {
	        var styles = {
	          position: 'absolute'
	        };

	        // Size
	        styles.width = _this2.props.size;
	        styles.height = _this2.props.size;

	        // Center
	        styles.left = (click.left || 0) - _this2.props.size / 2;
	        styles.top = (click.top || 0) - _this2.props.size / 2;
	        return _react2.default.createElement('div', {
	          key: click.id,
	          style: styles,
	          className: 'highlight-click--click ' + _highlightClick2.default.click
	        });
	      });
	    }

	    /**
	     * Clone props and pass them from our parent
	     * @return {Object}
	     */

	  }, {
	    key: 'transferProps',
	    value: function transferProps() {
	      var props = Object.assign({}, this.props);

	      // Don't pass these to our component
	      ['size', 'timeout', 'type', 'disabled', 'tag'].forEach(function (prop) {
	        delete props[prop];
	      });

	      return props;
	    }

	    /**
	     * This component is mostly a wrapper.
	     * @return {React}
	     */

	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        this.props.tag,
	        _extends({}, this.transferProps(), {
	          className: 'highlight-click ' + _highlightClick2.default.container + ' ' + (this.props.className ? ' ' + this.props.className : ''),
	          onClick: this.handleClick
	        }),
	        this.renderHighlights(),
	        this.props.children
	      );
	    }
	  }]);

	  return HighlightClick;
	}(_react2.default.Component);

	/**
	 * Based on jQuery. Get the elements offset to the top/left of page
	 * @param    {Node}    el    [description]
	 * @static
	 */


	exports.default = HighlightClick;
	HighlightClick.getElementOffset = function getElementOffset(el) {
	  var doc = el && el.ownerDocument;

	  if (!doc) {
	    return;
	  }

	  var box = el.getBoundingClientRect();

	  var docElem = doc.documentElement;

	  return {
	    top: box.top + (window.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
	    left: box.left + (window.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
	  };
	};

	/**
	 * Expected Types
	 * @type {Object}
	 * @static
	 */
	HighlightClick.propTypes = {
	  onClick: _react2.default.PropTypes.func,
	  className: _react2.default.PropTypes.string,
	  tag: _react2.default.PropTypes.string,
	  size: _react2.default.PropTypes.number,
	  timeout: _react2.default.PropTypes.number
	};

	/**
	 * Defaults
	 * @type {Object}
	 * @static
	 */
	HighlightClick.defaultProps = {
	  disabled: false,
	  className: '',
	  tag: 'div',
	  size: 100,
	  timeout: 500
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"container":"highlight-click--container","click":"highlight-click--click","zoom-and-fade":"highlight-click--zoom-and-fade"};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ }
/******/ ]);