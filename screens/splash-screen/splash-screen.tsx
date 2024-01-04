import React, { useEffect, useRef } from 'react';
import { Box } from '../../components/controllers/box/box';
import LottieView from 'lottie-react-native';
import Styles from './splash-screen.styles';
import { useFonts } from 'expo-font';
const SplashScreen = (props: any) => {
  const animation = useRef(null);

  const [isFontsLoaded] = useFonts({
    'Segoe UI': require('@equalbill/assets/fonts/segoe-ui-semilight.ttf'),
    'Segoe-UI-SemiBold': require('@equalbill/assets/fonts/Segoe-Ui-SemiBold.ttf'),
    Inter: require('@equalbill/assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('@equalbill/assets/fonts/Inter-SemiBold.ttf'),
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      props.navigation.navigate('Auth');
    }, 1500);
    return () => clearTimeout(timeout);
  }, [isFontsLoaded]);

  useEffect(() => {}, []);

  return (
    <Box style={Styles.container}>
      <LottieView autoPlay ref={animation} style={Styles.lottie} source={require('@equalbill/assets/lotties/splash.json')} loop />
    </Box>
  );
};

export default SplashScreen;
