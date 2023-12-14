import React from 'react';
import { Text } from 'react-native';
import Styles from './text-body-text1.styles';

const TextBodyText1 = ({ ...props }) => {
  return <Text {...props} style={[Styles.BodyText1, props.style]} />;
};

export default TextBodyText1;
