import PreviewRow from './PreviewRow';
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'jest-styled-components';

Enzyme.configure({ adapter: new Adapter() });

it('renders with passed props', () => {
  const wrapper = shallow(<PreviewRow previewText="Dummy text" />);
  expect(wrapper.text()).toEqual('Dummy text');
});
