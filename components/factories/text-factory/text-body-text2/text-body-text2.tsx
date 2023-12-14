import React from 'react';
import { Text } from 'react-native';
import Styles from './text-body-text2.styles';

const TextBodyText2 = ({ ...props }) => {
  return <Text style={[Styles.BodyText2, props.style]} {...props} />;
};

export default TextBodyText2;
