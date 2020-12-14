import React, { FC } from 'react';
import { AuthProvider } from './AuthProvider';
import { Routes } from './Routes';

export const Providers: FC = ({}) => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};
