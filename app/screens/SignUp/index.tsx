import React from 'react';
import {View, Text} from 'react-native';
import Avatar from '../../assets/images/avatar';
import styles from './styles';

const SignUp: React.FC<{}> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
      <Avatar />
    </View>
  );
};

export default SignUp;
