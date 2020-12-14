import React, { FC, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type User = null | { username: string };
type TContext = {
  user: User;
  login: () => void;
  logout: () => void;
};

const initialContext: TContext = {
  user: null,
  login: () => null,
  logout: () => null,
};

export const AuthContext = React.createContext<TContext>(initialContext);

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User>(null);

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
