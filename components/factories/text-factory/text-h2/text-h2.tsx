import React from 'react';
import { Text, View } from 'react-native';
import Styles from './text-h2.styles';

const TextH2 = ({ ...props }) => {
  return <Text {...props} style={[Styles.h2, props.style]} />;
};

export default TextH2;
