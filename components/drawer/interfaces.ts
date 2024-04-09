import { TextStyle, ViewStyle } from 'react-native';

type screen = {
  name: string;
  component: React.Component;
};
type DrawerProps = {
  screens?: screen[];
  containerStyle?: ViewStyle;
  tabStyle?: ViewStyle;
  tabTextStyle?: TextStyle;
};

export { DrawerProps };
