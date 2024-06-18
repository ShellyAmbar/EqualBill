import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';

const useAuthScreen = () => {
  const isFocused = useIsFocused();
  const videoRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [numOfSteps, setNumOfSteps] = useState(3);
  useEffect(() => {
    videoRef.current?.playAsync();
  }, [isFocused]);

  return { videoRef, isFocused, currentStep, numOfSteps };
};

export default useAuthScreen;
