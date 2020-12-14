import React, { FC } from 'react';
import { Text, View } from 'react-native';

const Center: FC = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </View>
  );
};
export default Center;
