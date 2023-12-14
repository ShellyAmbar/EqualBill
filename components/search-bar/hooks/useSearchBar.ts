import { View, Text } from 'react-native';
import React, { useState } from 'react';

const useSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return {
    searchTerm,
    setSearchTerm,
  };
};

export default useSearchBar;
