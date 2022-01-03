import { useState, createContext } from 'react';

export const TextColorContext = createContext();

export const TextColorProvider = ({ children }) => {
  const [myTextColor, setMyTextColor] = useState('#000');

  return <TextColorContext.Provider value={{ myTextColor, setMyTextColor }}>{children}</TextColorContext.Provider>;
};
