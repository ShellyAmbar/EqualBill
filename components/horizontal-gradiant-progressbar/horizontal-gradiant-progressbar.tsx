import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Animated, View, Text } from 'react-native';
import useHorizontalGradiantProgressbar from './hooks/useHorizontalGradiantProgressbar';
import createStyle from './horizontal-gradiant-progressbar.styles';
import { HorizontalGradiantProgressbarProps } from './interfaces';

const HorizontalGradiantProgressbar = ({
  progressValue,
  containerStyle = {},
  gradiantStyle = {},
  colorPrimary,
  colorSecondary,
  steps,
  currentStep,

  ...props
}: HorizontalGradiantProgressbarProps) => {
  const [width, setwidth] = useState(0);
  const { widthInterpolate, animatedValue } = useHorizontalGradiantProgressbar({
    steps,
    currentStep,
    width,
  });
  const Styles = createStyle({ animatedWidthValue: widthInterpolate });

  return (
    <View style={Styles.container}>
      <View
        onLayout={e => {
          console.log(e.nativeEvent.layout.width);

          setwidth(e.nativeEvent.layout.width);
        }}
        style={{ ...Styles.circularContainer, ...containerStyle }}
      >
        <Animated.View style={Styles.animatedView}>
          <LinearGradient
            colors={[colorPrimary, colorSecondary]}
            style={{ ...Styles.linearGradient, ...gradiantStyle }}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
          />
        </Animated.View>
      </View>
      <View style={Styles.steps}>
        {[...Array(steps)].map((step, index) => {
          return currentStep >= index ? (
            <View
              style={{
                borderRadius: 50,
                borderWidth: 1,
                borderColor: colorPrimary,
                width: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colorPrimary,
              }}
            >
              <Text style={{ color: '#FFF' }}>{index + 1}</Text>
            </View>
          ) : (
            <View
              style={{
                borderRadius: 50,
                borderWidth: 1,
                borderColor: colorSecondary,
                width: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
              }}
            >
              <Text>{index + 1}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default HorizontalGradiantProgressbar;
