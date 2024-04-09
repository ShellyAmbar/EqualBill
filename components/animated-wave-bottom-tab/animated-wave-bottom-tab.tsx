import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomBottomTab from './tab/tab';
import HomeScreen from '@equalbill/screens/home-screen/home-screen';
import InsitesScreen from '@equalbill/screens/Insites-screen/Insites-screen';
import ActivityScreen from '@equalbill/screens/activity-screen/activity-screen';
import useDrawerHeader from '../drawer/hooks/useDrawerHeader';
import ProfileScreen from '@equalbill/screens/drawer-screens/profile-screen/profile-screen';

const Tab = createBottomTabNavigator();

const AnimatedWaveBottomTab = () => {
  const {} = useDrawerHeader();
  return (
    <Tab.Navigator initialRouteName="Home" tabBar={props => <CustomBottomTab {...props} />}>
      <Tab.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen options={{ tabBarLabel: 'Home' }} name="Home" component={HomeScreen} />
        <Tab.Screen options={{ tabBarLabel: 'Insites' }} name="Insites" component={InsitesScreen} />
        <Tab.Screen options={{ tabBarLabel: 'Activity' }} name="Activity" component={ActivityScreen} />
        {/* <Tab.Screen options={{ tabBarLabel: 'profile' }} name="Profile" component={ProfileScreen} /> */}
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default AnimatedWaveBottomTab;
