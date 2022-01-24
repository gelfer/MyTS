import React from 'react';
import {View, Pressable, SafeAreaView} from 'react-native';
import BackIcon from '../../assets/icons/BackIcon';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

interface Props {
  backBtn: boolean;
  margin?: boolean;
  children: any;
}

const Container = ({backBtn = true, margin = false, children}: Props) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={margin ? styles.bigContainer : styles.bigContainer2}>
      {backBtn ? (
        <View style={styles.container}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.btn}>
            <BackIcon color="#333" size={30} />
          </Pressable>
        </View>
      ) : null}
      {children}
    </SafeAreaView>
  );
};

export default Container;
