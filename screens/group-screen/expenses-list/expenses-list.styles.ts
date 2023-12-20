import { GlobalColors } from '@equalbill/styles/global-colors';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  list: {
    width: '100%',
    height: '100%',
    marginBottom: 100,
  },
  content: {
    width: '100%',

    paddingBottom: 50,
  },
  list_item: {
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: '#FFFF',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  item_title: {
    color: GlobalColors.TextColors.primary,
  },
  item_text: { color: GlobalColors.TextColors.secondary },
  title: {
    color: GlobalColors.TextColors.white,
    position: 'absolute',
    bottom: 30,
    zIndex: 2,
    left: 16,
  },
});

export default styles;
