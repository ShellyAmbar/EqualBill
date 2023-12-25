import { User } from '@equalbill/stores/user/interfaces';

type GroupParticipentsProps = {
  groupSelectedContacts?: User[];
  onGroupSelectedContactsChanged?: (groupSelectedContacts: User[]) => void;
};
export default GroupParticipentsProps;
