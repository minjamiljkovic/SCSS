import { createContext, useContext } from 'react';

const AppContext = createContext();

const AppProvider = ({children}) => {
  return <AppContext.Provider value="hello world">
    {children}
  </AppContext.Provider>
}

const useAppContext = () => {
  return useContext(AppContext);
}

export { AppProvider, useAppContext }