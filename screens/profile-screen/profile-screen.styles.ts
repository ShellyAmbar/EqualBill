import { StyleSheet } from 'react-native';
import { GlobalColors } from '../../styles/global-colors';
export default StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: GlobalColors.BgColors.Bg1,
    paddingHorizontal: 16,
  },
  content: {
    paddingBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll: { width: '100%', marginBottom: 120 },
  image: {
    width: 200,
    height: 200,
    backgroundColor: GlobalColors.BgColors.Bg5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 2,
    //  borderColor: GlobalColors.BgColors.Bg4,
    zIndex: 1,
  },
  title: {
    color: GlobalColors.TextColors.white,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.9,
    shadowRadius: 4.0,

    elevation: 15,
  },
  field: {
    width: '100%',
    paddingVertical: 8,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingStart: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: GlobalColors.IconsColors.secondary,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 8,
    backgroundColor: 'transparent',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: GlobalColors.IconsColors.secondary,
  },
  field_title: {
    color: GlobalColors.TextColors.secondary,
  },
  field_subtitle: {
    color: GlobalColors.TextColors.white,
  },
});
