import React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import {AllScreenParams, RootStackParamList} from '../types/navigations';

// export const navigationRef = createNavigationContainerRef<RootStackParamList>();
export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

export default function navigate(
  name: keyof RootStackParamList,
  params?: AllScreenParams,
) {
  navigationRef.current?.navigate(name, params);
}
