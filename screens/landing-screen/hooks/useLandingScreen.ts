import React, { useEffect, useRef, useState } from 'react';

const useLandingScreen = ({ navigation }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      videoRef.current?.playAsync();
    });

    return unsubscribe;
  }, [navigation]);

  return { videoRef };
};

export default useLandingScreen;
