import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  

  main, input, #themeToggleButton {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  #themeToggleButton{
    border-color: ${({ theme }) => theme.text};
  }`;
