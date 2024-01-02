import { View, Text } from 'react-native';
import React from 'react';
import { Box } from '../controllers/box/box';
import Styles from './header.styles';
import { useNavigation } from '@react-navigation/native';
import Back from '@equalbill/assets/images/direction-left.svg';
import TextFactory from '../factories/text-factory/text-factory';
import HeaderProps from './interfaces';
const Header = ({ title, onClickBack }: HeaderProps) => {
  const navigation = useNavigation();
  return (
    <Box style={Styles.horizontal}>
      {onClickBack ? (
        <Box
          style={Styles.button}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Back width={24} height={24} />
        </Box>
      ) : (
        <Box style={{ width: 24, height: 24 }} />
      )}
      <TextFactory style={Styles.title} type="h1">
        {title ?? ''}
      </TextFactory>
      <Box style={{ width: 24, height: 24 }} />
    </Box>
  );
};

export default Header;
