import { GlobalColors } from '@equalbill/styles/global-colors';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
  },
  title: {
    color: GlobalColors.Brand.primary,
    alignSelf: 'center',
  },
  subtitle: {
    color: GlobalColors.Brand.primary,
    fontSize: 16,
    fontWeight: '700',
  },
  textInput: {
    paddingVertical: 5,
  },
  button: {
    width: '70%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: GlobalColors.Brand.primary,
    alignSelf: 'center',
  },
});

export default styles;
