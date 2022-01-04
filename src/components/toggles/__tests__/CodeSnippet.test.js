import CodeSnippet from '../CodeSnippet';
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'jest-styled-components';

Enzyme.configure({ adapter: new Adapter() });

it('it correctly renders the CodeSnippet toggle', () => {
  const wrapper = shallow(<CodeSnippet />);

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('has a single button', () => {
  const wrapper = mount(<CodeSnippet />);
  expect(wrapper.find('button')).toHaveLength(1);
});
