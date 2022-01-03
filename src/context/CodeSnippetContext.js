import { useState, createContext } from 'react';

export const CodeSnippetContext = createContext();

export const CodeSnippetProvider = ({ children }) => {
  const [myCodeSnippet, setMyCodeSnippet] = useState(false);

  return <CodeSnippetContext.Provider value={{ myCodeSnippet, setMyCodeSnippet }}>{children}</CodeSnippetContext.Provider>;
};
