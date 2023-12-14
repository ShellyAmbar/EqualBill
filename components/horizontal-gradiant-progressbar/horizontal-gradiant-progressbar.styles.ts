import { StyleSheet } from 'react-native';
import { HorizontalGradiantProgressbarStylesProps } from './interfaces';

const createStyle = ({ animatedWidthValue, ...props }: HorizontalGradiantProgressbarStylesProps) => {
  return StyleSheet.create({
    steps: {
      flexDirection: 'row',
      width: '100%',
      zIndex: 1,
      justifyContent: 'space-between',
      //paddingHorizontal: 20,
      position: 'absolute',
    },
    container: {
      width: '100%',
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },

    circularContainer: {
      borderRadius: 0,
      backgroundColor: 'transparent',
      width: '100%',
      height: 6,
      overflow: 'hidden',
      zIndex: 0,
    },
    linearGradient: {
      flex: 1,
      borderRadius: 8,
      marginStart: -2,
    },
    animatedView: {
      backgroundColor: 'transparent',
      width: animatedWidthValue,
      height: '100%',
    },
  });
};
export default createStyle;
