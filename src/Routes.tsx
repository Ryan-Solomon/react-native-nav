import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';
import Center from './Center';

interface RoutesProps {}

const Stack = createStackNavigator();

function Login() {
  const navigation = useNavigation();
  return (
    <Center>
      <Text>Login Component</Text>
      <Button
        title='Register'
        onPress={() => navigation.navigate('Register')}
      />
    </Center>
  );
}
function Register() {
  const navigation = useNavigation();
  return (
    <Center>
      <Text>Register Component</Text>
      <Button title='Login' onPress={() => navigation.navigate('Login')} />
    </Center>
  );
}

export const Routes: FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => null,
        }}
        initialRouteName='Register'
      >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
