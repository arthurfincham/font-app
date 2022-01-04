import AppContextProvider from '../AppContextProvider';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

it('combines other context providers', () => {
  const wrapper = shallow(<AppContextProvider />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
