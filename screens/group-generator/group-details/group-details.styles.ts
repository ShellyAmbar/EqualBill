import { GlobalColors } from '@equalbill/styles/global-colors';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: GlobalColors.BgColors.Bg1,
    paddingHorizontal: 8,
  },
  input: { paddingVertical: 5, borderColor: GlobalColors.Border, color: GlobalColors.TextColors.primary },
});
export default styles;
