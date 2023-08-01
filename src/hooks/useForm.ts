import { useState } from 'react';

export default function useForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return {
    formData: { email, password },
    setFormData: { setEmail, setPassword },
  };
}
