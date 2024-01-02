import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/splash-screen/splash-screen';
import AuthScreen from '../screens/auth-screen/auth-screen';
import MainScreen from '@equalbill/screens/main-screen/main-screen';
import IntroductionScreen from '@equalbill/screens/introduction-screen/introduction-screen';
import GroupScreen from '@equalbill/screens/group-screen/group-screen';
import GroupGenerator from '@equalbill/screens/group-generator/group-generator';
import GroupsScreen from '@equalbill/screens/groups-screen/groups-screen';

const MainStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Introduction" component={IntroductionScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Auth" component={AuthScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Group" component={GroupScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Groups" component={GroupsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="GroupGenerator" component={GroupGenerator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default MainStack;
