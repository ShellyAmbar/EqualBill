import React, { useEffect, useRef } from 'react';
import { Box } from '../../components/controllers/box/box';
import LottieView from 'lottie-react-native';
import Styles from './splash-screen.styles';
import { useFonts } from 'expo-font';
import useSplashScreen from './hooks/useSplashScreen';

import { Image } from 'react-native';

const SplashScreen = (props: any) => {
  const {} = useSplashScreen({ navigation: props.navigation });

  return (
    <Box style={Styles.container}>
      <Image style={{ alignSelf: 'center', resizeMode: 'contain' }} source={require('@equalbill/assets/images/logo.png')} />
    </Box>
  );
};

export default SplashScreen;
