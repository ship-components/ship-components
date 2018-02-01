/**
 * ES6 Buttons Example
 */

import React from 'react';
import ReactDOM from 'react-dom';
import TextEditor from '../src/TextEditor';

class Examples extends React.Component {

  constructor(props) {
    super(props);

    this.state ={
      basic: '<h1>Titles</h1><p>Here is <b>some </b><u><b>sample</b></u> <i><b>text</b></i> With links to google.com</p><blockquote>"And some quotes too"</blockquote><ul><li>Event Bullets!</li></ul>',
      json: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }

  handleReset(key) {
    this.setState({
      [key]: ''
    }, ()=>{
      this.refs[key].forceUpdate();
    });
  }

  render() {
    return (
      <div>
        <h1>{'<TextEditor /> Examples'}</h1>
        <div className='example-group'>
          <h2>Basic (HTML)</h2>
          <TextEditor
            editable
            ref='basic'
            type='html'
            onChange={this.handleChange.bind(this, 'basic')}
            value={this.state.basic}
            placeholder='Basic editor...'
          />
          <button
            onClick={this.handleReset.bind(this, 'basic')}
          >
            Reset
          </button>
          <div>
            <h3>Result</h3>
            <pre>{this.state.basic}</pre>
          </div>
        </div>
        <div className='example-group'>
          <h2>Basic (HTML) with Custom Buttons</h2>
          <TextEditor
            editable
            type='html'
            onChange={this.handleChange.bind(this, 'basic')}
            value={this.state.basic}
            buttonClass='dark-btn'
          />
          <div>
            <h3>Result</h3>
            <pre>{this.state.basic}</pre>
          </div>
        </div>
        <div className='example-group'>
          <h2>Basic (HTML) with only Inline buttons</h2>
          <TextEditor
            onlyInline
            editable
            type='html'
            onChange={this.handleChange.bind(this, 'basic')}
            value={this.state.basic}
          />
          <div>
            <h3>Result</h3>
            <pre>{this.state.basic}</pre>
          </div>
        </div>
        <div className='example-group'>
          <h2>Basic (HTML) with no style buttons</h2>
          <TextEditor
            noStyleButtons
            editable
            type='html'
            onChange={this.handleChange.bind(this, 'basic')}
            value={this.state.basic}
          />
          <div>
            <h3>Result</h3>
            <pre>{this.state.basic}</pre>
          </div>
        </div>
        <div className='example-group'>
          <h2>Basic Non Editable (HTML)</h2>
          <TextEditor
            editable={false}
            type='html'
            value={this.state.basic}
          />
          <div>
            <h3>Value</h3>
            <pre>{this.state.basic}</pre>
          </div>
        </div>
        <div className='example-group'>
          <h2>Basic (JSON)</h2>
          <TextEditor
            editable
            type='json'
            placeholder='Enter some text here and see the json result...'
            onChange={this.handleChange.bind(this, 'json')}
            value={this.state.json}
          />
          <div>
            <h3>Value</h3>
            <code>
              {JSON.stringify(this.state.json, null, '    ').toString()}
            </code>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Examples />, document.getElementById('examples'));
