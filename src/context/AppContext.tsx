import React, { createContext, useState, PropsWithChildren, useEffect } from 'react';

interface ContextValue {
  toggleTheme: Function;
  isDarkMode: boolean;
}

export const Context = createContext<ContextValue>({
  toggleTheme: () => { },
  isDarkMode : true,
});

const AppContext = ({ children }: PropsWithChildren<{}>) => {
  const [theme, setTheme] = useState<string>('dark');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(theme == 'dark' ? true : false);
  const toggleTheme = () => { 
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    setIsDarkMode(theme == 'dark' ? true : false);
  }, [theme])

  const value: ContextValue = {
    toggleTheme,
    isDarkMode,
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export default AppContext;
