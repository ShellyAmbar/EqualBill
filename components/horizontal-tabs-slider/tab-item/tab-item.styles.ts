import i18n from '@equalbill/services/i18n';
import { GlobalColors } from '@equalbill/styles/global-colors';
import { EnglishStyle, HebrewStyle } from '@equalbill/styles/styles';
import { StyleSheet } from 'react-native';
import { TabItemStylesProps } from './interfaces';

const createStyle = ({ isSelected, isImageView = false, ...props }: TabItemStylesProps) => {
  return StyleSheet.create({
    container: {
      borderColor: isSelected ? GlobalColors.TextColors.secondary : GlobalColors.Border,
      borderWidth: isImageView ? 0 : 1,
      borderRadius: 15,
      shadowColor: '#FFFF',
      shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowOpacity: 0.4,
      shadowRadius: 5,
      elevation: 15,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    text: {
      ...(i18n.isRTL ? (isSelected ? HebrewStyle.H6 : HebrewStyle.BodyText1) : isSelected ? EnglishStyle.H6 : EnglishStyle.BodyText1),
      color: isSelected ? GlobalColors.Brand.primary : GlobalColors.Border,
    },
    close: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: -6,
      left: -6,
      width: 24,
      height: 24,
      zIndex: 10,
      borderColor: isSelected ? GlobalColors.Brand.primary : GlobalColors.Border,
      borderWidth: 1,
      borderRadius: 30,
      backgroundColor: GlobalColors.BgColors.Bg1,
    },

    image: {
      zIndex: 0,
      width: 60,
      height: 60,
      borderRadius: 100,
      borderColor: isSelected ? GlobalColors.Brand.primary : GlobalColors.Border,
      borderWidth: 1,
      marginBottom: 5,
    },
  });
};
export { createStyle };
