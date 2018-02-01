jest.unmock('../TypeaheadList');

// Don't need to test these and they currently throw errors
jest.setMock('react-addons-css-transition-group', 'div');

import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('TypeaheadList', function(){
  let TypeaheadList;

  beforeEach(function() {
    TypeaheadList = require('../TypeaheadList').default;
  });

  // Render without error
  it('should render without error', function() {
    let element = React.createElement(
      TypeaheadList, // component class
      {} // props go here
    );

    expect(() => TestUtils.renderIntoDocument(element))
      .not.toThrow();
  });

  it('should exists', function() {
    // Render into document
    let typeaheadList = TestUtils.renderIntoDocument( <TypeaheadList/> );

    expect(TestUtils.isCompositeComponent(typeaheadList)).toBeTruthy();
  });

  it('should support custom css classes', function() {
    let className = 'testClass';
    let reactTree = TestUtils.renderIntoDocument(
    <TypeaheadList className={className} />
    );
    let comp = TestUtils.scryRenderedDOMComponentsWithClass(reactTree, className);

    expect(comp).toBeDefined();
  });

  it('should have a node with class "typeahead--list"', function() {
    let value = 'one';
    let typeaheadList = TestUtils.renderIntoDocument( <TypeaheadList value={value}/> );
    let nodeWithTheRightClass = TestUtils.scryRenderedDOMComponentsWithClass(typeaheadList, 'typeahead--list');

    expect(nodeWithTheRightClass.length).toEqual(1);
  });
});
