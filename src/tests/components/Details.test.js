import React from 'react';
import { shallow } from 'enzyme';
import Details from '../../components/Details';

test('should render Details correctly', () => {
  const wrapper = shallow(<Details />)
  expect(wrapper).toMatchSnapshot()
})