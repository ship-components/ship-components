# ship-components-collaspable
React component that provides a quick way to show or hide content

[![npm](https://img.shields.io/npm/v/ship-components-collaspable.svg?maxAge=2592000)](https://www.npmjs.com/package/ship-components-collaspable)
[![coverage](https://img.shields.io/coveralls/ship-components/ship-components-collaspable.svg?maxAge=2592000)](https://coveralls.io/github/ship-components/ship-components-collaspable)
[![Build Status](http://img.shields.io/travis/ship-components/ship-components-collaspable/master.svg?style=flat)](https://travis-ci.org/ship-components/ship-components-collaspable)
[![dependencies](https://img.shields.io/david/ship-components/ship-components-collaspable.svg?style=flat)](https://david-dm.org/ship-components/ship-components-collaspable)
[![devDependencies](https://img.shields.io/david/dev/ship-components/ship-components-collaspable.svg?style=flat)](https://david-dm.org/ship-components/ship-components-collaspable?type=dev)

## Basic Usage

```js
import React from 'react';
import Collaspable from 'ship-components-collaspable';

export default function ExampleComponent(props) {
  return (
    <Collaspable
      label='Example Section Header'
    >
      <div>This will be visible at first until you click the header.</div>
    </Collaspable>
  );
}
```

## Tests
1. `npm install`
2. `npm test`

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
