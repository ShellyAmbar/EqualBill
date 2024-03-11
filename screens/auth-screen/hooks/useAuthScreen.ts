import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';

const useAuthScreen = () => {
  const isFocused = useIsFocused();
  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current?.playAsync();
  }, [isFocused]);

  return { videoRef, isFocused };
};

export default useAuthScreen;
