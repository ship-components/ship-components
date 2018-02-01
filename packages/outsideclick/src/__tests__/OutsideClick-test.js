import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';

const OutsideClick = require('../OutsideClick').default;

describe('OutsideClick', function() {
  it('should assign a css class', function() {

    let cssClass = 'outsideclick';

    // Render a checkbox with label in the document
    let reactTree = TestUtils.renderIntoDocument(
      <OutsideClick
        className={cssClass}
      />
    );

    let el = TestUtils.findRenderedDOMComponentWithClass(reactTree, cssClass);

    expect(ReactDOM.findDOMNode(el).className).toEqual(cssClass);
  });

  it('should support different tags besides divs', function() {

    let tagName = 'span';

    // Render a checkbox with label in the document
    let reactTree = TestUtils.renderIntoDocument(
      <OutsideClick
        tag={tagName}
      />
    );

    let el = TestUtils.findRenderedDOMComponentWithTag(reactTree, tagName);

    expect(ReactDOM.findDOMNode(el).tagName.toLowerCase()).toEqual(tagName.toLowerCase());
  });

  // React no longer supports this test. TODO - Rewrite
  xit('should only trigger onClick when a click is outside of the component', function() {

    let onClick = jest.genMockFunction();

    // Render a checkbox with label in the document
    let reactTree = TestUtils.renderIntoDocument(
      <div className="outside">
        <OutsideClick
          onClick={onClick}
        >
          <div className="inside">
            Hello world
          </div>
        </OutsideClick>
      </div>
    );

    let outsideComponent = TestUtils.findRenderedComponentWithType(reactTree, OutsideClick);

    let inside = TestUtils.findRenderedDOMComponentWithClass(reactTree, 'inside');
    // Simulate clicks on the inside
    outsideComponent.handleBodyClick({
      target: ReactDOM.findDOMNode(inside)
    });
    expect(onClick).not.toBeCalled();

    let outside = TestUtils.findRenderedDOMComponentWithClass(reactTree, 'outside');
    // Simulate clicks on the outside
    outsideComponent.handleBodyClick({
      target: ReactDOM.findDOMNode(outside)
    });
    expect(onClick).toBeCalled();
  });
});
