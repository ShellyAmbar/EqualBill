import { Group } from '@equalbill/stores/user/interfaces';
import React, { useState } from 'react';
import { StepType } from './interfaces';

const useGroupGenerator = () => {
  const [currentStep, setCurrentStep] = useState(StepType.DATA);
  const [steps] = useState(4);
  const [group, setGroup] = useState<Group>({ name: '', description: '', id: '0', url: '', users_ids: [], admin_id: '', expenses: [] });
  return {
    currentStep,
    setCurrentStep,
    steps,
    group,
    setGroup,
  };
};

export default useGroupGenerator;
