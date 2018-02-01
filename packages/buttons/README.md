# ship-components-buttons

[React](http://facebook.github.io/react/) buttons. Exports a commonjs module that can be used with [webpack](http://webpack.github.io/). Source is in ES6 and is compiled down to ES5 using [Babel](https://babeljs.io/).

[![npm](https://img.shields.io/npm/v/ship-components-buttons.svg?maxAge=2592000)](https://www.npmjs.com/package/ship-components-buttons) [![coverage](https://img.shields.io/coveralls/ship-components/ship-components-buttons.svg?maxAge=2592000)](https://coveralls.io/github/ship-components/ship-components-buttons) [![Build Status](http://img.shields.io/travis/ship-components/ship-components-buttons/master.svg?style=flat)](https://travis-ci.org/ship-components/ship-components-buttons) [![dependencies](https://img.shields.io/david/ship-components/ship-components-buttons.svg?style=flat)](https://david-dm.org/ship-components/ship-components-buttons) [![devDependencies](https://img.shields.io/david/dev/ship-components/ship-components-buttons.svg?style=flat)](https://david-dm.org/ship-components/ship-components-buttons?type=dev)

## Usage

### ES6/JSX (Recommended)

The component is written using ES6/JSX therefore Babel is recommended to use it. The below example is based on using [webpack](http://webpack.github.io/) and [babel-loader](https://github.com/babel/babel-loader).

```javascript
import React from 'react';
import { Button } from 'ship-components-buttons';

export default class Dialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  handleClick(event) {
    this.setState({
      clicked: true
    });
  }

  render() {
    return (
        <div className='form-group'>
          <Button onClick={this.handleClick.bind(this)}>
            Click Me!
          </Button>
        </div>
    );
  }
}
```

## Examples and Development

Examples can be found in the `examples/` folder. A development server can be run with:

```shell
$ npm install
$ npm start
```

which will live reload any changes you make and serve them at <http://localhost:8080>.

### Webpack Configuration

This module is designed to be used with webpack but requires a few loaders if you are pulling the source into another project.

```shell
$ npm install webpack babel-loader css-loader style-loader postcss-loader extract-text-webpack-plugin postcss-nested postcss-color-hex-alpha postcss-color-function postcss-calc postcss-simple-vars autoprefixer --save-dev
```

Below are is a sample of how to setup the loaders:

```javascript
/**
 * Relevant Webpack Configuration
 */
{
  [...]
  module: {
    loaders: [
      // Setup support for ES6
      {
        test: /\.(jsx?|es6)$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      // Setup support for CSS Modules
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
      }
    ]
  },
  plugins: [
    // Extract the css and put it in one file. Path is relative to output path
    new ExtractTextPlugin('../css/[name].css', { allChunks: true })
  ],
  // CSS Modules
  postcss: [
    require('postcss-nested'),
    require('postcss-color-hex-alpha'),
    require('postcss-color-function'),
    require('postcss-calc'),
    require('autoprefixer')
  ],
  [...]
}
```

## Tests

1. `npm install`
2. `npm test`

## History

- 0.4.1 - Added a blur when the user clicks the button. Fixed react deps
- 0.4.0 - Replaced babel latest with env, updated travis node version, updated highlight-click
- 0.3.0 - Added support for the follow a attributes: download, rel. Upgrade deps
- 0.2.0 - Fixes Jest to pass all tests
- 0.1.4 - Moved ship-components-* to dependencies
- 0.1.3 - Updated devDependencies and broke tests...
- 0.1.2 - Fixed css with wrapper
- 0.1.1 - Fixed css issues and broken tests
- 0.1.0 - Initial

## License

The MIT License (MIT)

Copyright (c) 2017 SHIP

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
