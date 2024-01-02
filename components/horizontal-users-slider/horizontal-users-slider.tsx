import React, { useEffect, useRef } from 'react';
import { Box } from '../controllers/box/box';
import Styles from './horizontal-users-slider.styles';
import HorizontalUsersSliderProps from './interfaces';
import { FlatList } from 'react-native';
import Item from './item/item';
import Spacer from '../controllers/spacer/spacer';
import { User } from '@equalbill/stores/user/interfaces';
import useHorizontalUsersSlider from './hooks/useHorizontalUsersSlider';

const HorizontalUsersSlider = ({ data = [], style, onPressItem, onPressDeleteItem }: HorizontalUsersSliderProps) => {
  const flatlistRef = useRef(null);
  const { selectedItemId, setSelectedItemId } = useHorizontalUsersSlider({ data });

  useEffect(() => {
    if (data?.length > 0) {
      onPressItem && onPressItem(data[0]);
    }
  }, []);

  const scrollToIndex = (user: User) => {
    const indexToScroll = data.findIndex(item => item.id === user.id);
    console.log('index', indexToScroll);

    flatlistRef.current?.scrollToIndex({ index: indexToScroll, animated: true });
  };
  return (
    <Box style={Styles.container}>
      <FlatList
        ref={flatlistRef}
        data={data}
        horizontal
        ItemSeparatorComponent={() => <Spacer size={16} isVertical={false} />}
        style={[Styles.list, { ...style }]}
        contentContainerStyle={Styles.content}
        renderItem={({ item, index }) => (
          <Item
            selectedItemId={selectedItemId}
            item={item}
            onPress={item => {
              setSelectedItemId(item.id);
              scrollToIndex(item);
              onPressItem && onPressItem(item);
            }}
            onPressDelete={onPressDeleteItem}
          />
        )}
      />
    </Box>
  );
};

export default HorizontalUsersSlider;
