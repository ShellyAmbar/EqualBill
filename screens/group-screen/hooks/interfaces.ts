import { Group } from '@equalbill/stores/user/interfaces';

enum VisiblePopup {
  NONE,
  ADD_EXPENSE,
  EDIT_GROUP,
  EDIT_EXPENSE,
}
type ContactUser = {
  phone: number;
  id: number;
  firstName: string;
  lastName: string;
};
type UseGroupScreenProps = {
  groupItem: Group;
};
export { VisiblePopup, ContactUser, UseGroupScreenProps };
