/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';

import Header from './Header';

describe('Components - Header', () => {
  it('renders', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
