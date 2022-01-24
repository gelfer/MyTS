import React from 'react';
import {View, Text} from 'react-native';
import Avatar from '../../assets/images/avatar';
import styles from './styles';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Avatar />
    </View>
  );
};

export default Profile;
