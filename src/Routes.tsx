import React, { FC, useContext, useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import Center from './Center';
import { AuthParamList } from './AuthParamList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from 'firebase';
import { AuthContext } from './AuthProvider';

interface RoutesProps {}

const Stack = createStackNavigator<AuthParamList>();

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
  const route = useRoute();

  return (
    <Center>
      <Text>Register Component</Text>
      <Button title='Login' onPress={() => navigation.navigate('Login')} />
    </Center>
  );
}

export const Routes: FC<RoutesProps> = ({}) => {
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    AsyncStorage.getItem('user')
      .then((user: User) => console.log(user))
      .catch((e) => console.log(e));
  }, []);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size='large' />
      </Center>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Register'>
        <Stack.Screen
          options={{
            title: 'Sign In',
          }}
          name='Login'
          component={Login}
        />
        <Stack.Screen
          options={{
            title: 'Sign Up',
          }}
          name='Register'
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
