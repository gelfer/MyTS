import React, {useState, useEffect} from 'react';
import {View, Text, Pressable} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  NativeModuleError,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import type {User} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import config from '../../config';
import styles from './styles';

// type ErrorWithCode = Error & {code?: string};

const PROFILE_IMAGE_SIZE = 150;

const useHooks = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState<User>();
  const [userInfo, setUserInfo] = useState({});
  const [signing, setIsSigning] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'],
      webClientId: config.webClientId,
      profileImageSize: PROFILE_IMAGE_SIZE,
    });

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  }, []);

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (user) setLoggedIn(true);
  }

  const signIn = async () => {
    try {
      setIsSigning(true);
      await GoogleSignin.hasPlayServices();
      const {idToken, user} = await GoogleSignin.signIn();

      setUserInfo(user);

      setLoggedIn(true);

      const credential = auth.GoogleAuthProvider.credential(idToken);

      await auth().signInWithCredential(credential);
    } catch (error) {
      const typedError = error as NativeModuleError;

      if (typedError.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('Cancel');
      } else if (typedError.code === statusCodes.SIGN_IN_REQUIRED) {
        Alert.alert('You are not signed it yet, please sign in.');
      } else if (typedError.code === statusCodes.IN_PROGRESS) {
        Alert.alert('SignIn in progress');
      } else if (typedError.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('Play services are not available.');
      } else {
        console.log(typedError.message);
      }
    } finally {
      setIsSigning(false);
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      auth()
        .signOut()
        .then(() => Alert.alert('You are signed out'));
      setLoggedIn(false);
      setUserInfo({});
    } catch (error) {
      console.log(error);
    }
  };

  console.log('user', user);
  console.log('userInfo', userInfo);

  let display;

  if (user) {
    display = (
      <View>
        <Text>Welcome {user.displayName}</Text>
        <Pressable onPress={signOut} style={styles.btn}>
          <Text style={{textAlign: 'center'}}>Log out</Text>
        </Pressable>
      </View>
    );
  } else {
    display = (
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
        disabled={signing}
      />
    );
  }

  return {display, user, userInfo};
};

export {useHooks};
