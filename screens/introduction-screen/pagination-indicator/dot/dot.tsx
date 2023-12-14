import React from 'react';
import styles from './dot.styles';
import { Animated } from 'react-native';
import DotProps from './interfaces';

const Dot = ({ width, style, opacity }: DotProps) => {
  return <Animated.View style={[styles.container, { ...style }, { width, opacity }]}></Animated.View>;
};

export default Dot;
