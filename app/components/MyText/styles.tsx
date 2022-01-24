import {StyleSheet} from 'react-native';

const styles = (colors: any) =>
  StyleSheet.create({
    titleBig: {
      fontSize: 30,
      fontWeight: 'bold',
      color: colors.text,
    },
    title1: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.text,
    },
    title2: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.text,
    },
    title3: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.text,
    },
    body1: {
      fontSize: 16,
      color: colors.text,
    },
    body2: {
      fontSize: 14,
      color: colors.text,
    },
    body3: {
      fontSize: 12,
      color: colors.text,
    },
    caption: {
      fontSize: 10,
      color: colors.text,
    },
    primary: {
      color: colors.primary,
    },
    secondary: {
      color: 'green',
    },
    italic: {
      fontStyle: 'italic',
    },
    bold: {
      fontWeight: 'bold',
    },
    strike: {
      textDecorationLine: 'line-through',
    },
    center: {
      textAlign: 'center',
    },
    mTop: {
      marginTop: 5,
    },
    mBottom: {
      marginBottom: 5,
    },
    grey: {
      color: '#c0c0c0',
    },
    white: {
      color: '#fff',
    },
  });

export default styles;
