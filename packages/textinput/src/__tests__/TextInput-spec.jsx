jest.unmock('../TextInput');

import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';

describe('TextInput', () => {
  let TextInput;
  beforeEach(() => {
    TextInput = require('../TextInput').default;
  });

  // Render without error
  it('should render without error', () => {
    let element = React.createElement(
       TextInput, // component class
       {} // props go here
    );

    expect(() => ReactTestUtils.renderIntoDocument(element))
       .not.toThrow();
  });

  it('should support custom css classes', () => {
    let className = 'testClass';
    let reactTree = ReactTestUtils.renderIntoDocument(
      <TextInput
        className={className}
      />
    );
    let comp = ReactTestUtils.findRenderedDOMComponentWithClass(reactTree, className);

    expect(comp).toBeDefined();
  });
});
