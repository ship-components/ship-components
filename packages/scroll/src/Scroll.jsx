/** ****************************************************************************
 * Scroll
 *
 * @author       Ryan Jung <ryan.jung@playstation.sony.com>
 * @file         Material Design Scroll
 ******************************************************************************/

// External Modules
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Local
import css from './scroll.css';

export default class Scroll extends React.Component {
  /**
   * Base Scroll
   * @param  {Object} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * Render
   * @return {React}
   */
  render() {
    let scrollClasses = classNames(
      'scroll--shipComponentsScroll',
      css[this.props.type],
      css[this.props.orientation]
    );

    // Construct props
    let props = {
      className: scrollClasses,
      type: this.props.type,
      orientation: this.props.orientation
    }

    this.tagName = this.props.tag;

    // console.log(css);

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
}

/**
 * Type Checks
 * @type {Object}
 */
Scroll.propTypes = {
  tag: PropTypes.string,
  type: PropTypes.oneOf(['shadowScroll', 'moonlightScroll']),
  orientation: PropTypes.oneOf(['horizontal', 'vertical', 'both'])

};

/**
 * Defaults
 * @type {Object}
 */
Scroll.defaultProps = {
  tag: 'div',
  type: 'shadowScroll',
  orientation: 'both'
};
