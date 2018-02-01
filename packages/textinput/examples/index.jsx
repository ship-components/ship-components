/**
 * ES6 Buttons Example
 */

import React from 'react';
import ReactDOM from 'react-dom';
import TextInput from '../src/TextInput';

class Examples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      long: "Initial text."
    }

    this.handleChange = this.handleChange.bind(this);

    let mockEvent = {
      target: {
        value: require('./howl.js').howl
      }
    }
    this.longInputId = setTimeout(this.handleChange.bind(this,"long", mockEvent), 500)
  }

  handleChange(field, ev) {
    this.setState({
      [field]: ev.target.value
    });
  }
        
  render() {
    return (
      <div>
        <h1>{'<TextInput> Examples'}</h1>
        <div className='example-group'>
          <h2>Basic</h2>
          <TextInput
            value={this.state.firstTextInput}
            onChange={this.handleChange.bind(this, 'firstTextInput')}
          />
          <code>
          {
          `<TextInput onChange={this.handleChange} />`
          }
          </code>
        </div>

        <div className='example-group'>
          <h2>Labels</h2>
          <TextInput
            label='Username...'
            value={this.state.secondTextInput}
            onChange={this.handleChange.bind(this, 'secondTextInput')}
          />
          <code>
          {
          `<TextInput label='Username...' onChange={this.handleChange} />`
          }
          </code>
        </div>

        <div className='example-group'>
          <h2>Labels</h2>
          <TextInput
            label='Delayed long input...'
            value={this.state.long}
            onChange={this.handleChange.bind(null, 'long')}
          />
          <code>
          {
          `<TextInput label='Username...' onChange={this.handleChange} />`
          }
          </code>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Examples />, document.getElementById('examples'));
