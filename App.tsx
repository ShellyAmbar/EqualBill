import { NavigationContainer } from '@react-navigation/native';
import MainStack from './navigation/main-stack';
import { StatusBar } from 'expo-status-bar';
import { GlobalColors } from './styles/global-colors';

import React, { Fragment } from 'react';
import { Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <>
      {/* <StatusBar backgroundColor={GlobalColors.BgColors.Bg2} style={'inverted'} /> */}
      <SafeAreaView style={{ flex: 1, backgroundColor: GlobalColors.BgColors.Bg1 }}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}
