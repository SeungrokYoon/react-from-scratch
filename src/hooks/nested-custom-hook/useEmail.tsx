import { useState } from 'react';

export default function useEmail() {
  console.log('useEmail rerender');
  const [email, setEmail] = useState('');

  return { email, setEmail };
}
