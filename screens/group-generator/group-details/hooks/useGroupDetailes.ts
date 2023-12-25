import React, { useState } from 'react';
import { GroupDetailes } from '../interfaces';

const useGroupDetailes = (data?: GroupDetailes) => {
  const [groupName, setGroupName] = useState(data?.name ?? '');
  const [groupDescription, setGroupDescription] = useState(data?.description ?? '');
  return {
    groupName,
    setGroupName,
    groupDescription,
    setGroupDescription,
  };
};

export default useGroupDetailes;
