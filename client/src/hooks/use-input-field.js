import { useCallback, useEffect, useState } from 'react';

export const useInputField = ({ min = 1 } = {}) => {
  const [value, setValue] = useState();
  const [isValid, setIsValid] = useState(false);

  const onInput = useCallback((e) => {
    const { value } = e.target;
    setValue(value);
  }, []);

  useEffect(() => {
    setIsValid(value && value.length >= min);
  }, [min, value]);

  return [onInput, { value, isValid }];
};
