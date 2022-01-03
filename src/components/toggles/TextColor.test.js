import TextColor from './TextColor';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

it('renders correctly enzyme', () => {
  const wrapper = shallow(<TextColor />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
