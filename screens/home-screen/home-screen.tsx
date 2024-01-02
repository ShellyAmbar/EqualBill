import React from 'react';
import { Image } from 'react-native';
import { Box } from '../../components/controllers/box/box';
import Styles from './home-screen.styles';
import useHomeScreen from './hooks/useHomeScreen';
import styles from './home-screen.styles';
import TextFactory from '@equalbill/components/factories/text-factory/text-factory';
import Spacer from '@equalbill/components/controllers/spacer/spacer';
import { LinearGradient } from 'expo-linear-gradient';
import Right from '@equalbill/assets/images/direction-right-white.svg';
import Splash from 'rn-splash-effect';
import { width } from '@equalbill/styles/styles';
import UserStore from '@equalbill/stores/user/user-store';
import { observer } from 'mobx-react';
import GroupsSlider from '@equalbill/components/groups-slider/groups-slider';
const HomeScreen = observer(props => {
  const {} = useHomeScreen();

  return (
    <Box style={Styles.container}>
      <Box style={styles.top}>
        <LinearGradient colors={['rgba(0,0,0,0.6)', 'transparent']} start={[1, 1]} end={[1, 0]} style={styles.gradiant} />
        <Image
          style={styles.circle}
          resizeMode="cover"
          source={{ uri: 'https://images.freeimages.com/365/images/previews/85b/psd-universal-blue-web-user-icon-53242.jpg' }}
        />
        <Spacer size={16} />
        <TextFactory style={styles.top_text} type="h1">
          Hey Shelly,
        </TextFactory>
        <Spacer size={16} />
        <TextFactory style={styles.top_text} type="h4">
          welcome to EqualBill. here you can create groups and handle your expenses.
        </TextFactory>
      </Box>
      <Box
        onPress={() => {
          props.navigation.navigate('GroupGenerator');
        }}
        style={styles.botton}
      >
        <Splash width={width * 0.9} height={100} duration={3000} />
        <TextFactory style={styles.botton_text} type="h3">
          Create group
        </TextFactory>
        <Right />
      </Box>
      <Box style={styles.bottom}>
        <Box style={styles.horizontal_spaced}>
          <TextFactory type="h2">{'Your groups'}</TextFactory>
          {UserStore.userGroups?.length > 0 && (
            <Box
              style={[styles.button_all, styles.shadow]}
              onPress={() => {
                props.navigation.navigate('Groups');
              }}
            >
              <TextFactory style={styles.button_all_text} type="h5">
                {'See all'}
              </TextFactory>
            </Box>
          )}
        </Box>
        <Spacer size={16} />

        <GroupsSlider
          data={UserStore.userGroups}
          onPress={group => {
            props.navigation.navigate('Group', {
              group,
            });
          }}
        />
      </Box>
    </Box>
  );
});

export default HomeScreen;
