import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { STEP } from './interfaces';

const useAuthScreen = () => {
  const isFocused = useIsFocused();
  const videoRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(STEP.FULLNAME);
  const [numOfSteps, setNumOfSteps] = useState(4);
  useEffect(() => {
    videoRef.current?.playAsync();
  }, [isFocused]);

  return { videoRef, isFocused, currentStep, numOfSteps };
};

export default useAuthScreen;
