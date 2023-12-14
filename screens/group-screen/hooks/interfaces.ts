enum VisiblePopup {
  NONE,
  ADD_EXPENSE,
  EDIT_GROUP,
}
type ContactUser = {
  phone: number;
  id: number;
  firstName: string;
  lastName: string;
};
export { VisiblePopup, ContactUser };
