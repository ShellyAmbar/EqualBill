import { GlobalColors } from '@equalbill/styles/global-colors';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: GlobalColors.Border,
    borderWidth: 1,
    marginEnd: 10,
  },
  column: {
    flexDirection: 'column',
    width: '100%',
  },
  title: {
    color: GlobalColors.Brand.primary,
  },
  subtitle: {
    color: GlobalColors.TextColors.secondary,
  },
});
export default styles;
