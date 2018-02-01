/**
 * Test Scroll component
 */

import React from 'react';
import TestUtils from 'react-dom/test-utils';
import { shallow } from 'enzyme';
import Scroll from '../Scroll';

describe('Scroll', () => {

  it('renders without error', () => {
    let element = React.createElement(
       Scroll,
       {},
       (<div>Some child content</div>)
    );

    expect(() => TestUtils.renderIntoDocument(element))
       .not.toThrow();
  });

  it('matches the snapshot', () => {
    const wrapper = shallow(
        <Scroll>
          <div>Some child content</div>
        </Scroll>
    );
    expect(wrapper).toMatchSnapshot();
});

});
