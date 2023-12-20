import { GlobalColors } from '@equalbill/styles/global-colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    borderWidth: 1,
    backgroundColor: GlobalColors.BgColors.Bg3,
    borderRadius: 16,
    width: '100%',
    paddingVertical: 12,
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
