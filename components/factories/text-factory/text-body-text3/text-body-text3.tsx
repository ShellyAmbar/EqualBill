import React from 'react';
import { Text } from 'react-native';
import Styles from './text-body-text3.styles';

const TextBodyText3 = ({ ...props }) => {
  return <Text style={[Styles.BodyText3, props.style]} {...props} />;
};

export default TextBodyText3;
