import { StyleSheet } from 'react-native';

const createStyle = ({ progressColor, strokeColor }: { progressColor: string; strokeColor: string }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      borderRadius: 100,
      padding: 20,
      backgroundColor: progressColor,
      overflow: 'hidden',
    },
  });

export default createStyle;
