import React from 'react';
import { Box } from '@equalbill/components/controllers/box/box';
import Styles from './item.styles';
import TextFactory from '@equalbill/components/factories/text-factory/text-factory';
import { ItemProps } from './interfaces';
import { Image } from 'react-native';
import CloseIcon from '@equalbill/assets/images/closeIcon.svg';

const Item = ({ item, onPress, onPressDelete }: ItemProps) => {
  return (
    <Box
      onPress={() => {
        onPress && onPress(item);
      }}
      style={Styles.container}
    >
      <Box style={Styles.cancelableImage}>
        {onPressDelete && (
          <Box onPress={() => onPressDelete(item)} style={Styles.close}>
            <CloseIcon height={10} width={10} />
          </Box>
        )}
        <Image
          style={Styles.image}
          resizeMode="cover"
          source={{ uri: item.url ? item.url : 'https://images.freeimages.com/365/images/previews/85b/psd-universal-blue-web-user-icon-53242.jpg' }}
        />
      </Box>

      <TextFactory type="h5" style={Styles.text}>
        {`${item.name.length > 15 ? item.name.slice(0, 15) + '..' : item.name}`}
      </TextFactory>
    </Box>
  );
};

export default Item;
