import React from 'react';
import { BodyColorContext, BodyColorProvider } from '../BodyColorContext';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

describe('body color toggle', () => {
  it('updates the color of the body', () => {
    const TestComponent = () => {
      const { myBodyColor, setMyBodyColor } = React.useContext(BodyColorContext);

      return (
        <>
          <div data-testid="value">{myBodyColor}</div>
          <button data-testid="tcWhite" onClick={() => setMyBodyColor('#FFF')}></button>
          <button data-testid="tcGray" onClick={() => setMyBodyColor('#FEF3C7')}></button>
          <button data-testid="tcBlue" onClick={() => setMyBodyColor('#6366F2')}></button>
        </>
      );
    };

    const wrapper = mount(
      <BodyColorProvider>
        <TestComponent />
      </BodyColorProvider>
    );

    expect(wrapper.find('[data-testid="value"]').text()).toEqual('#FFF');

    wrapper.find('[data-testid="tcGray"]').simulate('click');

    expect(wrapper.find('[data-testid="value"]').text()).toEqual('#FEF3C7');

    wrapper.find('[data-testid="tcBlue"]').simulate('click');

    expect(wrapper.find('[data-testid="value"]').text()).toEqual('#6366F2');
  });
});
