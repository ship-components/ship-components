# ship-components-textinput
[React](http://facebook.github.io/react/) text input. Exports a commonjs module that can be used with [webpack](http://webpack.github.io/). Source is in ES6 and is compiled down to ES5 using [Babel](https://babeljs.io/).

If you are looking for a rich HTML text editor, please refer to the [ship-components-texteditor](https://github.com/ship-components/ship-components-texteditor).


[![npm](https://img.shields.io/npm/v/ship-components-textinput.svg?maxAge=2592000)](https://www.npmjs.com/package/ship-components-textinput)
[![Build Status](http://img.shields.io/travis/ship-components/ship-components-textinput/master.svg?style=flat)](https://travis-ci.org/ship-components/ship-components-textinput)
[![Coverage](http://img.shields.io/coveralls/ship-components/ship-components-textinput.svg?style=flat)](https://coveralls.io/github/ship-components/ship-components-textinput)
[![devDependencies](https://img.shields.io/david/dev/ship-components/ship-components-textinput.svg?style=flat)](https://david-dm.org/ship-components/ship-components-textinput?type=dev)

## Usage

### ES6/JSX (Recommended)
The component is written using ES6/JSX therefore Babel is recommended to use it. The below example is based on using [webpack](http://webpack.github.io/) and [babel-loader](https://github.com/babel/babel-loader).
```js
import React from 'react';
import DropdownMenu from 'react-textinput';

export default class BasicExample extends React.Component

  render() {
    return (
      <TextInput
        label='Username...'
        onChange={this.handleChange} />
    );
  }
}
```

## Examples and Development
More examples can be found in the `examples/` folder. A development server can be run with:

```shell
$ npm install
$ npm start
```

which will live reload any changes you make and serve them at http://localhost:8080.

### Webpack Configuration
This module is designed to be used with webpack but requires a few loaders if you are pulling the source into another project.

```shell
$ npm install webpack babel-loader css-loader style-loader postcss-loader extract-text-webpack-plugin postcss-nested postcss-color-hex-alpha postcss-color-function postcss-calc postcss-simple-vars autoprefixer --save-dev
```

Below are is a sample of how to setup the loaders:

```js
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
    require('postcss-simple-vars') {
      variables: {
        'base-grid-size' : '4px',
        'primary-color' : '#5e8aaa',
        'accent-color' : '#38b889',
        'warning-color' : '#d43c36',
        'success-color' : '#50a111',
        'primary-font-color': '#333',
        'inverse-font-color': '#fff',
        'primary-background-color' : '#fff'
      }
    },
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
* 0.3.9 - Consolidate WillReceiveProps and DidUpdate to fix bug w/ triggering calculateHeight
* 0.3.8 - Removes the babel-preset-latest.
* 0.3.7 - Fixes the webpack bug on configuration when transforming node_modules.
* 0.3.6 - Fixes the text input font size in .error class to inherit it from parent.
* 0.3.5 - workaround for IE11 height calc when typing too fast
* 0.3.4 - added ref crucial to 0.3.3 somehow missed in merge
* 0.3.3 - Workaround for nodeHeight.js not returning appropriate height in IE11
* 0.3.2 - Updates babel presets to babel-preset-latest
* 0.3.1 - Added transition update timeout so textinput waits on css transition before height calc
* 0.3.0 - Upgrades to React 15, adds tests, Travis CI and coverage
* 0.2.1 - Hardcode classname readded
* 0.2.0 - Added error prop for error message. Added multiline prop to allow Shift+Enter for newlines.
* 0.1.4 - Replaced default cursor with text cursor on input
* 0.1.3 - Added more missing props
* 0.1.2 - Bug fixes and fixed unknown prop warning
* 0.1.1 - Initial

## License
The MIT License (MIT)

Copyright (c) 2015 Isaac Suttell

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
