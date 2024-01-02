import React from 'react';

import { Box } from '../../components/controllers/box/box';
import Styles from './Insites-screen.styles';
import Header from '@equalbill/components/header/header';
import Spacer from '@equalbill/components/controllers/spacer/spacer';
import GroupsSlider from '@equalbill/components/groups-slider/groups-slider';
import UserStore from '@equalbill/stores/user/user-store';
const InsitesScreen = ({ navigation }) => {
  return (
    <Box style={Styles.container}>
      <Header
        title="Insites"
        onClickBack={() => {
          navigation.navigate('Home');
        }}
      />
      <Spacer size={30} />
      <GroupsSlider data={UserStore.userGroups} isHorizontal={true} onPress={group => {}} style={{}} />
    </Box>
  );
};

export default InsitesScreen;
