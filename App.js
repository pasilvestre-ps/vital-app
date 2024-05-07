import React from 'react'
import { StatusBar} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'}/>
      <Routes/>
    </NavigationContainer>
  );
}