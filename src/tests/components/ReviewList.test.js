import React from 'react';
import { shallow } from 'enzyme';
import ReviewList from '../../components/ReviewList';

test('should render ReviewList correctly', () => {
  const wrapper = shallow(<ReviewList />)
  expect(wrapper).toMatchSnapshot()
})
