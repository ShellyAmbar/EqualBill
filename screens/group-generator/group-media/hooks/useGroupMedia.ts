import React, { useState } from 'react';

const useGroupMedia = () => {
  const [image, setImage] = useState(null);
  return {
    image,
    setImage,
  };
};

export default useGroupMedia;
