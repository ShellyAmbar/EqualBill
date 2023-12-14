import { GlobalColors } from '@equalbill/styles/global-colors';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: GlobalColors.BgColors.Bg1,
  },
  image_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image_placeholder: {
    width: '70%',
    height: 200,
    backgroundColor: GlobalColors.BgColors.Bg5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: GlobalColors.BgColors.Bg4,
    zIndex: 0,
  },
  image_inner: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
    zIndex: 0,
  },
  close: {
    position: 'absolute',
    top: -15,
    start: -15,
    zIndex: 1,
    backgroundColor: GlobalColors.BgColors.Bg1,
    borderRadius: 30,
    padding: 5,
    borderColor: GlobalColors.Border,
    borderWidth: 1,
  },
});
export default styles;
