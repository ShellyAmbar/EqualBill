import { Dimensions, I18nManager, TextStyle } from 'react-native';
import { GlobalColors } from '@equalbill/styles/global-colors';
import { fontPixel } from '@equalbill/utils/pixel-ratio-util';

export const { width, height } = Dimensions.get('screen');

interface HebrewStyleInterface {
  H1: TextStyle;
  H2: TextStyle;
  H3: TextStyle;
  H4: TextStyle;
  H5: TextStyle;
  H6: TextStyle;
  BodyText1: TextStyle;
  BodyText2: TextStyle;
  BodyText3: TextStyle;
  BodyText4: TextStyle;
  Link: TextStyle;
  BodyTextSmallHighlight: TextStyle;
  BodyTextSmall: TextStyle;
  BodyTextXS: TextStyle;
  BodyTextLarge: TextStyle;
  BodyTextXLarge: TextStyle;
}

interface EnglishStyleInterface {
  H1: TextStyle;
  H2: TextStyle;
  H3: TextStyle;
  H4: TextStyle;
  H5: TextStyle;
  H6: TextStyle;
  BodyText1: TextStyle;
  BodyText2: TextStyle;
  BodyText3: TextStyle;
  BodyText4: TextStyle;
  Link: TextStyle;
  BodyTextSmallHighlight: TextStyle;
  BodyTextSmall: TextStyle;
  BodyTextXS: TextStyle;
  BodyTextLarge: TextStyle;
  BodyTextXLarge: TextStyle;
}

export const HebrewStyle: HebrewStyleInterface = {
  H1: {
    fontFamily: 'Segoe-UI-SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: fontPixel(28),
    lineHeight: fontPixel(39),
    color: GlobalColors.TextColors.primary,
  },
  H2: {
    fontFamily: 'Segoe-UI-SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: fontPixel(24),
    lineHeight: fontPixel(33),
    color: GlobalColors.TextColors.primary,
  },
  H3: {
    fontFamily: 'Segoe-UI-SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: fontPixel(20),
    lineHeight: fontPixel(28),

    color: GlobalColors.TextColors.primary,
  },
  H4: {
    fontFamily: 'Segoe-UI-SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: fontPixel(18),
    lineHeight: fontPixel(25),

    color: GlobalColors.TextColors.primary,
  },
  H5: {
    fontFamily: 'Segoe-UI-SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: fontPixel(16),
    lineHeight: fontPixel(22),

    color: GlobalColors.TextColors.primary,
  },
  H6: {
    fontFamily: 'Segoe-UI-SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: fontPixel(15),
    lineHeight: fontPixel(21),

    color: GlobalColors.TextColors.primary,
  },
  BodyText1: {
    fontFamily: 'Segoe UI',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: fontPixel(16),
    lineHeight: fontPixel(21),

    color: GlobalColors.TextColors.primary,
  },
  BodyText2: {
    fontFamily: 'Segoe UI',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: fontPixel(15),
    lineHeight: fontPixel(21),

    color: GlobalColors.TextColors.primary,
  },
  BodyText3: {
    fontFamily: 'Segoe UI',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: fontPixel(14),
    lineHeight: fontPixel(19),

    color: GlobalColors.TextColors.primary,
  },
  BodyText4: {
    fontFamily: 'Segoe UI',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: fontPixel(16),
    lineHeight: fontPixel(21),

    color: GlobalColors.TextColors.primary,
  },
  Link: {
    fontFamily: 'Segoe UI',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: fontPixel(16),
    lineHeight: fontPixel(21),
    textDecorationLine: 'underline',

    color: GlobalColors.Brand.primary,
  },
  BodyTextSmallHighlight: {
    fontFamily: 'Segoe-UI-SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: fontPixel(13),
    lineHeight: fontPixel(17),

    color: GlobalColors.TextColors.primary,
  },
  BodyTextSmall: {
    fontFamily: 'Segoe UI',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: fontPixel(13),
    lineHeight: fontPixel(17),

    color: GlobalColors.TextColors.primary,
  },
  BodyTextXS: {
    fontFamily: 'Segoe-UI-SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: fontPixel(10),
    lineHeight: fontPixel(13),

    color: GlobalColors.TextColors.primary,
  },
  BodyTextLarge: {
    fontFamily: 'Segoe-UI-SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',

    fontSize: fontPixel(40),
    lineHeight: fontPixel(53.2),

    color: GlobalColors.TextColors.primary,
  },
  BodyTextXLarge: {
    fontFamily: 'Segoe-UI-SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: fontPixel(48),
    lineHeight: fontPixel(48),

    color: GlobalColors.TextColors.primary,
  },
};

