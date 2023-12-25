import { GlobalColors } from '@equalbill/styles/global-colors';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
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
  swipe_item: {
    backgroundColor: '#FFFF',

    shadowColor: 'gray',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderRadius: 10,
    overflow: 'hidden',
  },
  list_item: {
    borderRadius: 10,
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
    color: GlobalColors.TextColors.primary,
    textAlign: 'left',
  },
});

export default styles;
