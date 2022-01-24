import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import FeedScreen from '../screens/Feed';
import FeedDetailScreen from '../screens/FeedDetail';

import {FeedStackParamList} from '../types/navigations';

const FeedStack = createNativeStackNavigator<FeedStackParamList>();

export default function FeedScreenStack() {
  const navigationOption: NativeStackNavigationOptions = {
    headerShown: false,
  };
  return (
    <FeedStack.Navigator screenOptions={navigationOption}>
      <FeedStack.Screen name="Feed" component={FeedScreen} />
      <FeedStack.Screen
        name="FeedDetail"
        component={FeedDetailScreen}
        initialParams={{userId: 0}}
      />
    </FeedStack.Navigator>
  );
}
