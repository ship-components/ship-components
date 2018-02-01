# react-typeahead
[React](http://facebook.github.io/react/) component to allow fuzzy searching of a list for a value as you type. Exports a commonjs module that can be used with [webpack](http://webpack.github.io/). Source is in ES6 and is compiled down to ES5 using [Babel](https://babeljs.io/).

[![npm](https://img.shields.io/npm/v/ship-components-typeahead.svg?maxAge=2592000)](https://www.npmjs.com/package/ship-components-typeahead)
[![Build Status](http://img.shields.io/travis/ship-components/ship-components-dialog/master.svg?style=flat)](https://travis-ci.org/ship-components/ship-components-typeahead)
[![Coverage](http://img.shields.io/coveralls/ship-components/ship-components-dialog.svg?style=flat)](https://coveralls.io/github/ship-components/ship-components-typeahead)
[![dependencies](https://img.shields.io/david/ship-components/ship-components-typeahead.svg?style=flat)](https://david-dm.org/ship-components/ship-components-typeahead)
[![devDependencies](https://img.shields.io/david/dev/ship-components/ship-components-typeahead.svg?style=flat)](https://david-dm.org/ship-components/ship-components-typeahead?type=dev)

## Usage

### ES6/JSX (Recommended)
The component is written using ES6/JSX therefore Babel is recommended to use it. The below example is based on using [webpack](http://webpack.github.io/) and [babel-loader](https://github.com/babel/babel-loader).
```js
import React from 'react';
import Typeahead from 'ship-components-typeahead';

export default class BasicExample extends React.Component

  render() {
    return (
      <Typeahead
        options={[
          {
            value: 'One'
          },
          {
            value: 'Two'
          },
          {
            value: 'Three'
          }
        ]}
        extract={(item)=>item.label}
        value={this.state.value}
        onChange={this.handleChange} />
    );
  }
}
```

## Examples and Development
[![Typeahead-Demo.gif](https://s7.postimg.org/4z5nhx7qz/Typeahead_Demo.gif)](https://postimg.org/image/vwzkjnsdz/)

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

## Todo
* Add an option to create menu using children

## Tests
1. `npm install`
2. `npm test`

## History
* 0.5.3 - Fixes the UI bug where long option items are cut off.
* 0.5.2 - Updates to the latest babel configurations (babel-preset-env).
* 0.5.1 - Bugfix for sometimes-null dropdown dom. Bugfix for Enter key return null value on to change handler.
* 0.5.0 - Add support for 'hangover' dropdowns when Typeahead is inside an overflow:hidden container. Added support for error message in ship-components-textinput 0.2.0.
* 0.4.0 - Upgrades component to be consistent with React 15 version.
* 0.3.2 - Fixed a bug where tab was selecting when it shouldn't be
* 0.3.1 - Fixed issue with blur being called before it should be
* 0.3.0 - Ignore keydown on special keys ('Alt', 'CapsLock', 'Control', 'Fn', 'Meta', 'Shift', 'Tab'). Tab still selects menu items.
* 0.2.0 - Removed props.defaultValue, updated to React 15
* 0.1.0 - Initial

## License
The MIT License (MIT)

Copyright (c) 2016 SHIP

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
