import {StyleSheet, Text, View} from 'react-native';
import React, {createContext, useState} from 'react';
import HomeScreen from './src/components/screen/HomeScreen';
import PlayerScreen from './src/components/screen/PlayerScreen';
import PlayScreen from './src/components/screen/PlayScreen';
import ResultScreen from './src/components/screen/ResultScreen';
/*
 * Install react-navigator
 */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { AppContextProvider } from './src/context/AppContext';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    // <PlayerScreen></PlayerScreen>
    // <PlayScreen></PlayScreen>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="PlayerScreen" component={PlayerScreen} />
        <Stack.Screen name="PlayScreen" component={PlayScreen} />
        <Stack.Screen name="ResultScreen" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
