import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import AboutScreen from "./src/screens/AboutScreen";
import ContactScreen from "./src/screens/ContactScreen";
import LocationScreen from "./src/screens/LocationScreen";
import HomeScreen from "./src/screens/HomeScreen";

const Drawer = createDrawerNavigator()

export default function App() {
  return <NavigationContainer>
    <Drawer.Navigator initialRouteName='ABOUT'>
      <Drawer.Screen name='ABOUT' component={AboutScreen}/>
      <Drawer.Screen name='CONTACT US' component={ContactScreen}/>
      <Drawer.Screen name='LOCATIONS' component={LocationScreen}/>
      <Drawer.Screen name='HOME' component={HomeScreen}/>
    </Drawer.Navigator>
  </NavigationContainer>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
