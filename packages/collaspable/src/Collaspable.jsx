// Calculating if children change is a challenge so we're turning it off for now
/* eslint react/require-optimization: "off" */

// External
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from 'ship-components-icon';

// Css
import css from './Collaspable.css';

/**
 * Provides a way to hide content and show it on demand
 * @type    {Object}
 */
export default class Collaspable extends Component {
  /**
   * Setup
   * @param    {Object}    props
   */
  constructor(props) {
    super(props);
    this.state = {
      collaspsed: props.startCollapsed
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  /**
   * Toggle open and close
   */
  handleToggle() {
    this.setState({
      collaspsed: !this.state.collaspsed
    });
  }

  /**
   * Render
   * @return    {React}
   */
  render() {
    return (
      <div
        className={classNames(this.props.className, css.container, {
          [css.collaspsed] : this.state.collaspsed
        })}
      >
        <div
          className={css.control}
          onClick={this.handleToggle}
        >
          <div className={css.label}>
            {this.props.label}
          </div>
          <div className={css.action}>{this.state.collaspsed ? 'Show' : 'Hide'}</div>
          <div
            className={classNames(Icon.keyboard_arrow_down, css.icon)}
          />
        </div>
        {!this.state.collaspsed ?
          <div className={css.content}>
            {this.props.children}
          </div>
          : null}
      </div>
    );
  }
}

/**
 * Defaults
 * @type    {Object}
 */
Collaspable.defaultProps = {
  className: undefined,
  startCollapsed: false
};

/**
 * Type Checks
 * @type    {Object}
 */
Collaspable.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  startCollapsed: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]).isRequired
};
