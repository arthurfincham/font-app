import React from 'react';
import { SizeContext, SizeProvider } from './SizeContext';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

describe('size toggle', () => {
  it('updates the size of the font', () => {
    const TestComponent = () => {
      const { myFontSize, setMyFontSize } = React.useContext(SizeContext);

      return (
        <>
          <div data-testid="value">{myFontSize}</div>
          <button data-testid="fs1.5" onClick={() => setMyFontSize('1.5')}></button>
          <button data-testid="fs2" onClick={() => setMyFontSize('2')}></button>
          <button data-testid="fs2.5" onClick={() => setMyFontSize('2.5')}></button>
        </>
      );
    };

    const wrapper = mount(
      <SizeProvider>
        <TestComponent />
      </SizeProvider>
    );

    expect(wrapper.find('[data-testid="value"]').text()).toEqual('2');

    wrapper.find('[data-testid="fs1.5"]').simulate('click');

    expect(wrapper.find('[data-testid="value"]').text()).toEqual('1.5');

    wrapper.find('[data-testid="fs2.5"]').simulate('click');

    expect(wrapper.find('[data-testid="value"]').text()).toEqual('2.5');
  });
});
