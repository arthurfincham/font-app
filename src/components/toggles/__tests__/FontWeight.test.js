import FontWeight from '../FontWeight';
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'jest-styled-components';

Enzyme.configure({ adapter: new Adapter() });

it('it correctly renders the FontWeight toggle', () => {
  const wrapper = shallow(<FontWeight />);

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('has 5 buttons', () => {
  const wrapper = mount(<FontWeight />);
  expect(wrapper.find('button')).toHaveLength(5);
});
