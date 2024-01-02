import React from 'react';
import { Box } from '@equalbill/components/controllers/box/box';
import Header from '@equalbill/components/header/header';
import GroupsSlider from '@equalbill/components/groups-slider/groups-slider';
import UserStore from '@equalbill/stores/user/user-store';
import Spacer from '@equalbill/components/controllers/spacer/spacer';
const GroupsScreen = ({ navigation }) => {
  return (
    <Box>
      <Header
        title="All Groups"
        onClickBack={() => {
          navigation.navigate('Home');
        }}
      />
      <Spacer size={30} />
      <GroupsSlider
        data={UserStore.userGroups}
        isHorizontal={false}
        onPress={group => {
          navigation.navigate('Group', {
            group,
          });
        }}
      />
    </Box>
  );
};

export default GroupsScreen;
