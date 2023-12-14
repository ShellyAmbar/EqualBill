import { GlobalColors } from '@equalbill/styles/global-colors';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: GlobalColors.BgColors.Bg1,
  },
  list: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 150,
  },
  list_content: {
    width: '100%',
    justifyContent: 'center',
    paddingBottom: 50,
  },
});
export default styles;
