import { Text } from 'react-native';
import React from 'react';
import ButtonProps from './interfaces';
import Styles from './button.styles';
import { Box } from '../box/box';

const Button = ({ label, lableStyle, ...props }: ButtonProps) => {
  return (
    <Box style={[Styles.button, props.style]} {...props}>
      <Text style={{ ...Styles.text, ...lableStyle }}>{label}</Text>
    </Box>
  );
};

export default Button;
