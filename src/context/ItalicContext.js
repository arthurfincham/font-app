import { useState, createContext } from 'react';

export const ItalicContext = createContext();

export const ItalicProvider = ({ children }) => {
  const [myFontItalic, setMyFontItalic] = useState(false);

  return <ItalicContext.Provider value={{ myFontItalic, setMyFontItalic }}>{children}</ItalicContext.Provider>;
};
