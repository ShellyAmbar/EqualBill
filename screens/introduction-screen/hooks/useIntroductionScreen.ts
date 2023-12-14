import { View, Text } from 'react-native';
import React, { useState } from 'react';

const useIntroductionScreen = () => {
  const [data, setData] = useState([
    {
      id: 0,
      title: 'Let us calculate',
      subTitle: 'All you need to do is to enter your expenses',
      lottie: require('@equalbill/assets/lotties/1.json'),
    },
    {
      id: 1,
      title: 'Save money and share equal bills',
      subTitle: 'Every group member will spand an equal amount',
      lottie: require('@equalbill/assets/lotties/2.json'),
    },
    {
      id: 2,
      title: 'Exschange money with your group members',
      subTitle: 'We will give you the correct transactions for every group member',
      lottie: require('@equalbill/assets/lotties/3.json'),
    },
    {
      id: 3,
      title: 'Get your insites in one place',
      subTitle: 'We will calculate your total insites and for every group',
      lottie: require('@equalbill/assets/lotties/4.json'),
    },
  ]);
  return {
    data,
  };
};

export default useIntroductionScreen;
