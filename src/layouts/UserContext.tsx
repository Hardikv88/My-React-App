import { createContext, ReactNode, useState } from 'react';

export const UserContext = createContext('');

interface Props {
  children: ReactNode;
}

export const UserContextProvider = ({ children }: Props) => {
  const [userName, setUserName] = useState<string>('User');
  return (
    <UserContext.Provider value={{userName, setUserName}}>
      {children}
    </UserContext.Provider>
  );
};