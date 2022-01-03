import PreviewTable from './PreviewTable';
import PreviewRow from './PreviewRow';
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'jest-styled-components';

Enzyme.configure({ adapter: new Adapter() });

it('renders the preview table correctly', () => {
  const wrapper = shallow(<PreviewTable />);
  expect(toJson(wrapper)).toMatchSnapshot();
});

it('should render the PreviewRow components', () => {
  const wrapper = shallow(<PreviewTable />);

  expect(wrapper.containsMatchingElement(<PreviewRow />)).toEqual(true);
});
