import { GlobalColors } from '@equalbill/styles/global-colors';
import { languageStyle } from '@equalbill/styles/styles';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  textLabel: {
    ...languageStyle.BodyTextSmallHighlight,
    letterSpacing: 0,
    textAlign: 'center',
    color: GlobalColors.TextColors.primary,
    backgroundColor: GlobalColors.BgColors.Bg4,
    padding: 8,
    borderRadius: 8,
  },
});
