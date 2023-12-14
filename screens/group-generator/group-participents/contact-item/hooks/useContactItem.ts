import React, { useState } from 'react';

const useContactItem = () => {
  const [isChecked, setIsChecked] = useState(false);
  return {
    isChecked,
    setIsChecked,
  };
};

export default useContactItem;
