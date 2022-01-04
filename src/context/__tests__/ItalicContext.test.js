import React from 'react';
import { ItalicContext, ItalicProvider } from '../ItalicContext';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

describe('font italic toggle', () => {
  it('toggles whether font is italic', () => {
    const TestComponent = () => {
      const { myFontItalic, setMyFontItalic } = React.useContext(ItalicContext);

      return (
        <>
          <div data-testid="value">{myFontItalic.toString()}</div>
          <button data-testid="boolToggle" onClick={() => setMyFontItalic(!myFontItalic)}></button>
        </>
      );
    };

    const wrapper = mount(
      <ItalicProvider>
        <TestComponent />
      </ItalicProvider>
    );

    expect(wrapper.find('[data-testid="value"]').text()).toEqual('false');

    wrapper.find('[data-testid="boolToggle"]').simulate('click');

    expect(wrapper.find('[data-testid="value"]').text()).toEqual('true');
  });
});
