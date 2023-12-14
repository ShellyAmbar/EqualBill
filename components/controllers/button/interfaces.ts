import { ViewProps, ViewStyle } from 'react-native';
export default interface ButtonProps extends ViewProps {
  label: string;
  lableStyle?: ViewStyle;
}
