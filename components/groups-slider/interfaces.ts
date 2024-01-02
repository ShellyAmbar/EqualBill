import { Group } from '@equalbill/stores/user/interfaces';
import { ViewStyle } from 'react-native';

type GroupsSliderProps = {
  data: Group[];
  style?: ViewStyle;
  isHorizontal?: boolean;
  onPress?: (group: Group) => void;
};
export default GroupsSliderProps;
