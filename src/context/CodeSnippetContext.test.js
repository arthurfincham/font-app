import React from 'react';
import { CodeSnippetContext, CodeSnippetProvider } from './CodeSnippetContext';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

describe('code snippet view toggle', () => {
  it('toggles the display of code snippets', () => {
    const TestComponent = () => {
      const { myCodeSnippet, setMyCodeSnippet } = React.useContext(CodeSnippetContext);

      return (
        <>
          <div data-testid="value">{myCodeSnippet.toString()}</div>
          <button data-testid="boolToggle" onClick={() => setMyCodeSnippet(!myCodeSnippet)}></button>
        </>
      );
    };

    const wrapper = mount(
      <CodeSnippetProvider>
        <TestComponent />
      </CodeSnippetProvider>
    );

    expect(wrapper.find('[data-testid="value"]').text()).toEqual('false');

    wrapper.find('[data-testid="boolToggle"]').simulate('click');

    expect(wrapper.find('[data-testid="value"]').text()).toEqual('true');
  });
});
