import { useState, createContext } from 'react';

export const WeightContext = createContext('');

export const WeightProvider = ({ children }) => {
  const [myFontWeight, setMyFontWeight] = useState('600');

  return <WeightContext.Provider value={{ myFontWeight, setMyFontWeight }}>{children}</WeightContext.Provider>;
};
