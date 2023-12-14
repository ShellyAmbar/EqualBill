import { width } from '@equalbill/styles/styles';
import { StyleSheet } from 'react-native';
const LABEL_WIDTH = width / 4;
const styles = StyleSheet.create({
  labelContainer: {
    position: 'absolute',
    alignItems: 'center',
    width: LABEL_WIDTH,
  },
  label: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
export default styles;
