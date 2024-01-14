import { GlobalColors } from '@equalbill/styles/global-colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderRadius: 16,
    width: '100%',
    paddingVertical: 12,
  },
  disabledButton: {
    borderColor: GlobalColors.BgColors.Bg5,
  },
  disabledText: {
    color: GlobalColors.BgColors.Bg5,
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
