jest.dontMock('../HighlightClick');
jest.useFakeTimers();

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';

import HighlightClick from '../HighlightClick';

const noOp = function() {};

describe('HighlightClick', function() {

  it('should support different tags besides divs', function() {
    let tagName = 'span';

    let reactTree = TestUtils.renderIntoDocument(
      <HighlightClick
        tag={tagName}
        onClick={noOp}
      />
    );

    let el = TestUtils.findRenderedDOMComponentWithTag(reactTree, tagName);

    expect(ReactDOM.findDOMNode(el).tagName.toLowerCase()).toEqual(tagName.toLowerCase());
  });

  it('should support custom css classes', function() {

    let className = 'testClass';

    let reactTree = TestUtils.renderIntoDocument(
      <HighlightClick
        className={className}
        onClick={noOp}
      />
    );

    let comp = TestUtils.findRenderedDOMComponentWithClass(reactTree, className);

    expect(comp).toBeDefined();
  });

  it('should add a click to the state when clicked', function() {

    let className = 'testClass';

    let reactTree = TestUtils.renderIntoDocument(
      <HighlightClick
        className={className}
        onClick={noOp}
      />
    );

    let el = TestUtils.findRenderedComponentWithType(reactTree, HighlightClick);

    let node = TestUtils.findRenderedDOMComponentWithClass(reactTree, className);

    TestUtils.Simulate.click(node);
    expect(el.state.clicks.length).toEqual(1);

    TestUtils.Simulate.click(node);
    expect(el.state.clicks.length).toEqual(2);

    TestUtils.Simulate.click(node);
    expect(el.state.clicks.length).toEqual(3);
  });

  it('should remove clicks after they timeout', function() {
    let className = 'testClass';
    let timeoutLength = 500;

    let reactTree = TestUtils.renderIntoDocument(
      <HighlightClick
        className={className}
        timeout={timeoutLength}
        onClick={noOp}
      />
    );

    let el = TestUtils.findRenderedComponentWithType(reactTree, HighlightClick);
    let node = TestUtils.findRenderedDOMComponentWithClass(reactTree, className);

    TestUtils.Simulate.click(node);

    expect(el.state.clicks.length).toEqual(1);
    expect(setTimeout.mock.calls.length).toBe(4);
    expect(setTimeout.mock.calls[3][1]).toBe(timeoutLength);

    // Fast Forward
    jest.runOnlyPendingTimers();

    // Ensure it's empty
    expect(el.state.clicks.length).toEqual(0);
  });

  it('should give each click a unique id', function() {
    let className = 'testClass';

    let reactTree = TestUtils.renderIntoDocument(
      <HighlightClick
        className={className}
        onClick={noOp}
      />
    );

    let comp = TestUtils.findRenderedComponentWithType(reactTree, HighlightClick);
    let node = TestUtils.findRenderedDOMComponentWithClass(reactTree, className);

    TestUtils.Simulate.click(node);
    TestUtils.Simulate.click(node);

    expect(comp.state.clicks.length).toEqual(2);
    expect(comp.state.clicks[0].id).toBeDefined();
    expect(comp.state.clicks[1].id).toBeDefined();
    expect(comp.state.clicks[0].id).not.toEqual(comp.state.clicks[1].id);
  });
});
