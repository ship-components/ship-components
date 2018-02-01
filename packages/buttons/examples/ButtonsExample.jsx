/**
 * ES6 Buttons Example
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { ButtonGroup, Button, RaisedButton, FloatingActionButton } from '../src';

class ButtonsExamples extends React.Component {
  render() {
    return (
      <div>
        <h1>Button Examples</h1>
        <div className='example-group'>
          <h2>Flat Buttons</h2>
          <ButtonGroup>
            <Button>Example #1</Button>
            <Button>Example #2</Button>
            <Button>Example #3</Button>
          </ButtonGroup>
          <code>
            {'<Button onClick={this.handleClick}>\n' +
             '      Example #1\n' +
             '</Button>'}
          </code>
        </div>
        <div className='example-group'>
          <h2>Raised Buttons</h2>
          <ButtonGroup>
            <RaisedButton>Example #1</RaisedButton>
            <RaisedButton>Example #2</RaisedButton>
            <RaisedButton>Example #3</RaisedButton>
          </ButtonGroup>
          <code>
            {'<RaisedButton onClick={this.handleClick}>\n' +
             '      Example #1\n' +
             '</RaisedButton>'}
          </code>
        </div>
        <div className='example-group'>
          <h2>Floating Action Buttons</h2>
          <ButtonGroup>
            <FloatingActionButton
              iconPrefix='ion-'
              icon='plus-round' />
            <FloatingActionButton
              iconPrefix='ion-'
              icon='minus-round' />
            <FloatingActionButton
              iconPrefix='ion-'
              icon='help' />
          </ButtonGroup>
          <code>
            {'<FloatingActionButton\n' +
             '        onClick={this.handleClick}\n' +
             '        iconPrefix=\'ion-\'\n' +
             '        icon=\'plus-round\' />'}
          </code>
        </div>
        <div className='example-group'>
          <h2>Icons</h2>
          <ButtonGroup>
            <RaisedButton
              iconPrefix='ion-'
              icon='plus'>
                Add
            </RaisedButton>
            <RaisedButton
              iconPrefix='ion-'
              icon='minus'/>
          </ButtonGroup>
          <code>
            {'<RaisedButton\n' +
             '        onClick={this.handleClick}\n' +
             '        iconPrefix=\'ion-\'\n' +
             '        icon=\'plus-round\'>\n' +
             '              Add\n' +
             '</RaisedButton>'}
          </code>
        </div>
        <div className='example-group'>
          <h2>Disabled</h2>
          <ButtonGroup>
            <RaisedButton
              disabled
              iconPrefix='ion-'
              icon='plus'>
                Add
            </RaisedButton>
            <RaisedButton
              disabled
              iconPrefix='ion-'
              icon='minus'/>
          </ButtonGroup>
          <code>
            {'<RaisedButton\n' +
             '        disabled\n' +
             '        onClick={this.handleClick}\n' +
             '        iconPrefix=\'ion-\'\n' +
             '        icon=\'plus-round\'>\n' +
             '              Add\n' +
             '</RaisedButton>'}
          </code>
        </div>
        <div className='example-group'>
          <h2>Button Groups</h2>
          <h3>Default</h3>
          <ButtonGroup>
            <RaisedButton>Example #1</RaisedButton>
            <RaisedButton>Example #2</RaisedButton>
          </ButtonGroup>
          <code>
            {'<ButtonGroup>\n' +
             '    <RaisedButton>Example #1</RaisedButton>\n' +
             '    <RaisedButton>Example #2</RaisedButton>\n' +
             '</ButtonGroup>'}
          </code>
          <h3>Fill</h3>
          <ButtonGroup fill>
            <RaisedButton>Example #1</RaisedButton>
            <RaisedButton>Example #2</RaisedButton>
          </ButtonGroup>
          <code>
            {'<ButtonGroup fill>\n' +
             '    <RaisedButton>Example #1</RaisedButton>\n' +
             '    <RaisedButton>Example #2</RaisedButton>\n' +
             '</ButtonGroup>'}
          </code>
          <h3>Right</h3>
          <ButtonGroup align='right'>
            <RaisedButton>Example #1</RaisedButton>
            <RaisedButton>Example #2</RaisedButton>
          </ButtonGroup>
          <code>
            {'<ButtonGroup align=\'right\'>\n' +
             '    <RaisedButton>Example #1</RaisedButton>\n' +
             '    <RaisedButton>Example #2</RaisedButton>\n' +
             '</ButtonGroup>'}
          </code>
        </div>
        <div className='example-group'>
          <h2>Link Buttons</h2>
          <ButtonGroup>
            <Button
              href='http://google.com'
            >
              Google.com
            </Button>
            <Button
              href='http://google.com'
              download
            >
              Download Google.com
            </Button>
          </ButtonGroup>
          <code>
            {'<RaisedButton onClick={this.handleClick}>\n' +
             '      Example #1\n' +
             '</RaisedButton>'}
          </code>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<ButtonsExamples />, document.getElementById('examples'));
