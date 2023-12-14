import { Animated, ViewStyle } from 'react-native';

type HorizontalGradiantProgressbarProps = {
  progressValue: number;
  containerStyle?: ViewStyle;
  gradiantStyle?: ViewStyle;
  colorPrimary: string;
  colorSecondary: string;
  steps: number;
  currentStep: number;
};
type HorizontalGradiantProgressbarStylesProps = {
  animatedWidthValue: Animated.AnimatedInterpolation<string | number>;
};

export { HorizontalGradiantProgressbarProps, HorizontalGradiantProgressbarStylesProps };
