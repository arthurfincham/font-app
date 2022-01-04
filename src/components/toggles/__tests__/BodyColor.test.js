import BodyColor from '../BodyColor';
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'jest-styled-components';

Enzyme.configure({ adapter: new Adapter() });

it('it correctly renders the BodyColor toggle', () => {
  const wrapper = shallow(<BodyColor />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
