import { View, Text } from 'react-native';
import React from 'react';
import IntroductionItemProps from './interfaces';
import styles from './introduction-item.styles';
import { Box } from '@equalbill/components/controllers/box/box';
import LottieView from 'lottie-react-native';
import Spacer from '@equalbill/components/controllers/spacer/spacer';
import TextFactory from '@equalbill/components/factories/text-factory/text-factory';
const IntroductionItem = ({ item }: { item: IntroductionItemProps }) => {
  return (
    <View style={styles.container}>
      <Box style={styles.top}>
        <Spacer size={20} />
        <LottieView autoPlay style={styles.lottie} source={item.lottie} loop />
      </Box>
      <Box style={styles.bottom}>
        <TextFactory style={styles.text} type="h2">
          {item.title}
        </TextFactory>
        <TextFactory style={styles.subtext} type="h3">
          {item.subTitle}
        </TextFactory>
      </Box>
    </View>
  );
};

export default IntroductionItem;
