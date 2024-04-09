import { View, Text, TouchableOpacity, Image, Pressable } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const useDrawerHeader = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image
            source={require('@equalbill/assets/images/person.png')}
            style={{ width: 40, height: 40, borderRadius: 100, backgroundColor: 'white', zIndex: 100 }}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  return <></>;
};

export default useDrawerHeader;
