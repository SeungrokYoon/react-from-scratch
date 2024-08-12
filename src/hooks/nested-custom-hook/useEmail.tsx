import { useState } from 'react';

export default function useEmail() {
  const [email, setEmail] = useState('');

  return { email, setEmail };
}
