import { Group } from '@equalbill/stores/user/interfaces';
import React, { useState } from 'react';
import { StepType, UseGroupGeneratorProps } from './interfaces';

const useGroupGenerator = ({ groupToUpdate }: UseGroupGeneratorProps) => {
  const [currentStep, setCurrentStep] = useState(StepType.DATA);
  const [steps] = useState(4);
  const [group, setGroup] = useState<Group>(groupToUpdate);
  return {
    currentStep,
    setCurrentStep,
    steps,
    group,
    setGroup,
  };
};

export default useGroupGenerator;
