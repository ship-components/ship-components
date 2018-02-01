jest.unmock('../Typeahead');

// Don't need to test these and they currently throw errors
jest.setMock('ship-components-outsideclick', 'div');
jest.setMock('ship-components-textinput', 'div');
jest.setMock('react-addons-css-transition-group', 'div');

import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('Typeahead', function(){
  let Typeahead;

  beforeEach(function() {
    Typeahead = require('../Typeahead').default;
  });

  // Render without error
  it('should render without error', function() {
    let element = React.createElement(
      Typeahead, // component class
      {} // props go here
    );

    expect(() => TestUtils.renderIntoDocument(element))
      .not.toThrow();
  });

  it('should exists', function() {
    // Render into document
    let typeahead = TestUtils.renderIntoDocument( <Typeahead/> );

    expect(TestUtils.isCompositeComponent(typeahead)).toBeTruthy();
  });

  it('should build the layout from the passing props', function() {

    let props = {
      isLoading: false,
      editable: true,
      empty: false,
      options: [],
      label: '',
      placeholder: '',
      maxVisible: 2
    };

    let typeahead = TestUtils.renderIntoDocument( <Typeahead {...props}/> );
    let typeaheadElement = TestUtils.scryRenderedDOMComponentsWithClass(typeahead, 'typeahead');

    expect(typeaheadElement.length).toEqual(1);

    const renderer = TestUtils.createRenderer();
    renderer.render(<Typeahead />);
    const result = renderer.getRenderOutput();

    expect(typeof result.props).toEqual('object');
  });

  it('should support custom css classes', function() {
    let className = 'testClass';
    let reactTree = TestUtils.renderIntoDocument(
      <Typeahead className={className} />
    );
    let comp = TestUtils.findRenderedDOMComponentWithClass(reactTree, className);

    expect(comp).toBeDefined();
  });
});
