import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { createStyle } from './tab-item.styles';
import TextFactory from '@equalbill/components/factories/text-factory/text-factory';
import { TabItemProps } from './interfaces';
import CloseIcon from '@equalbill/assets/images/closeIcon.svg';
const TabItem = ({ onPress, item, selectedItemsIndexs, onPressDelete, isDeletable = false, ...props }: TabItemProps) => {
  const isSelected = selectedItemsIndexs.includes(item.index);
  const Styles = createStyle({ isSelected: isSelected, isImageView: item.url !== undefined && item.url?.length > 0 });
  return (
    <TouchableOpacity onPress={() => onPress(item)} style={Styles.container}>
      {isDeletable && (
        <TouchableOpacity onPress={() => onPressDelete(item)} style={Styles.close}>
          <CloseIcon fill={'blue'} height={10} width={10} />
        </TouchableOpacity>
      )}
      <Image
        style={[Styles.image]}
        resizeMode="cover"
        source={{ uri: item.url ? item.url : 'https://images.freeimages.com/365/images/previews/85b/psd-universal-blue-web-user-icon-53242.jpg' }}
      />

      <TextFactory type="h5" style={Styles.text}>
        {`${item.name.length > 15 ? item.name.slice(0, 15) + '..' : item.name}`}
      </TextFactory>
    </TouchableOpacity>
  );
};

export default TabItem;
