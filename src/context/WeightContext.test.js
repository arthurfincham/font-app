import React from 'react';
import { WeightContext, WeightProvider } from './WeightContext';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

describe('weight toggle', () => {
  it('updates the weight of the font', () => {
    const TestComponent = () => {
      const { myFontWeight, setMyFontWeight } = React.useContext(WeightContext);

      return (
        <>
          <div data-testid="value">{myFontWeight}</div>
          <button data-testid="fs400" onClick={() => setMyFontWeight('400')}></button>
          <button data-testid="fs600" onClick={() => setMyFontWeight('600')}></button>
          <button data-testid="fs800" onClick={() => setMyFontWeight('800')}></button>
        </>
      );
    };

    const wrapper = mount(
      <WeightProvider>
        <TestComponent />
      </WeightProvider>
    );

    expect(wrapper.find('[data-testid="value"]').text()).toEqual('600');

    wrapper.find('[data-testid="fs400"]').simulate('click');

    expect(wrapper.find('[data-testid="value"]').text()).toEqual('400');

    wrapper.find('[data-testid="fs800"]').simulate('click');

    expect(wrapper.find('[data-testid="value"]').text()).toEqual('800');
  });
});
