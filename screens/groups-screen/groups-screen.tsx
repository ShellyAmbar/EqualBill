import { View, Text } from 'react-native';
import React from 'react';
import { Box } from '@equalbill/components/controllers/box/box';
import Header from '@equalbill/components/header/header';

const GroupsScreen = ({ navigation }) => {
  return (
    <View>
      <Header
        title="All Groups"
        onClickBack={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

export default GroupsScreen;
