import { Animated, ViewStyle } from 'react-native';

type DotProps = {
  width: Animated.AnimatedInterpolation<string | number>;
  opacity: Animated.AnimatedInterpolation<string | number>;
  style: ViewStyle;
};
export default DotProps;
