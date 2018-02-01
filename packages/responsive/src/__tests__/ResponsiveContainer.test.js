/* eslint-disable react/no-multi-comp */

import React from 'react';
import { mount } from 'enzyme';
import ResponsiveContainer from '../ResponsiveContainer';

const Component = () => <div>Test</div>;

test('it should render children', () => {
  const wrapper = mount(
    <ResponsiveContainer>
      <Component />
    </ResponsiveContainer>
  );
  expect(wrapper.contains(<div>Test</div>)).toBe(true);
});

test('it should render children that are not functions', () => {
  const wrapper = mount(
    <ResponsiveContainer>
      <div>Test</div>
    </ResponsiveContainer>
  );
  expect(wrapper.contains(<div>Test</div>)).toBe(true);
});

test('it should pass the parent height and width to its children', (done) => {
  const size = 100;

  // Disable this so we can mock the state and test passing it to
  const _componentDidUpdate = ResponsiveContainer.prototype.componentDidUpdate;
  ResponsiveContainer.prototype.componentDidUpdate = () => null;

  const wrapper = mount(
    <ResponsiveContainer>
      <Component />
    </ResponsiveContainer>
  );

  wrapper.setState({
    containerWidth: size,
    containerHeight: size
  }, () => {
    const child = wrapper.find(Component).get(0);
    expect(child.props.containerWidth).toBe(size);
    expect(child.props.containerHeight).toBe(size);

    // Reset it
    ResponsiveContainer.prototype.componentDidUpdate = _componentDidUpdate;
    done();
  });
});

test('it should listen/unlisten to the window resize event', () => {
  window.addEventListener = jest.fn();
  window.removeEventListener = jest.fn();

  mount(
    <ResponsiveContainer>
      <Component />
    </ResponsiveContainer>
  ).unmount();

  expect(window.addEventListener.mock.calls.length).toBe(1);
  expect(window.addEventListener.mock.calls[0][0]).toBe('resize');
  expect(window.removeEventListener.mock.calls.length).toBe(1);
  expect(window.removeEventListener.mock.calls[0][0]).toBe('resize');
});
