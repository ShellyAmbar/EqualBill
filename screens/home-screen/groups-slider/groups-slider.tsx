import { FlatList } from 'react-native';
import React, { useRef } from 'react';
import GroupsSliderProps from './interfaces';
import { Group } from '@equalbill/stores/user/interfaces';
import { Box } from '@equalbill/components/controllers/box/box';
import Styles from './groups-slider.styles';
import Spacer from '@equalbill/components/controllers/spacer/spacer';
import GroupItem from './group-item/group-item';
import { useNavigation } from '@react-navigation/native';

const GroupsSlider = ({ data, style }: GroupsSliderProps) => {
  const flatlistRef = useRef(null);
  const navigation = useNavigation();

  const scrollToIndex = (group: Group) => {
    const indexToScroll = data.findIndex(item => item.id === group.id);
    console.log('index', indexToScroll);

    flatlistRef.current?.scrollToIndex({ index: indexToScroll, animated: true });
    navigation.navigate('Group', {
      group,
    });
  };
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      ref={flatlistRef}
      data={data}
      horizontal
      ItemSeparatorComponent={() => <Spacer size={12} isVertical={false} />}
      style={[Styles.list, { ...style }]}
      contentContainerStyle={Styles.content}
      renderItem={({ item, index }) => (
        <GroupItem
          item={item}
          onPress={() => {
            scrollToIndex(item);
          }}
        />
      )}
    />
  );
};

export default GroupsSlider;
