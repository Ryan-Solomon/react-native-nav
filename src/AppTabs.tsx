import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppParamList } from './AppParamList';
import Center from './Center';
import { Text } from 'react-native';

const Tabs = createBottomTabNavigator<AppParamList>();

function Home() {
  return (
    <Center>
      <Text>Home</Text>
    </Center>
  );
}
function Search() {
  return (
    <Center>
      <Text>Search</Text>
    </Center>
  );
}

export const AppTabs: FC = ({}) => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name='Home' component={Home} />
      <Tabs.Screen name='Search' component={Search} />
    </Tabs.Navigator>
  );
};
