import { Group } from '@equalbill/stores/user/interfaces';
import { ViewStyle } from 'react-native';

type GroupItemProps = {
  item: Group;
  onPress: (item: Group) => void;
  style?: ViewStyle;
};

export default GroupItemProps;
