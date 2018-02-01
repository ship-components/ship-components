/**
 * ES6 Buttons Example
 */

import React from 'react';
import ReactDOM from 'react-dom';
import icon from '../src/icon.css';

class Examples extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ''
    };
  }

  handleChange(event) {
    this.setState({
      filter: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Icons</h1>
        <input
          className='filter-input'
          placeholder='Search...'
          type='text'
          onChange={this.handleChange.bind(this)}
          value={this.state.filter}
        />
        <div className='icons'>
          {Object.keys(icon)
            .filter(key => {
              if (this.state.filter.length === 0) {
                return true;
              }
              return key.indexOf(this.state.filter) > -1;
            })
            .sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1)
            .map(key => {
                return (
                  <div
                    className='icon-container'
                    key={key}
                  >
                    <span
                      className={`${icon[key]} icon`}
                    />
                    <span className='key'>{key}</span>
                  </div>
                );
            })}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Examples />, document.getElementById('examples'));
