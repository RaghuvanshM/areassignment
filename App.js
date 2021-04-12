
import React from 'react'
import 'react-native-gesture-handler';
import {
  Text,
  View
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SlashScreen, ListdataScreen } from './src';
import FlashMessage from "react-native-flash-message";


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Loading" component={SlashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="listdata" component={ListdataScreen} options={{ headerShown: false }}  />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}