import { GlobalColors } from '@equalbill/styles/global-colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    borderRadius: 100,
    borderWidth: 2,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerDeactivate: {
    borderColor: GlobalColors.Border,
  },
  outerActive: {
    borderColor: GlobalColors.Brand.primary,
  },
  innerActive: {
    borderRadius: 100,
    borderColor: GlobalColors.Brand.primary,
    backgroundColor: GlobalColors.Brand.primary,
    width: 15,
    height: 15,
  },
});
