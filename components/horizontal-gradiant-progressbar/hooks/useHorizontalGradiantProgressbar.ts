import { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';
import UseHorizontalGradiantProgressbarProps from './interfaces';

const useHorizontalGradiantProgressbar = ({ currentStep, steps, width, ...props }: UseHorizontalGradiantProgressbarProps) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const widthInterpolate = animatedValue.interpolate({
    inputRange: [0, width],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  const slideHorizontal = () => {
    Animated.timing(animatedValue, {
      toValue: currentStep === 0 ? 0 : width * (currentStep / steps) + 30 * (currentStep + 1) + 5,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    slideHorizontal();
  }, [width, currentStep]);

  return {
    widthInterpolate,
    animatedValue,
  };
};

export default useHorizontalGradiantProgressbar;
