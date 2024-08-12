import { useState } from 'react';

export default function useName() {
  const [name, setName] = useState('');

  return { name, setName };
}
