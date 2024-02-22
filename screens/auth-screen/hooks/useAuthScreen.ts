import React, { useEffect, useRef, useState } from 'react';
import { STEP } from './interfaces';

const useAuthScreen = () => {
  const [currentStep, setcurrentStep] = useState(STEP.LANDING);
  const videoRef = useRef(null);
  useEffect(() => {
    videoRef.current?.playAsync();
  }, []);

  return { currentStep, videoRef };
};

export default useAuthScreen;
