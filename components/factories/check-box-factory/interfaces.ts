import { TouchableOpacityProps, ViewStyle } from 'react-native';

type CheckBoxFactoryProps = {
  type: 'circular' | 'default';
  style?: ViewStyle;
  label?: string;
  status?: boolean;
} & TouchableOpacityProps;

export default CheckBoxFactoryProps;
