import { StyleSheet } from 'react-native';
import { GlobalColors } from '../../styles/global-colors';
export default StyleSheet.create({
  centerHorizontal: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: GlobalColors.TextColors.white,
    fontSize: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    top: 150,
    backgroundColor: GlobalColors.BgColors.Bg4,
    paddingVertical: 20,
  },

  absoluteButtons: {
    position: 'absolute',
    bottom: 80,
    width: '100%',
    paddingHorizontal: 30,
  },
  buttonStyle: {
    width: '100%',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: GlobalColors.TextColors.white,
    alignSelf: 'center',
  },

  video: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});
