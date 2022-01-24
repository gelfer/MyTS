import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';

const Feed = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Feed</Text>
      <Pressable
        onPress={() => navigation.navigate('FeedDetail', {userId: 3})}
        style={styles.btn}>
        <Text style={styles.txt}>Go to Detail</Text>
      </Pressable>
    </View>
  );
};

export default Feed;
