import { View, Text, FlatList, Animated } from 'react-native';
import React, { useRef, useState } from 'react';
import styles from './introduction-screen.styles';
import useIntroductionScreen from './hooks/useIntroductionScreen';
import IntroductionItem from './introduction-item/introduction-item';
import { Box } from '@equalbill/components/controllers/box/box';
import PaginationIndicator from './pagination-indicator/pagination-indicator';
import Spacer from '@equalbill/components/controllers/spacer/spacer';
import { width } from '@equalbill/styles/styles';
import ButtonProgressNext from './button-progress-next/button-progress-next';

const IntroductionScreen = (props: any) => {
  const { data } = useIntroductionScreen();
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const flatRef = useRef(null);
  const scrollTo = () => {
    if (currentIndex < data.length - 1) {
      flatRef.current?.scrollToIndex({ index: currentIndex + 1 });
    }
  };
  return (
    <Box style={styles.container}>
      <Box style={{ flex: 3 }}>
        <FlatList
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item, index }) => <IntroductionItem item={item} />}
          data={[...data]}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id.toString()}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={flatRef}
        />
      </Box>

      <Spacer size={16} />
      <ButtonProgressNext
        scrollTo={scrollTo}
        precentage={(currentIndex + 1) * (100 / data.length)}
        onComplete={() => {
          props.navigation?.navigate('Main');
        }}
      />
      <Spacer size={26} />
      <PaginationIndicator data={data} scrollX={scrollX} screenWidth={width} />
    </Box>
  );
};

export default IntroductionScreen;
