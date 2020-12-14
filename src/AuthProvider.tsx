import React, { FC, useState } from 'react';
import { AsyncStorage } from 'react-native';

export const AuthContext = React.createContext({});

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<null | { [key: string]: string }>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        login: () => {
          const fakeUser = { username: 'yooo' };
          setUser(fakeUser);
          AsyncStorage.setItem('user', JSON.stringify(fakeUser));
        },
        logout: () => {
          AsyncStorage.removeItem('user');
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
