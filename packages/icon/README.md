# ship-components-icon
Material Design icons in css module format. Exports a css module that can be used with [webpack](http://webpack.github.io/).

[![npm](https://img.shields.io/npm/v/ship-components-icon.svg?maxAge=2592000)](https://www.npmjs.com/package/ship-components-icon)
[![devDependencies](https://img.shields.io/david/dev/ship-components/ship-components-icon.svg?style=flat)](https://david-dm.org/ship-components/ship-components-icon?type=dev)

## Usage

### ES6/JSX
The component is written using ES6/JSX therefore Babel is required to directly use it. The below example is based on using [webpack](http://webpack.github.io/) and [babel-loader](https://github.com/babel/babel-loader).

```js
import icon from 'ship-components-icon';

class Example extends React.Component {
  render() {
    return (
      <div>
        <span className={icon.games} />
      </div>
    );
  }
}
```

### Webpack Configuration
This module is designed to be used with webpack but requires a few loaders.

```shell
npm install webpack babel-loader css-loader style-loader postcss-loader file-loader extract-text-webpack-plugin autoprefixer --save-dev
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
        exclude: /(node_modules|bower_components)/,
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
    new ExtractTextPlugin('../css/[name]-modules.css', { allChunks: true })
  ],
  [...]
}
```

### Development
If you update icons.css (eg with new icons from the upstream source material-design-icons), do not add
".3d_rotation:before". This is not valid CSS because classes cannot start with a number. 


## Tests

*There's currently a bug in Jest, so the units tests and they will not run.*

1. `npm install`
2. `npm test`

## History
* 0.1.2 - Removed invalid .3d_rotation:before from icons.css
* 0.1.1 - Fixes Grunt to build and run the server and cleans up readme file
* 0.1.0 - Initial

## License
The MIT License (MIT)

Copyright (c) 2015

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
