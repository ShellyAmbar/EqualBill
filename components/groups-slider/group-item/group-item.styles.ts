import { GlobalColors } from '@equalbill/styles/global-colors';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  rect: {
    zIndex: 0,
    width: 220,
    height: 150,
    borderRadius: 30,
  },
  image: {
    zIndex: 0,
    width: '100%',
    height: '100%',
    borderRadius: 30,
    position: 'absolute',
  },
  shade: {
    zIndex: 0,
    width: '100%',
    height: '100%',
    borderRadius: 30,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 30,

    elevation: 6,
  },
  text: {
    color: GlobalColors.TextColors.white,
    zIndex: 2,
    alignSelf: 'flex-end',
    bottom: 24,
    start: 24,
    position: 'absolute',
  },
});

export default styles;
