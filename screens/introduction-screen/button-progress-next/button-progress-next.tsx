import { View, TouchableOpacity, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react';
import createStyle from './button-progress-next.styles';
import Svg, { G, Circle } from 'react-native-svg';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Splash from '../splash/splash';

const ButtonProgressNext = ({ precentage, scrollTo, onComplete }: { precentage: number; scrollTo: () => void; onComplete?: () => void }) => {
  const duration = 250;
  const size = 128;
  const strokeWidth = 5;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const colorStroke = '#FFFF';
  const colorStrokeProgress = '#1E90FF';
  const colorFill = 'rgba(255,255,255,0.1)';
  const styles = createStyle({
    progressColor: colorStrokeProgress,
    strokeColor: colorStroke,
  });
  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  const animation = (toValue: number) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    progressAnimation.addListener(value => {
      const strokeDashoffset = circumference - (circumference * value.value) / 100;
      if (progressRef?.current) {
        progressRef.current?.setNativeProps({
          strokeDashoffset: strokeDashoffset,
        });
      }
    });

    return () => {
      progressAnimation.removeAllListeners();
    };
  }, []);

  useEffect(() => {
    animation(precentage);
  }, [precentage.toString()]);

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation={'-90'} origin={center}>
          <Circle stroke={colorStroke} cx={center} cy={center} r={radius} strokeWidth={strokeWidth} fill={colorFill} />
          <Circle
            ref={progressRef}
            stroke={colorStrokeProgress}
            cx={center}
            cy={center}
            r={radius}
            strokeLinecap="round"
            fill={colorFill}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
          />
        </G>
      </Svg>

      <TouchableOpacity
        onPress={() => {
          if (precentage === 100) {
            onComplete && onComplete();
          }
          scrollTo();
        }}
        style={styles.button}
      >
        <AntDesign name="arrowright" size={50} color={colorStroke} />
        <Splash width={size} height={size} />
      </TouchableOpacity>
    </View>
  );
};

export default ButtonProgressNext;
