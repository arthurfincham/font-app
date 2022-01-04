import Italic from '../Italic';
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'jest-styled-components';

Enzyme.configure({ adapter: new Adapter() });

it('it correctly renders the Italic toggle', () => {
  const wrapper = shallow(<Italic />);

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('has a single button', () => {
  const wrapper = mount(<Italic />);
  expect(wrapper.find('button')).toHaveLength(1);
});
