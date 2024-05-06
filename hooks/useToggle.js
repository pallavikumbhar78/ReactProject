import React, {useState} from 'react';

export const useToggle = () => {
  const [value, setValue] = useState();

  const Toggle = () => {
    setValue(!value);
  };
  return [value, Toggle];
};
