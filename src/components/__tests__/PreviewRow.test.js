import PreviewRow from '../PreviewRow';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'jest-styled-components';

Enzyme.configure({ adapter: new Adapter() });

it('renders the preview row with passed props', () => {
  const wrapper = shallow(<PreviewRow previewText="Dummy text" />);
  expect(wrapper.text()).toEqual('Dummy text');
});
