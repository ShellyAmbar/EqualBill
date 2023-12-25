import React, { forwardRef, useImperativeHandle } from 'react';
import { Box } from '@equalbill/components/controllers/box/box';
import Styles from './group-media.styles';
import TextFactory from '@equalbill/components/factories/text-factory/text-factory';
import Spacer from '@equalbill/components/controllers/spacer/spacer';
import Plus from '@equalbill/assets/images/plus.svg';
import Close from '@equalbill/assets/images/closeIcon.svg';
import useGroupMedia from './hooks/useGroupMedia';
import * as ImagePicker from 'expo-image-picker';
import { Image } from 'react-native';
import GroupMediaProps from './interfaces';
const GroupMedia = forwardRef(({ imageUri, onImageUriChanged }: GroupMediaProps, ref) => {
  const { image, setImage } = useGroupMedia({ imageUri });

  useImperativeHandle(ref, () => ({
    getGroupMedia() {
      return { uri: image };
    },
  }));
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      onImageUriChanged && onImageUriChanged(result.assets[0].uri);
    }
  };
  return (
    <Box style={Styles.container}>
      <TextFactory>{"Upload your group's image:"}</TextFactory>
      <Spacer size={44} />
      <Box style={Styles.image_container}>
        {image ? (
          <Box style={Styles.image_placeholder}>
            <Box
              style={Styles.close}
              onPress={() => {
                setImage(null);
              }}
            >
              <Close width={24} height={24} />
            </Box>
            <Image style={Styles.image_inner} source={{ uri: image }} />
          </Box>
        ) : (
          <Box onPress={() => pickImage()} style={Styles.image_placeholder}>
            <Plus />
          </Box>
        )}
      </Box>
    </Box>
  );
});

export default GroupMedia;
