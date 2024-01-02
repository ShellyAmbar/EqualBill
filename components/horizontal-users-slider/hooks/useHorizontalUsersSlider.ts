import { User } from '@equalbill/stores/user/interfaces';
import { useState } from 'react';

const useHorizontalUsersSlider = ({ data }: { data: User[] }) => {
  const [selectedItemId, setSelectedItemId] = useState(data?.length > 0 ? data[0].id : '0');
  return {
    selectedItemId,
    setSelectedItemId,
  };
};

export default useHorizontalUsersSlider;
