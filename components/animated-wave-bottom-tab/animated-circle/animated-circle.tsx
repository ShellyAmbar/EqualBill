import React, { FC } from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import styles from './animated-circle.styles';
type CircleProps = {
  circleX: Animated.SharedValue<number>;
};
const circleContainerSize = 50;

const AnimatedCircle: FC<CircleProps> = ({ circleX }) => {
  const circleContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: circleX.value - circleContainerSize / 2 }],
    };
  }, []);

  return <Animated.View style={[circleContainerStyle, styles.container]} />;
};

export default AnimatedCircle;
