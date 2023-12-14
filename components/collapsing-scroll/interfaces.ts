import { ScrollViewProps, type ViewStyle } from 'react-native';

interface CollapsingScrollProps {
  image: () => JSX.Element;
  constantTopBackground: () => JSX.Element;
  imageStyle?: ViewStyle;
  imageBackStyle?: ViewStyle;
  conainerStyle?: ViewStyle;
  scrollStyle?: ViewStyle;
  scrollProps?: ScrollViewProps;
  dataContainerStyle?: ViewStyle;
  showBackButton?: boolean;
  backButton?: () => JSX.Element;
  onClickBack?: () => void;
  imageHeight?: number;
  children: any;
}

export default CollapsingScrollProps;
