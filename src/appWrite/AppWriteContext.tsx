import React, {PropsWithChildren, createContext, useState} from 'react';
import Appwrite from './service';

type AppWrieContextType = {
  appwrite: Appwrite;
  isLoggedIn: boolean;
  setLoggedIn: (isLoggedIn: boolean) => void;
};

export const AppWriteContext = createContext<AppWrieContextType>({
  appwrite: new Appwrite(),
  isLoggedIn: false,
  setLoggedIn: () => {},
});

const AppWriteProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const defaultValue = {
    isLoggedIn,
    setLoggedIn,
    appwrite: new Appwrite(),
  };
  return (
    <AppWriteContext.Provider value={defaultValue}>
      {children}
    </AppWriteContext.Provider>
  );
};

export default AppWriteProvider;
