import { Group } from '@equalbill/stores/user/interfaces';

type GroupItemProps = {
  item: Group;
  onPress: (item: Group) => void;
};

export default GroupItemProps;
