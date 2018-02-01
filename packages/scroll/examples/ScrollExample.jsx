/**
 * ES6 Buttons Example
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Scroll } from '../src';

class ScrollExamples extends React.Component {
  render() {
    return (
      <div>
        <h1>Scroll Examples</h1>
        <div>
        <h2>Horizontal Scroll</h2>
        <div className='example-group horizontal dark'>
          <Scroll
          orientation='horizontal'
          type='moonlightScroll'>
            <ul className='w900'>
              <li className='lineup'><div className='example-item100x100'>100 X 100</div></li>
              <li className='lineup'><div className='example-item100x100'>100 X 100</div></li>
              <li className='lineup'><div className='example-item100x100'>100 X 100</div></li>
              <li className='lineup'><div className='example-item100x100'>100 X 100</div></li>
              <li className='lineup'><div className='example-item100x100'>100 X 100</div></li>
            </ul>
          </Scroll>
          </div>
          <code>
            {'<Scroll\n' +
             '        orientation=\'horizontal\'\n' +
             '        type=\'moonlightScroll\'\n' +
             '>\n' +
             '      Example List\n' +
             '</Scroll>'}
          </code>
        </div>
        <div>
        <h2>Vertical Scroll</h2>
        <div className='example-group vertical'>
          <Scroll
          orientation='vertical'
          type='shadowScroll'>
            <ul className='h1000'>
              <li className='stack'><div className='example-item500x500'>500 X 500</div></li>
              <li className='stack'><div className='example-item500x500'>500 X 500</div></li>
            </ul>
          </Scroll>
          </div>
          <code>
            {'<Scroll\n' +
             '        orientation=\'vertical\'\n' +
             '        type=\'shadowScroll\'\n' +
             '>\n' +
             '      Example List\n' +
             '</Scroll>'}
          </code>
        </div>
        <div className='example-group'>
          <h2>Both Sides Scroll</h2>
          <Scroll
          orientation='both'
          type='shadowScroll'>
            <div className='example-item900x900'>900 X 900 | 900 X 900 | 900 X 900 | 900 X 900</div>
          </Scroll>
          <code>
            {'<Scroll\n' +
             '        orientation=\'both\'\n' +
             '        type=\'shadowScroll\'\n' +
             '>\n' +
             '      Example List\n' +
             '</Scroll>'}
          </code>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<ScrollExamples />, document.getElementById('examples'));
