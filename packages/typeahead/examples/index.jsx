/**
 * ES6 Buttons Example
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Typeahead from '../src/Typeahead';

class Examples extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      basic: 'one'
    }
  }

  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    })
  }

  getOptions() {
    return [
      {
        label: 'One',
        value: 'one'
      },
      {
        label: 'Two',
        value: 'two'
      },
      {
        label: 'Three',
        value: 'three'
      },
      {
        label: 'One+',
        value: 'one+'
      }
    ]
  }

  render() {
    return (
      <div>
        <h1>{'<Typeahead> Examples'}</h1>
        <div className='example-group'>
          <h2>Basic</h2>
          <Typeahead
            options={this.getOptions()}
            value={this.state.basic}
            onChange={this.handleChange.bind(this, 'basic')}
            extract={(item)=>item.label} />
          <code>
{
`<Typeahead
  options={[
    {
      label: 'One'
    },
    {
      label: 'Two'
    },
    {
      label: 'Three'
    }
  ]}
  extract={(item)=>item.label}
  onChange={this.handleChange} />
`
}
          </code>
        </div>
        <div className='example-group'>
          <h2>Basic (Not Editable)</h2>
          <Typeahead
            editable={false}
            value={this.state.basic}
            options={this.getOptions()}
            extract={(item)=>item.label} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Examples />, document.getElementById('examples'));
