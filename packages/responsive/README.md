# ship-components-responsive
React component to wrap another component and pass the parent container dimensions to it's children

[![npm](https://img.shields.io/npm/v/ship-components-responsive.svg?maxAge=2592000)](https://www.npmjs.com/package/ship-components-responsive)
[![coverage](https://img.shields.io/coveralls/ship-components/ship-components-responsive.svg?maxAge=2592000)](https://coveralls.io/github/ship-components/ship-components-responsive)
[![Build Status](http://img.shields.io/travis/ship-components/ship-components-responsive/master.svg?style=flat)](https://travis-ci.org/ship-components/ship-components-responsive)
[![dependencies](https://img.shields.io/david/ship-components/ship-components-responsive.svg?style=flat)](https://david-dm.org/ship-components/ship-components-responsive)
[![devDependencies](https://img.shields.io/david/dev/ship-components/ship-components-responsive.svg?style=flat)](https://david-dm.org/ship-components/ship-components-responsive?type=dev)

## Basic Usage

```js
import React from 'react';
import ResponsiveContainer from 'ship-components-responsive';

/**
 * Example Embed Player
 * @param          {Object}    props
 * @constructor
 */
function EmbedPlayer(props) {
  const {
    src,
    // The following two props are passed from ResponsiveContainer
    containerWidth,
    containerHeight
  } = props;
  return (
    <iframe
      style={{
        width: containerWidth,
        height: Math.floor(containerWidth * (9 / 16))
      }}
      frameBorder={0}
      allowFullscreen
      src={src}
    />
  );
}

/**
 * Warp the the component in a responsive container so it fits the space
 * @param          {Object}    props
 * @constructor
 */
export default function EmbedPlayerWrapper(props) {
  return (
    <ResponsiveContainer>
      <EmbedPlayer
        {...props}
      />
    </ResponsiveContainer>
  );
}
```

## Tests
1. `npm install`
2. `npm test`

## To do
* Add min/max height and widths

## History
* 0.1.0 - Initial

## License
The MIT License (MIT)

Copyright (c) SHIP

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
