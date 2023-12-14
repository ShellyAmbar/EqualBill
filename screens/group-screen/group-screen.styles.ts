import { GlobalColors } from '@equalbill/styles/global-colors';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  title: {
    color: GlobalColors.TextColors.white,
    position: 'absolute',
    bottom: 30,
    zIndex: 2,
    left: 16,
  },
});

export default styles;