export const EnglishStyle: EnglishStyleInterface = {
  H1: {
    fontFamily: 'Inter-SemiBold',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: fontPixel(28),
    lineHeight: fontPixel(39),
    textAlign: 'left',
    color: GlobalColors.TextColors.primary,
  },
  H2: {
    fontFamily: 'Inter-SemiBold',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: fontPixel(24),
    lineHeight: fontPixel(33),
    textAlign: 'left',
    color: GlobalColors.TextColors.primary,
  },
  H3: {
    fontFamily: 'Inter-SemiBold',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: fontPixel(20),
    lineHeight: fontPixel(28),
    textAlign: 'left',
    color: GlobalColors.TextColors.primary,
  },
  H4: {
    fontFamily: 'Inter-SemiBold',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: fontPixel(18),
    lineHeight: fontPixel(25),
    textAlign: 'left',
    color: GlobalColors.TextColors.primary,
  },
  H5: {
    fontFamily: 'Inter-SemiBold',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: fontPixel(16),
    lineHeight: fontPixel(22),
    textAlign: 'left',
    color: GlobalColors.TextColors.primary,
  },
  H6: {
    fontFamily: 'Inter-SemiBold',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: fontPixel(15),
    lineHeight: fontPixel(21),
    textAlign: 'left',
    color: GlobalColors.TextColors.primary,
  },
  BodyText1: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: fontPixel(16),
    lineHeight: fontPixel(21),
    textAlign: 'left',
    color: GlobalColors.TextColors.primary,
    textDecorationColor: 'red',
  },
  BodyText2: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: fontPixel(15),
    lineHeight: fontPixel(21),
    textAlign: 'left',
    color: GlobalColors.TextColors.primary,
  },
  BodyText3: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: fontPixel(14),
    lineHeight: fontPixel(17),
    textAlign: 'left',
    color: GlobalColors.TextColors.primary,
  },
  BodyText4: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: fontPixel(16),
    lineHeight: fontPixel(21),
    textAlign: 'left',
    color: GlobalColors.TextColors.primary,
  },
  Link: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: fontPixel(16),
    lineHeight: fontPixel(19),
    textDecorationLine: 'underline',
    textAlign: 'left',
    color: GlobalColors.Brand.primary,
  },
  BodyTextSmallHighlight: {
    fontFamily: 'Inter-SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: fontPixel(13),
    lineHeight: fontPixel(16),
    textAlign: 'left',
    color: GlobalColors.TextColors.primary,
  },
  BodyTextSmall: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: fontPixel(13),
    lineHeight: fontPixel(16),
    textAlign: 'left',
    color: GlobalColors.TextColors.primary,
  },
  BodyTextXS: {
    fontFamily: 'Inter-SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: fontPixel(10),
    lineHeight: fontPixel(12),
    textAlign: 'left',
    color: GlobalColors.TextColors.primary,
  },
  BodyTextLarge: {
    fontFamily: 'Inter-SemiBold',
    fontStyle: 'normal',
    fontWeight: 'bold',

    fontSize: fontPixel(40),
    lineHeight: fontPixel(53.2),
    textAlign: 'right',
    color: GlobalColors.TextColors.primary,
  },
  BodyTextXLarge: {
    fontFamily: 'Inter-SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: fontPixel(48),
    lineHeight: fontPixel(48),
    textAlign: 'right',
    color: GlobalColors.TextColors.primary,
  },
};

export const Containeres: { flexFullScreenCentered: TextStyle } = {
  flexFullScreenCentered: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: GlobalColors.BgColors.Bg1,
  },
};
export const languageStyle = I18nManager.isRTL ? HebrewStyle : EnglishStyle;
