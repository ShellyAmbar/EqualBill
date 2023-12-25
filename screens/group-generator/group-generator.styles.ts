import { GlobalColors } from '@equalbill/styles/global-colors';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: GlobalColors.BgColors.Bg1,
  },
  title: {
    color: GlobalColors.TextColors.white,
  },
  horizontal_spaces: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    paddingBottom: 30,
    backgroundColor: GlobalColors.BgColors.Bg1,
  },
  horizontal: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: GlobalColors.Brand.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: GlobalColors.Brand.primary,
  },
});

export default styles;
