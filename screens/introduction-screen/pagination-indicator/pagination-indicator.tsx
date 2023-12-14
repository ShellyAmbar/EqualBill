import React from 'react';
import styles from './pagination-indicator.styles';
import Dot from './dot/dot';
import { View, Dimensions } from 'react-native';
import PaginationIndicatorProps from './interfaces';

const PaginationIndicator = ({
  data,
  scrollX,
  screenWidth = Dimensions.get('window').width,
  dotWidthOutputRange = [15, 30, 15],
  dotOpacityOutputRange = [0.3, 1, 0.3],
  dotStyle = {},
  containerStyle = {},
}: PaginationIndicatorProps) => {
  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      {data?.map((_, i) => {
        const inputRange = [(i - 1) * screenWidth, i * screenWidth, (i + 1) * screenWidth];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: dotWidthOutputRange,
          extrapolate: 'clamp',
        });
        const dotOpacity = scrollX.interpolate({
          inputRange,
          outputRange: dotOpacityOutputRange,
          extrapolate: 'clamp',
        });
        return <Dot opacity={dotOpacity} style={dotStyle} width={dotWidth} key={i.toString()} />;
      })}
    </View>
  );
};

export default PaginationIndicator;
