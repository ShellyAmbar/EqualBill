import { User } from '@equalbill/stores/user/interfaces';
import { ViewStyle } from 'react-native';

type ItemProps = {
  item: User;
  onPress?: (item: User) => void;
  style?: ViewStyle;
  onPressDelete?: (item: User) => void;
};

export { ItemProps };
