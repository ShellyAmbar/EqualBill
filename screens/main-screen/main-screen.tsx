import { View } from 'react-native';
import React from 'react';
import Styles from './main-screen.styles';
import AnimatedWaveBottomTab from '@equalbill/components/animated-wave-bottom-tab/animated-wave-bottom-tab';
import Drawer from '@equalbill/components/drawer/drawer';

export default function MainScreen() {
  return (
    <View style={Styles.container}>
      <Drawer />
    </View>
  );
}
