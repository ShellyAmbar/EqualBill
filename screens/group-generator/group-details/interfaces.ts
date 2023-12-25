type GroupDetailes = {
  name?: string;
  description?: string;
};
type GroupDetailsProps = {
  data?: GroupDetailes;
  onDataChanged?: (data: GroupDetailes) => void;
};

export { GroupDetailsProps, GroupDetailes };
