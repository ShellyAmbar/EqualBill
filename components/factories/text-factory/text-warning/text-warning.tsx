import React from 'react';
import { TextProps } from 'react-native';
import Text from '../../../controllers/text/text';
import Styles from './text-warning.styles';

const TextWarning = ({ ...props }: TextProps) => {
  return <Text {...props} style={Styles.warning} />;
};

export default TextWarning;
