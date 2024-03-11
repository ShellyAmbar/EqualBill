import { StyleSheet } from 'react-native';
import { GlobalColors } from '../../styles/global-colors';
export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: GlobalColors.Brand.primary,
  },
  blurContainer: {
    flex: 1,
    padding: 20,

    marginTop: 80,
    marginBottom: 30,
    marginHorizontal: 10,
    textAlign: 'center',
    //  justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 20,
  },
  centerHorizontal: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    flexWrap: 'wrap',
    ...StyleSheet.absoluteFill,
  },

  title: {
    color: GlobalColors.TextColors.white,
    fontSize: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',

    paddingVertical: 20,
  },
  textInputStyle: {
    paddingVertical: 5,
    backgroundColor: 'transparent',
    borderColor: '#FFFF',
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 1,
    color: '#FFFF',
    paddingHorizontal: 0,
    borderRadius: 0,
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
  lableStyle: {
    color: GlobalColors.TextColors.white,
    fontSize: 14,
    marginBottom: 0,
    paddingHorizontal: 0,
  },
  shadow: {
    shadowColor: '#FFFF',
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.18,
    shadowRadius: 3.0,

    elevation: 10,
  },
});
