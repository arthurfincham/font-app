import App from './App';
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

it('renders App correctly', () => {
  const wrapper = shallow(<App />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
