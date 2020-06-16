import { useState, useEffect } from 'react';

const setStorage = (key, value) => window.localStorage.setItem(key, value);

const getStorage = key => window.localStorage.getItem(key);

export const useLocalStorage = (key, defaultValue = 0) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const stickyValue = getStorage(key);

    if (stickyValue !== null) {
      setValue(JSON.parse(stickyValue));
    }
  }, [key]);

  useEffect(() => {
    setStorage(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
