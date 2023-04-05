import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from '../screens/Main';
import OptionScreen from '../screens/Option';

const Stack = createNativeStackNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Main"
          component={MainScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Option"
          component={OptionScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
