import { TextStyle, ViewProps, ViewStyle } from 'react-native';
export default interface ButtonProps extends ViewProps {
  label: string;
  lableStyle?: TextStyle;
  onPress: () => void;
  style?: ViewStyle;
}
