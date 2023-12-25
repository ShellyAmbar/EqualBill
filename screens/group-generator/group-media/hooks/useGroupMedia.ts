import React, { useState } from 'react';
import UseGroupMediaProps from './interfaces';

const useGroupMedia = ({ imageUri }: UseGroupMediaProps) => {
  const [image, setImage] = useState(imageUri ?? null);
  return {
    image,
    setImage,
  };
};

export default useGroupMedia;
