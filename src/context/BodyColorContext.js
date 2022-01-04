import { useState, createContext } from 'react';

export const BodyColorContext = createContext('');

export const BodyColorProvider = ({ children }) => {
  const [myBodyColor, setMyBodyColor] = useState('#FFF');

  return <BodyColorContext.Provider value={{ myBodyColor, setMyBodyColor }}>{children}</BodyColorContext.Provider>;
};
