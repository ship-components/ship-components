/**
 * ES6 Buttons Example
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from '../src/Checkbox';

class Examples extends React.Component {
  render() {
    return (
      <div>
        <h1>{'<Checkbox> Examples'}</h1>
        <div className='example-group'>
          <h2>Basic</h2>
          <Checkbox
            label='Test'
            outlineIconClass='ion-android-checkbox-outline-blank'
            selectedIconClass='ion-android-checkbox-blank'
            />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Examples />, document.getElementById('examples'));
