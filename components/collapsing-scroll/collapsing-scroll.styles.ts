import { GlobalColors } from '@equalbill/styles/global-colors';
import { height, width } from '@equalbill/styles/styles';
import { StyleSheet } from 'react-native';
const createStyles = (imageHeight: number) =>
  StyleSheet.create({
    DataContainer: {
      zIndex: 200,
      height: '100%',
      width: '100%',
      flex: 1,
      backgroundColor: GlobalColors.BgColors.Bg1,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      paddingBottom: 100,
      alignItems: 'center',
      marginTop: imageHeight,
      shadowColor: '#000',
      shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowOpacity: 0.5,
      shadowRadius: 16,

      elevation: 10,
    },
    scroll: {
      zIndex: 100,
      width: '100%',
      height: '100%',
    },

    container: {
      flex: 1,
      backgroundColor: GlobalColors.BgColors.Bg1,
      alignItems: 'center',
      height: height,
      width: width,
    },
    backButton: {
      zIndex: 150,
      position: 'absolute',
      start: 16,
      marginTop: 30,
    },

    mainContainer: {
      flex: 1,
      flexDirection: 'column',
      width: '100%',
      minHeight: height - imageHeight,

      paddingTop: 16,
      paddingHorizontal: 20,
      alignItems: 'center',
    },

    image: {
      zIndex: 0,
      right: 0,
      left: 0,
      position: 'absolute',
      height: imageHeight + 20,
      width: '100%',
      resizeMode: 'contain',
    },
  });

export default createStyles;
