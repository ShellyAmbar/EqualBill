import { TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { Video, ResizeMode } from 'expo-av';
import { Box } from '@equalbill/components/controllers/box/box';

import Spacer from '@equalbill/components/controllers/spacer/spacer';
import TextFactory from '@equalbill/components/factories/text-factory/text-factory';
import { GlobalColors } from '@equalbill/styles/global-colors';
import Styles from './landing-screen.styles';
import useLandingScreen from './hooks/useLandingScreen';
import Button from '@equalbill/components/controllers/button/button';

const LandingScreen = props => {
  const { videoRef } = useLandingScreen({ navigation: props.navigation });

  return (
    <Box style={{ flex: 1 }}>
      <Video
        ref={videoRef}
        style={Styles.video}
        source={require('@equalbill/assets/videos/video.mp4')}
        useNativeControls={false}
        resizeMode={ResizeMode.COVER}
        isLooping
      />
      <TextFactory style={Styles.title}>{'EqualBill'}</TextFactory>
      <Box style={Styles.absoluteButtons}>
        <Button
          buttonStyle={Styles.buttonStyle}
          lableStyle={{ color: GlobalColors.TextColors.white }}
          label="Login"
          disabled={false}
          onPress={() => {
            props.navigation.navigate('Auth', { isLoggin: true });
          }}
        />
        <Spacer size={20} />
        <Box style={Styles.centerHorizontal}>
          <TextFactory style={{ color: GlobalColors.TextColors.white }}>{"Don't have an account?"}</TextFactory>
          <Spacer size={12} isVertical={false} />
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Auth', { isLoggin: false });
            }}
          >
            <TextFactory style={{ color: GlobalColors.TextColors.white }}>{'Sign Up now!'}</TextFactory>
          </TouchableOpacity>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingScreen;
