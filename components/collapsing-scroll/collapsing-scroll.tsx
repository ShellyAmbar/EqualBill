import { View, Animated, TouchableOpacity, Dimensions, Image, VirtualizedList, FlatList } from 'react-native';
import React, { useRef } from 'react';
import createStyles from './collapsing-scroll.styles';

import Left from '@equalbill/assets/images/direction-left-white.svg';
import type CollapsingScrollProps from './interfaces';

const CollapsingScroll = ({ ...props }: CollapsingScrollProps) => {
  const AnimatedPressable = Animated.createAnimatedComponent(TouchableOpacity);

  const scrollY = useRef(new Animated.Value(0)).current;
  const { height } = Dimensions.get('window');
  const imageHeight = props.imageHeight ? props.imageHeight : height * 0.4;
  const styles = createStyles(imageHeight);
  return (
    <View style={{ ...styles.container, ...props.conainerStyle }}>
      {props.showBackButton && (
        <AnimatedPressable
          style={{
            ...styles.backButton,
            opacity: scrollY.interpolate({ inputRange: [100, 101], outputRange: [1, 0] }),
          }}
          onPress={() => {
            props.onClickBack != null && props.onClickBack();
          }}
        >
          {props.backButton !== null && props.backButton !== undefined ? props.backButton() : <Left />}
        </AnimatedPressable>
      )}

      <Animated.FlatList
        ListHeaderComponent={() => (
          <>
            <View style={styles.image}>{props.constantTopBackground()}</View>
            <Animated.View
              style={{
                ...styles.image,

                transform: [
                  {
                    scale: scrollY.interpolate({
                      inputRange: [-imageHeight, 0, imageHeight, imageHeight + 1],
                      outputRange: [2, 1, 0.5, 0.5],
                    }),
                  },
                  {
                    translateY: scrollY.interpolate({
                      inputRange: [-imageHeight, 0, imageHeight, imageHeight + 1],
                      outputRange: [-imageHeight / 2, 0, imageHeight * 0.75, imageHeight * 0.75],
                    }),
                  },
                ],
              }}
            >
              {props.image()}
            </Animated.View>
            <View style={{ ...styles.DataContainer, ...props.dataContainerStyle }}>
              <View style={styles.mainContainer}>{props.children}</View>
            </View>
          </>
        )}
        data={[]}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y: scrollY },
              },
            },
          ],
          { useNativeDriver: true },
        )}
        scrollEventThrottle={16}
        style={{ ...styles.scroll, ...props.scrollStyle }}
        renderItem={() => <></>}
        {...props.scrollProps}
      />
    </View>
  );
};

export default CollapsingScroll;
