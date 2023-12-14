import { User } from '@equalbill/stores/user/interfaces';
import { ViewStyle } from 'react-native';

type HorizontalUsersSliderProps = {
  data: User[];
  style?: ViewStyle;
  onPressItem?: (item: User) => void;
  onPressDeleteItem?: (item: User) => void;
};

export default HorizontalUsersSliderProps;
