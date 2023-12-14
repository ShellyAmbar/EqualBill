import React from 'react';
import { Box } from '@equalbill/components/controllers/box/box';
import GroupItemProps from './interfaces';
import Styles from './group-item.styles';
import { Image } from 'react-native';
import TextFactory from '@equalbill/components/factories/text-factory/text-factory';
import styles from './group-item.styles';
import { LinearGradient } from 'expo-linear-gradient';

const GroupItem = ({ item, onPress }: GroupItemProps) => {
  return (
    <Box
      onPress={() => {
        onPress && onPress(item);
      }}
      style={[Styles.rect, styles.shadow]}
    >
      <Image
        style={Styles.image}
        resizeMode="contain"
        source={{
          uri: item.url
            ? item.url
            : 'https://www.treehugger.com/thmb/IAlZGVzhRLGZL_E0zSv7qbzyGRA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1273584292-cbcd5f85f4c646d58f7a7fa158dcaaeb.jpg',
        }}
      />
      <LinearGradient colors={['rgba(0,0,0,0.6)', 'transparent']} start={[1, 1]} end={[1, 0]} style={styles.shade} />

      <TextFactory type="h5" style={Styles.text}>
        {item.name}
      </TextFactory>
    </Box>
  );
};

export default GroupItem;
