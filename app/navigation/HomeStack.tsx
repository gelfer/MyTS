import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../types/navigations';
import HomeScreen from '../screens/Home';
import HomeScreen2 from '../screens/Home2';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeScreenStack() {
  const navigationOption: NativeStackNavigationOptions = {headerShown: false};

  return (
    <HomeStack.Navigator screenOptions={navigationOption}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Home2" component={HomeScreen2} />
    </HomeStack.Navigator>
  );
}
