import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '@equalbill/screens/drawer-screens/profile-screen/profile-screen';
import SettingsScreen from '@equalbill/screens/drawer-screens/settings-screen/settings-screen';
import { DrawerProps } from './interfaces';
import AnimatedWaveBottomTab from '../animated-wave-bottom-tab/animated-wave-bottom-tab';

const Drawer = (props: DrawerProps) => {
  const DrawerNav = createDrawerNavigator();
  return (
    <DrawerNav.Navigator screenOptions={{ headerShown: true }}>
      <DrawerNav.Screen name="home" options={{}} component={AnimatedWaveBottomTab} />
      <DrawerNav.Screen name="Profile" component={ProfileScreen} />
      <DrawerNav.Screen name="Settings" component={SettingsScreen} />
    </DrawerNav.Navigator>
  );
};

export default Drawer;
