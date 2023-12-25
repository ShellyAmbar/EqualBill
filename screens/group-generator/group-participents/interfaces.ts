import { User } from '@equalbill/stores/user/interfaces';

type GroupParticipentsProps = {
  participents?: User[];
  onParticipentsChanged?: (participents: User[]) => void;
};
export default GroupParticipentsProps;
