import { useState, createContext } from 'react';

export const SizeContext = createContext();

export const SizeProvider = ({ children }) => {
  const [myFontSize, setMyFontSize] = useState('2');

  return <SizeContext.Provider value={{ myFontSize, setMyFontSize }}>{children}</SizeContext.Provider>;
};
