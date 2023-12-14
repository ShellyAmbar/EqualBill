import { GlobalColors } from '@equalbill/styles/global-colors';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  rect: {
    zIndex: 0,
    width: 220,
    height: 150,
    borderRadius: 30,
    justifyContent: 'flex-end',
    padding: 24,
  },
  image: {
    zIndex: 0,
    width: 220,
    height: 150,
    borderRadius: 30,
    position: 'absolute',
  },
  shade: {
    zIndex: 1,
    width: 220,
    height: 150,
    borderRadius: 30,
    position: 'absolute',
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
  },
});

export default styles;
