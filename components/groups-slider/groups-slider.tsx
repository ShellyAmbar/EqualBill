import { FlatList } from 'react-native';
import React, { useRef } from 'react';
import GroupsSliderProps from './interfaces';
import { Group } from '@equalbill/stores/user/interfaces';
import { Box } from '@equalbill/components/controllers/box/box';
import Styles from './groups-slider.styles';
import Spacer from '@equalbill/components/controllers/spacer/spacer';
import GroupItem from './group-item/group-item';
import { useNavigation } from '@react-navigation/native';

const GroupsSlider = ({ data, style, isHorizontal = true, onPress }: GroupsSliderProps) => {
  const flatlistRef = useRef(null);
  const navigation = useNavigation();

  const scrollToIndex = (group: Group) => {
    const indexToScroll = data.findIndex(item => item.id === group.id);
    console.log('index', indexToScroll);

    flatlistRef.current?.scrollToIndex({ index: indexToScroll, animated: true });
  };
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      ref={flatlistRef}
      data={data}
      horizontal={isHorizontal}
      ItemSeparatorComponent={() => <Spacer size={12} isVertical={!isHorizontal} />}
      style={[Styles.list, { ...style }]}
      contentContainerStyle={Styles.content}
      keyExtractor={(item, index) => item.id}
      renderItem={({ item, index }) => (
        <GroupItem
          style={!isHorizontal ? { width: '49%' } : {}}
          key={item.id}
          item={item}
          onPress={() => {
            isHorizontal && scrollToIndex(item);
            onPress && onPress(item);
          }}
        />
      )}
      numColumns={isHorizontal ? 0 : 2}
      columnWrapperStyle={isHorizontal ? null : { justifyContent: 'space-between' }}
    />
  );
};

export default GroupsSlider;
