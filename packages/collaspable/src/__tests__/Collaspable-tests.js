/* eslint-disable react/no-multi-comp */

import React from 'react';
import { mount } from 'enzyme';
// import renderer from 'react-test-renderer';

jest.mock('ship-components-icon');

import Collaspable from '../Collaspable';

const Component = () => <div>Test</div>;

test('it should render children', () => {
  const wrapper = mount(
    <Collaspable
      label='test'
    >
      <Component />
    </Collaspable>
  );
  expect(wrapper.contains(<div>Test</div>)).toBe(true);
});

test('it should have a startCollapsed prop', () => {
  const wrapper = mount(
    <Collaspable
      label='test'
      startCollapsed
    >
      <Component />
    </Collaspable>
  );
  expect(wrapper.contains(<div>Test</div>)).toBe(false);
});

test('it should be togglable', () => {
  const wrapper = mount(
    <Collaspable
      label='test'
    >
      <Component />
    </Collaspable>
  );
  expect(wrapper.state('collaspsed')).toBe(false);
  wrapper.children().first().simulate('click');
  expect(wrapper.state('collaspsed')).toBe(true);
});
