import { useState } from 'react';

export const useInput = (init?: any) => {
  const [list, setList] = useState({ ...init });
  const onChange = (event: any) => {
    const { name, value } = event.target;
    setList({ ...list, [name]: value });
  };

  return { list, onChange };
};
