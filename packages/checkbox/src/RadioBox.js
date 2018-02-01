/** ****************************************************************************
 * RadioBox
 *
 * @author       Isaac Suttell <isaac_suttell@playstation.sony.com>
 * @file         Reusable checkbox component
 ******************************************************************************/

// Modules
import React from 'react';
import CheckBox from './Checkbox';

export default class RadioBox extends React.Component {

  /**
   * Render Method
   * @return {React}
   */
  render() {
    return (
      <CheckBox
        {...this.props}
        readOnly
        type='radio'
      />
    );
  }
}

/**
 * Defaults
 * @type {Object}
 * @static
 */
RadioBox.defaultProps = {
  defaultValue: false,
  outlineIconClass: 'icon-radio_button_unchecked',
  selectedIconClass: 'icon-radio_button_checked'
};
