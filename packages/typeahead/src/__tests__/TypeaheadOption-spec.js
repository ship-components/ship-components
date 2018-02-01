jest.unmock('../TypeaheadOption');

// Don't need to test these and they currently throw errors
jest.setMock('react-addons-css-transition-group', 'div');

import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('TypeaheadOption', function(){
  let TypeaheadOption;

  beforeEach(function() {
    TypeaheadOption = require('../TypeaheadOption').default;
  });

   // Render without error
   it('should render without error', function() {
      let element = React.createElement(
         TypeaheadOption, // component class
         {} // props go here
      );

      expect(() => TestUtils.renderIntoDocument(element))
         .not.toThrow();
   });

   it('should exists', function() {
      // Render into document
      let typeaheadOption = TestUtils.renderIntoDocument( <TypeaheadOption/> );

      expect(TestUtils.isCompositeComponent(typeaheadOption)).toBeTruthy();
   });

   it('should support custom css classes', function() {
      let className = 'testClass';
      let reactTree = TestUtils.renderIntoDocument(
      <TypeaheadOption className={className} />
      );
      let comp = TestUtils.scryRenderedDOMComponentsWithClass(reactTree, className);

      expect(comp).toBeDefined();
   });
});
