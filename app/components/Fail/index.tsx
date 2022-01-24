import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const Fail = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Load failed!</Text>
    </View>
  );
};

export default Fail;
