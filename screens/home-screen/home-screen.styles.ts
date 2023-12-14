import { StyleSheet } from 'react-native';
import { GlobalColors } from '../../styles/global-colors';
import { height, width } from '@equalbill/styles/styles';
export default StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: GlobalColors.BgColors.Bg1,
    // paddingHorizontal: 16,
  },
  top: {
    height: height / 2 - 30,
    width: '100%',
    backgroundColor: GlobalColors.Brand.primary,
    zIndex: 0,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  top_text: {
    color: GlobalColors.TextColors.white,
    textAlign: 'center',
  },
  gradiant: {
    position: 'absolute',
    width: width,
    height: '100%',
  },
  botton: {
    width: width * 0.8,
    borderRadius: 30,
    zIndex: 1,
    backgroundColor: GlobalColors.Brand.primary,
    height: 100,
    position: 'absolute',
    top: height / 2 - 30 - 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  botton_text: {
    color: GlobalColors.TextColors.white,
    marginEnd: 16,
  },

  bottom: {
    flex: 1,
    width: '100%',
    alignContent: 'flex-end',
    paddingBottom: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 70,
    zIndex: 0,
  },
  horizontal_spaced: {
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  button_all: {
    backgroundColor: GlobalColors.BgColors.Bg1,
    borderRadius: 30,
    padding: 8,
    paddingHorizontal: 12,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 30,

    elevation: 3,
  },
  button_all_text: {
    color: GlobalColors.Brand.primary,
  },
  circle: {
    zIndex: 0,
    width: 80,
    height: 80,
    borderRadius: 100,
    borderColor: GlobalColors.Border,
    borderWidth: 1,
  },
});
