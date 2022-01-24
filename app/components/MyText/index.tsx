import React from 'react';
import {Text} from 'react-native';
import {useTheme, Theme} from '@react-navigation/native';
import styles from './styles';

interface Props {
  titleBig?: boolean;
  title1?: boolean;
  title2?: boolean;
  title3?: boolean;
  body1?: boolean;
  body2?: boolean;
  body3?: boolean;
  caption?: boolean;
  primary?: boolean;
  secondary?: boolean;
  italic?: boolean;
  bold?: boolean;
  numberOfLines?: number;
  strike?: boolean;
  center?: boolean;
  mTop?: boolean;
  mBottom?: boolean;
  grey?: boolean;
  white?: boolean;
  children?: string;
}

const MyText = ({
  titleBig,
  title1,
  title2,
  title3,
  body1,
  body2,
  body3,
  caption,
  primary,
  secondary,
  italic,
  bold,
  numberOfLines = 10,
  strike,
  center,
  mTop,
  mBottom,
  grey,
  white,
  children,
}: Props) => {
  const {colors} = useTheme();

  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        titleBig && styles(colors).titleBig,
        title1 && styles(colors).title1,
        title2 && styles(colors).title2,
        title3 && styles(colors).title3,
        body1 && styles(colors).body1,
        body2 && styles(colors).body2,
        body3 && styles(colors).body3,
        caption && styles(colors).caption,
        primary && styles(colors).primary,
        secondary && styles(colors).secondary,
        italic && styles(colors).italic,
        bold && styles(colors).bold,
        strike && styles(colors).strike,
        center && styles(colors).center,
        mTop && styles(colors).mTop,
        mBottom && styles(colors).mBottom,
        grey && styles(colors).grey,
        white && styles(colors).white,
      ]}>
      {children}
    </Text>
  );
};

export default MyText;
