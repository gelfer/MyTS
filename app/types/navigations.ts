import {NavigatorScreenParams} from '@react-navigation/native';

export type AllScreenParams = {
  userId: number;
  message: string;
};

export type HomeStackParamList = {
  Home: undefined;
  Home2: {
    message: string;
  };
};

export type FeedStackParamList = {
  Feed: undefined;
  FeedDetail: {
    userId: number;
  };
};

export type AccountStackParamList = {
  Profile: undefined;
  SignUp: undefined;
  SignIn: undefined;
};

// will warn in screen when use
// navigation.navigate('FeedStack', {screen: 'Feed'})
// if not declare NavigatorScreenParams here.

export type BottomParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  FeedStack: NavigatorScreenParams<FeedStackParamList>;
  AccountStack: NavigatorScreenParams<AccountStackParamList>;
};

export interface RootStackParamList
  extends BottomParamList,
    HomeStackParamList,
    FeedStackParamList,
    AccountStackParamList {}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
