import useEmail from './useEmail';
import useName from './useName';

interface FormValues {
  name: string;
  email: string;
}

interface Setter {
  setName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

export default function useNestedHook(): {
  formValues: FormValues;
  setter: Setter;
} {
  const { name, setName } = useName();
  const { email, setEmail } = useEmail();

  return { formValues: { name, email }, setter: { setName, setEmail } };
}
