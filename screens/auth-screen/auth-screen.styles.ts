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
    margin: 16,
    textAlign: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 20,
  },
  background: {
    flex: 1,
    flexWrap: 'wrap',
    ...StyleSheet.absoluteFill,
  },
  box: {
    width: '25%',
    height: '20%',
  },
  boxEven: {
    backgroundColor: GlobalColors.Brand.primary,
  },
  boxOdd: {
    backgroundColor: GlobalColors.BgColors.Bg2,
  },
  title: {
    color: '#FFF',
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
  buttonStyle: {
    width: '100%',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: GlobalColors.Brand.primary,
    alignSelf: 'center',
  },
  lableStyle: { color: GlobalColors.Brand.secondary, fontSize: 16, marginBottom: 0, paddingHorizontal: 0 },
});
