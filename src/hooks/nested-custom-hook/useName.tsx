import { useState } from 'react';

export default function useName() {
  console.log('useName rerender');
  const [name, setName] = useState('');

  return { name, setName };
}
