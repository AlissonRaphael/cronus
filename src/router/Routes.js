import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from '../screens/Main';
import OptionsScreen from '../screens/Options';

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
          name="Options"
          component={OptionsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
