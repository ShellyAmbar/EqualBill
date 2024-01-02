import { GlobalColors } from '@equalbill/styles/global-colors';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  image: {
    zIndex: 0,
    width: 60,
    height: 60,
    borderRadius: 100,
    borderColor: GlobalColors.Border,
    borderWidth: 1,
  },
  selected: {
    borderColor: GlobalColors.Brand.primary,
  },
  cancelableImage: {
    zIndex: 0,
    width: 60,
    height: 60,
  },
  text: {
    color: GlobalColors.Brand.primary,
  },
  close: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -5,
    left: -5,
    width: 24,
    height: 24,
    zIndex: 10,
    borderColor: GlobalColors.Border,
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: GlobalColors.BgColors.Bg1,
  },
});

export default styles;
