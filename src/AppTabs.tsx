import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();

export const AppTabs: FC = ({}) => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen />
    </Tabs.Navigator>
  );
};
