import { ListItem } from '../interfaces';

type TabItemProps = {
  onPress: (item: ListItem) => void;
  item: ListItem;
  selectedItemsIndexs: number[];
  onPressDelete: (item: ListItem) => void;
  isDeletable: boolean;
};

type TabItemStylesProps = {
  isSelected?: boolean;
  isImageView: boolean;
};

export { TabItemProps, TabItemStylesProps };
