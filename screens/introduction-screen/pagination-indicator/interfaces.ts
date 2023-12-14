import { Animated, ViewStyle } from 'react-native';

type PaginationIndicatorProps = {
  data: any[];
  scrollX: Animated.Value;
  screenWidth: number;
  dotWidthOutputRange?: number[];
  dotOpacityOutputRange?: number[];
  dotStyle?: ViewStyle;
  containerStyle?: ViewStyle;
};

export default PaginationIndicatorProps;
