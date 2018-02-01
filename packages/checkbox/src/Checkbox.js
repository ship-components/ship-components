/** ****************************************************************************
 * CheckBox
 *
 * @author       Isaac Suttell <isaac@isaacsuttell.com>
 * @file         Reusable checkbox component. Requires webpack with style/css-loader
 ******************************************************************************/

// Modules
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import HighlightClick from 'ship-components-highlight-click';

import classes from './check-box.css';

export default class CheckBox extends React.Component {

  /**
   * Material Design inspired Checkbox Component. Can either be controlled or uncontrolled.
   * @param  {Object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      selected: props.readOnly === true ? props.selected : props.defaultValue
    };
  }

  /**
   * If we're in readOnly mode then keep the state in sync with the props
   * @param  {Object} nextProps
   */
  componentWillReceiveProps(nextProps) {
    if (this.props.readOnly === true && this.state.selected !== nextProps.selected) {
      this.setState({
        selected: nextProps.selected
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.selected !== nextProps.selected ||
           this.state.selected !== nextState.selected ||
           this.props.label !== nextProps.label;
  }

  /**
   * Toggle it
   */
  handleClick() {
    // Toggle
    this.setState({
      selected: !this.state.selected
    }, () => {
      // Ensure the state is update to date
      this.triggerChangeEvent();
    });
  }

  /**
   * Create and send a change event to the parent
   */
  triggerChangeEvent() {
    // Grab the dom element so the event.target is correct
    let el = ReactDOM.findDOMNode(this.refs.input);

    // Generate a change event to let the parent know
    try {
      let customEvent = new window.MouseEvent('change');

      // Calls parent change function with the custom event and the right target
      let handler = function(ev) {
        // Clean up
        el.removeEventListener('change', handler);
        if (typeof this.props.onChange === 'function'){
          // Call
          this.props.onChange.call(ev, ev);
        }
      }.bind(this);

      // Attach
      el.addEventListener('change', handler);

      // Trigger
      el.dispatchEvent(customEvent);
    } catch(err) {
      // Fallback to just passing an object with the element in it
      if (typeof this.props.onChange === 'function'){
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
  render() {
    let classNames = 'ship-check-box ' + classes.container;

    let selected = this.props.readOnly === true ? this.props.selected : this.state.selected;

    if (selected) {
      classNames += ' ' + classes.checked;
    }

    if (this.props.className) {
      classNames += ' ' + this.props.className;
    }

    return (
      <HighlightClick
        className={classNames}
        onClick={this.handleClick.bind(this)} >
        <div
          className={classes.input}
        >
          <span className={classes['icon-background'] + ' ' + this.props.outlineIconClass + ' ' + classes.icon} />
          <ReactCSSTransitionGroup
            transitionName={classes}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500} >
              {selected === true ?
                <span className={classes.icon + ' ' + this.props.selectedIconClass} /> :
                null
              }
          </ReactCSSTransitionGroup>
        </div>
        <label className={classes.label}>
          {this.props.label || this.props.children}
        </label>
        <input
          className={classes.controller}
          readOnly={this.props.readOnly}
          type={this.props.type}
          checked={this.state.selected}
          value={this.props.value || this.state.selected}
          ref='input'
        />
    </HighlightClick>
    );
  }
}

/**
 * Type Checks
 * @type {Object}
 * @static
 */
CheckBox.propTypes = {
  defaultValue: PropTypes.bool,
  readOnly: PropTypes.bool,
  selected: PropTypes.bool,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  outlineIcon: PropTypes.element,
  selectedIcon: PropTypes.element
}

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
}
