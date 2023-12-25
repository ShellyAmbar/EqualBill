import { Group } from '@equalbill/stores/user/interfaces';
import React, { useState } from 'react';
import { StepType, UseGroupGeneratorProps } from './interfaces';
import { useNavigation } from '@react-navigation/native';
import userStore from '@equalbill/stores/user/user-store';

const useGroupGenerator = ({ groupToUpdate }: UseGroupGeneratorProps) => {
  const [currentStep, setCurrentStep] = useState(StepType.DATA);
  const [isUpdate] = useState(groupToUpdate ? true : false);
  const [steps] = useState(4);
  const [group, setGroup] = useState<Group>(
    groupToUpdate ? groupToUpdate : { name: '', description: '', id: '0', url: '', users: [], admin_id: userStore.user.id, expenses: [] },
  );
  return {
    currentStep,
    setCurrentStep,
    steps,
    group,
    setGroup,
    isUpdate,
  };
};

export default useGroupGenerator;
