import { View, Text } from 'react-native';
import React from 'react';
import Styles from './main-screen.styles';
import AnimatedWaveBottomTab from '@equalbill/components/animated-wave-bottom-tab/animated-wave-bottom-tab';

export default function MainScreen() {
  return (
    <View style={Styles.container}>
      <AnimatedWaveBottomTab />
    </View>
  );
}
