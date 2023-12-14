import { GlobalColors } from '@equalbill/styles/global-colors';
import { width } from '@equalbill/styles/styles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width,
    height: '100%',
  },
  top: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  bottom: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  lottie: {
    width: width * 0.9,
    height: 350,
  },
  text: {
    paddingHorizontal: 64,
    color: GlobalColors.TextColors.primary,
    textAlign: 'center',
  },
  subtext: {
    paddingHorizontal: 24,
    color: GlobalColors.TextColors.white,
    textAlign: 'center',
  },
});
