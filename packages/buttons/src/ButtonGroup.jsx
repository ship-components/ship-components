/** ****************************************************************************
 * ButtonGroup
 *
 * @author       Isaac Suttell <isaac.suttell@sony.com>
 * @file         A collection of buttons
 ******************************************************************************/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import css from './button.css';

export default function ButtonGroup(props) {
  const classes = classNames(
    props.className,
    css.group,
    {
      [css.fill] : props.fill === true,
      [css.right] : props.align === 'right',
      [css.left] : props.align === 'left'
    }
  );
  return (
    <div className={classes}>
      {props.children}
    </div>
  );
}

/**
 * Defaults
 * @type    {Object}
 */
ButtonGroup.defaultProps = {
  fill: false,
  align: undefined,
  className: undefined
};

/**
 * Type Checking
 * @type {Object}
 */
ButtonGroup.propTypes = {
  fill: PropTypes.bool,
  align: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
