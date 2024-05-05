import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import TabBar from './tab-bar/tab-bar';
import HomeScreen from '@equalbill/screens/home-screen/home-screen';
import InsitesScreen from '@equalbill/screens/Insites-screen/Insites-screen';
import ActivityScreen from '@equalbill/screens/activity-screen/activity-screen';
import useDrawerHeader from '../drawer/hooks/useDrawerHeader';
import ProfileScreen from '@equalbill/screens/drawer-screens/profile-screen/profile-screen';
import { Text, View } from 'react-native';
import TabBar from 'rn-animated-wave-bottom-navigation';

const Tab = createBottomTabNavigator();

const AnimatedWaveBottomTab = () => {
  const {} = useDrawerHeader();
  return (
    <Tab.Navigator initialRouteName="Home" tabBar={props => <TabBar {...props} numOfTabs={3} icons={['home', 'shopping-bag', 'star']} />}>
      <Tab.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen options={{ tabBarLabel: 'Home' }} name="home" component={HomeScreen} />
        <Tab.Screen options={{ tabBarLabel: 'Insites' }} name="Insites" component={InsitesScreen} />
        <Tab.Screen options={{ tabBarLabel: 'Activity' }} name="Activity" component={ActivityScreen} />
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default AnimatedWaveBottomTab;
