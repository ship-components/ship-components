/** ****************************************************************************
 * FloatingActionButton
 *
 * @author       Isaac Suttell <isaac.suttell@sony.com>
 * @file         Shortcut for Button
 ******************************************************************************/

import React from 'react';
import Button from './Button';

export default function FloatingActionButton(props) {
  return (
    <Button {...props}
      type='iconButton'
    />
  );
}
