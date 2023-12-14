import React from 'react';
import { Text } from 'react-native';
import Styles from './text-body-text-small.styles';

const TextBodyTextSmall = ({ ...props }) => {
  return <Text {...props} style={[Styles.TextBodyTextSmall, props.style]} />;
};

export default TextBodyTextSmall;
