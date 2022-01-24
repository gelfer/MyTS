import React from 'react';
import {Text, Pressable} from 'react-native';
import styles from './styles';

interface Props {
  message: string;
  onPress: (message: string) => void;
}

const Card: React.FC<Props> = ({message, onPress}) => {
  return (
    <Pressable onPress={() => onPress(message)} style={styles.btn}>
      <Text>{message}</Text>
    </Pressable>
  );
};

export default Card;
