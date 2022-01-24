import React from 'react';
import {useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import {BottomParamList} from '../types/navigations';
import FeedScreenStack from './FeedStack';
import HomeScreenStack from './HomeStack';
import AccountScreenStack from './AccountStack';
import {navigationRef} from './RootNavigator';
import FeedIcon from '../assets/icons/FeedIcon';
import HomeIcon from '../assets/icons/HomeIcon';
import ProfileIcon from '../assets/icons/ProfileIcon';

const RootStack = createBottomTabNavigator<BottomParamList>();

const MyDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#e67a15',
    text: '#000',
    background: '#fff',
  },
};

const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#e67a15',
  },
};

const AppNavigator = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const navigatorOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarActiveTintColor: '#e67a15',
    tabBarInactiveTintColor: 'gray',
  };

  const homeOptions: BottomTabNavigationOptions = {
    tabBarIcon: ({color, size}) => (
      // <Icon color={color} name="home" size={size} solid />
      <HomeIcon color={color} size={size} />
    ),
    tabBarLabel: 'Home',
  };

  const feedOptions: BottomTabNavigationOptions = {
    tabBarIcon: ({color, size}) => <FeedIcon color={color} size={size} />,
    tabBarLabel: 'Feed',
  };

  const accountOptions: BottomTabNavigationOptions = {
    tabBarIcon: ({color, size}) => <ProfileIcon color={color} size={size} />,
    tabBarLabel: 'Account',
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={isDarkMode ? MyDarkTheme : MyDefaultTheme}>
      <RootStack.Navigator screenOptions={navigatorOptions}>
        <RootStack.Screen
          name="HomeStack"
          component={HomeScreenStack}
          options={homeOptions}
        />
        <RootStack.Screen
          name="FeedStack"
          component={FeedScreenStack}
          options={feedOptions}
        />
        <RootStack.Screen
          name="AccountStack"
          component={AccountScreenStack}
          options={accountOptions}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

// to use FontAwesome5
// 1. install react-native-vector-icons
// 2. in podfile -> pod 'RNVectorIcons', :path => '../node_modules/react-native-vector-icons'
// 3. in info.plist -> <key>UIAppFonts</key><array><string>FontAwesome5_Solid.ttf</string></array>
// 4. Rebuild the project
// 5. https://fontawesome.com/v5.15/icons?d=gallery&p=2

// git push -u origin main
