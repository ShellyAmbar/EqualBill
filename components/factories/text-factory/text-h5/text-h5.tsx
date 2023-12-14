import React from 'react';
import { Text, View } from 'react-native';
import Styles from './text-h5.styles';

const TextH5 = ({ ...props }) => {
  return <Text {...props} style={[Styles.h5, props.style]} />;
};

export default TextH5;
