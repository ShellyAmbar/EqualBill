import React, { useEffect, useRef, useState } from 'react';

const useLandingScreen = ({ navigation }) => {
  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current?.playAsync();
  }, []);

  useEffect(() => {
    videoRef.current?.playAsync();
  }, [navigation]);

  return { videoRef };
};

export default useLandingScreen;
