/** ****************************************************************************
 * Tooltip
 *
 * @author       Isaac Suttell <isaac.suttell@sony.com>
 * @file         Material Design Button
 ******************************************************************************/

// External Modules
import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Local
import css from './tooltip.css';

export default function Tooltip(props) {
  return (
    <ReactCSSTransitionGroup
      className={css.container}
      component='div'
      transitionName={css}
      transitionEnterTimeout={250}
      transitionLeaveTimeout={250}
    >
      {props.visible ?
        <div className={css.text}>
          {props.text}
        </div>
        : null}
    </ReactCSSTransitionGroup>
  );
}

/**
 * Type Checks
 * @type {Object}
 */
Tooltip.propTypes = {
  text: PropTypes.node,
  visible: PropTypes.bool
};

/**
 * Defaults
 * @type {Object}
 */
Tooltip.defaultProps = {
  text: undefined,
  visible: false
};
