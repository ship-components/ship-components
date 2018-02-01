/** ****************************************************************************
 * RadioBoxGroup
 *
 * @author       Isaac Suttell <isaac_suttell@playstation.sony.com>
 * @file         Reusable checkbox component
 ******************************************************************************/

// Modules
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import RadioBox from './RadioBox';

export default class RadioBoxGroup extends React.Component {

  /**
   * Material Design inspired RadioBox Component
   * @param  {Object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected || props.defaultValue
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
    return this.state.selected !== nextState.selected;
  }

  handleChange(event) {
    if (this.props.readOnly === true && typeof this.props.onChange === 'function') {
      this.props.onChange(event);
      return;
    }
    this.setState({
      selected: event.target.value
    }, () => {
      if(typeof this.props.onChange === 'function') {
        this.props.onChange(event);
      }
    });
  }

  /**
   * Render Method
   * @return {React}
   */
  render() {
    return (
      <div className={classNames('radio-box-group', this.props.className)}>
       {React.Children.map(this.props.children, child => {
         if (child.type !== RadioBox) {
           return child;
         }
         // Only inject and control RadioBox items
         return React.cloneElement(child, {
           key: child.props.key || child.props.value,
           selected: this.state.selected === child.props.value,
           onChange: this.handleChange.bind(this)
         });
       })}
      </div>
    );
  }
}

/**
 * Type Checks
 * @type {Object}
 * @static
 */
RadioBoxGroup.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func
};

/**
 * Defaults
 * @type {Object}
 * @static
 */
RadioBoxGroup.defaultProps = {
  defaultValue: '',
  readOnly: false
};
