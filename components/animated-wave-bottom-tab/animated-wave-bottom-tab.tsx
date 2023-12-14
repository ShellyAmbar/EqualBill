import React from 'react';
import Styles from './animated-wave-bottom-tab.styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@equalbill/screens/home-screen/home-screen';
import ProfileScreen from '@equalbill/screens/profile-screen/profile-screen';
import CustomBottomTab from './tab/tab';
import InsitesScreen from '@equalbill/screens/Insites-screen/Insites-screen';
import ActivityScreen from '@equalbill/screens/activity-screen/activity-screen';

const Tab = createBottomTabNavigator();

const AnimatedWaveBottomTab = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomBottomTab {...props} />}>
      <Tab.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen options={{ tabBarLabel: 'Home' }} name="Home" component={HomeScreen} />
        <Tab.Screen options={{ tabBarLabel: 'Insites' }} name="Insites" component={InsitesScreen} />
        <Tab.Screen options={{ tabBarLabel: 'Activity' }} name="Activity" component={ActivityScreen} />
        <Tab.Screen options={{ tabBarLabel: 'Profile' }} name="Profile" component={ProfileScreen} />
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default AnimatedWaveBottomTab;
