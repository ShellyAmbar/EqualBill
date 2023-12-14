import Text from '@equalbill/components/controllers/text/text';
import React from 'react';
import { TextProps } from 'react-native';
import Styles from './text-error.styles';

const TextError = ({ ...props }: TextProps) => {
  return <Text {...props} style={Styles.error} />;
};

export default TextError;
