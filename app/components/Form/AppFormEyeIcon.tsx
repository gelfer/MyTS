import React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface Props {
  showPassword: boolean;
  setShowPassword: Function;
}

const AppFormEyeIcon = ({showPassword, setShowPassword}: Props) => {
  console.log('render');
  return (
    <Pressable
      onPress={() => setShowPassword(!showPassword)}
      style={{
        position: 'absolute',
        right: 25,
        top: 20,
      }}>
      <Icon
        name={showPassword ? 'eye-slash' : 'eye'}
        size={20}
        color="#c0c0c0"
      />
    </Pressable>
  );
};

export default AppFormEyeIcon;
