import React from 'react';
import { TextColorContext, TextColorProvider } from './TextColorContext';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

describe('text color toggle', () => {
  it('updates the color of the text', () => {
    const TestComponent = () => {
      const { myTextColor, setMyTextColor } = React.useContext(TextColorContext);

      return (
        <>
          <div data-testid="value">{myTextColor}</div>
          <button data-testid="tcWhite" onClick={() => setMyTextColor('#FFF')}></button>
          <button data-testid="tcGray" onClick={() => setMyTextColor('#FEF3C7')}></button>
          <button data-testid="tcBlue" onClick={() => setMyTextColor('#6366F2')}></button>
        </>
      );
    };

    const wrapper = mount(
      <TextColorProvider>
        <TestComponent />
      </TextColorProvider>
    );

    expect(wrapper.find('[data-testid="value"]').text()).toEqual('#000');

    wrapper.find('[data-testid="tcGray"]').simulate('click');

    expect(wrapper.find('[data-testid="value"]').text()).toEqual('#FEF3C7');

    wrapper.find('[data-testid="tcBlue"]').simulate('click');

    expect(wrapper.find('[data-testid="value"]').text()).toEqual('#6366F2');
  });
});
