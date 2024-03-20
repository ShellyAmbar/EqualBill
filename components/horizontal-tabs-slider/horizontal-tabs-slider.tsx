import React from 'react';
import createStyle from './horizontal-tabs-slider.styles';
import TabItem from './tab-item/tab-item';
import { HorizontalSliderProps, ListItem } from './interfaces';
import useHorizontalSlider from './hooks/useHorizontalSlider';
import { Box } from '../controllers/box/box';
import { FlatList, View } from 'react-native';
import Spacer from '../controllers/spacer/spacer';

const HorizontalTabsSlider = ({
  dataList,
  isMultySelection = false,
  onPressItem,
  onDeleteItem,
  isDeletable = false,
  ...props
}: HorizontalSliderProps) => {
  const { listOfData, onSelectItem, scrollRef, selectedItemsIndexs, onDeleteItemFromList, viewHeight, setViewHeight } = useHorizontalSlider({
    list: dataList,
    isMultySelection,
  });

  const Styles = createStyle({ height: viewHeight });
  return (
    <FlatList
      data={listOfData}
      ref={ref => {
        scrollRef.current = ref;
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={Styles.contentCointainer}
      style={Styles.cointainer}
      keyExtractor={item => item.index.toString()}
      ItemSeparatorComponent={() => <Spacer size={16} isVertical={false} />}
      renderItem={({ item, index }) => (
        <View
          onLayout={e => {
            if (viewHeight === 0) {
              setViewHeight(e.nativeEvent.layout.height);
            }
          }}
        >
          <TabItem
            isDeletable={isDeletable}
            key={item.index}
            item={item}
            onPressDelete={item => {
              onDeleteItem && onDeleteItem(item);
              onDeleteItemFromList(item);
            }}
            onPress={item => {
              onSelectItem(item);
              onPressItem && onPressItem(item);
            }}
            selectedItemsIndexs={selectedItemsIndexs}
          />
        </View>
      )}
    />
  );
};
export default HorizontalTabsSlider;
