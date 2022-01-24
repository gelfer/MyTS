import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import Profile from '../screens/Profile';

import {AccountStackParamList} from '../types/navigations';

const AccountStack = createNativeStackNavigator<AccountStackParamList>();

export default function AccountScreenStack() {
  const {authenticated} = useSelector((state: RootState) => state.user);

  const navigationOption: NativeStackNavigationOptions = {
    headerShown: false,
  };
  return (
    <AccountStack.Navigator screenOptions={navigationOption}>
      {authenticated ? (
        <AccountStack.Screen name="Profile" component={Profile} />
      ) : (
        <AccountStack.Group>
          <AccountStack.Screen name="SignIn" component={SignIn} />
          <AccountStack.Screen name="SignUp" component={SignUp} />
        </AccountStack.Group>
      )}
    </AccountStack.Navigator>
  );
}
