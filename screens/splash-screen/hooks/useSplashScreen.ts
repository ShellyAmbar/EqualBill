import { useFonts } from 'expo-font';
import { useEffect } from 'react';

const useSplashScreen = ({ navigation }: { navigation: any }) => {
  const [isFontsLoaded] = useFonts({
    'Segoe UI': require('@equalbill/assets/fonts/segoe-ui-semilight.ttf'),
    'Segoe-UI-SemiBold': require('@equalbill/assets/fonts/Segoe-Ui-SemiBold.ttf'),
    Inter: require('@equalbill/assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('@equalbill/assets/fonts/Inter-SemiBold.ttf'),
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('LandingScreen');
    }, 1500);
    return () => clearTimeout(timeout);
  }, [isFontsLoaded]);

  return {};
};

export default useSplashScreen;
