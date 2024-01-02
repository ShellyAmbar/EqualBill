import { GlobalColors } from '@equalbill/styles/global-colors';
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: GlobalColors.Brand.primary,
  },
});
