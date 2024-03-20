type ListItem = {
  name: string;
  index: number;
  url?: string;
};
type HorizontalSliderProps = {
  dataList: ListItem[];
  isMultySelection?: boolean;
  onPressItem?: (item: ListItem) => void;
  onDeleteItem?: (item: ListItem) => void;
  isDeletable: boolean;
};

export { ListItem, HorizontalSliderProps };
