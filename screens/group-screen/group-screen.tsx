import { Image, View } from 'react-native';
import React from 'react';
import styles from './group-screen.styles';

import CollapsingScroll from '@equalbill/components/collapsing-scroll/collapsing-scroll';
import { Box } from '@equalbill/components/controllers/box/box';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ActionsFloatingButton from 'rn-actions-floating-button';
import useGroupScreen from './hooks/useGroupScreen';
import Popup from 'rn-sliding-popup';
import { VisiblePopup } from './hooks/interfaces';
import SelectContactsView from './select-contacts-view/select-contacts-view';

import HorizontalUsersSlider from '@equalbill/components/horizontal-users-slider/horizontal-users-slider';
import TextFactory from '@equalbill/components/factories/text-factory/text-factory';
import Spacer from '@equalbill/components/controllers/spacer/spacer';
import { LinearGradient } from 'expo-linear-gradient';

const GroupScreen = props => {
  const onclickBack = () => {
    props.navigation.goBack();
  };

  const { currentVisiblePopup, setCurrentVisiblePopup, groupUsers, setGroupUsers, selectedUser, setSelectedUser } = useGroupScreen();

  return (
    <Box style={styles.container}>
      <Popup
        onClickClose={() => {
          setCurrentVisiblePopup(VisiblePopup.NONE);
        }}
        isVisible={currentVisiblePopup === VisiblePopup.ADD_EXPENSE}
      ></Popup>
      <Popup
        onClickClose={() => {
          setCurrentVisiblePopup(VisiblePopup.NONE);
        }}
        isVisible={currentVisiblePopup === VisiblePopup.EDIT_GROUP}
      ></Popup>

      <CollapsingScroll
        scrollProps={{ contentContainerStyle: { paddingBottom: 16 } }}
        onClickBack={onclickBack}
        showBackButton
        constantTopBackground={() => (
          <Box style={{ width: '100%', height: '100%' }}>
            <LinearGradient
              colors={['rgba(0,0,0,0.6)', 'transparent']}
              start={[0, 1]}
              end={[1, 1]}
              style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 1 }}
            />
            <Image
              style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 0 }}
              source={{
                uri: 'https://www.treehugger.com/thmb/IAlZGVzhRLGZL_E0zSv7qbzyGRA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1273584292-cbcd5f85f4c646d58f7a7fa158dcaaeb.jpg',
              }}
            />
            <LinearGradient
              colors={['rgba(0,0,0,0.5)', 'transparent']}
              start={[1, 1]}
              end={[1, 0]}
              style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 1 }}
            />
          </Box>
        )}
        image={() => (
          <Box style={{ width: '100%', height: '100%' }}>
            <TextFactory style={styles.title} type="h2">
              {'Name '}
            </TextFactory>
          </Box>
        )}
      >
        <Box style={styles.container}>
          <Spacer size={16} />
          <HorizontalUsersSlider data={groupUsers} onPressItem={() => {}} />
        </Box>
      </CollapsingScroll>
      <ActionsFloatingButton
        style={{ position: 'absolute', bottom: 150, end: 50 }}
        actionButtons={[
          {
            id: 0,
            icon: () => <MaterialIcons name="create" size={30} color="#FFFF" />,
            onClick: () => {
              setCurrentVisiblePopup(VisiblePopup.EDIT_GROUP);
            },
          },
          {
            id: 1,
            icon: () => <Ionicons name="add" size={30} color="#FFFF" />,
            onClick: () => {
              setCurrentVisiblePopup(VisiblePopup.ADD_EXPENSE);
            },
          },
        ]}
        animateMainButton
      />
    </Box>
  );
};

export default GroupScreen;
