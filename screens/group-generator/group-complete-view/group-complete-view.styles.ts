import { GlobalColors } from '@equalbill/styles/global-colors';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  content: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    backgroundColor: GlobalColors.BgColors.Bg1,
  },
});
export default styles;
