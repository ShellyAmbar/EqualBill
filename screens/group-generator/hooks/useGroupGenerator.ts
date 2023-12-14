import React, { useState } from 'react';

const useGroupGenerator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [steps] = useState(3);
  return {
    currentStep,
    setCurrentStep,
    steps,
  };
};

export default useGroupGenerator;
