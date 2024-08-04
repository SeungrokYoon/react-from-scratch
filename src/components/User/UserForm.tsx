import { FormEvent, useState } from 'react';

interface UserFormProps {
  onSubmit: (userInfo: { firstName: string; lastName: string }) => void;
}

export default function UserForm({ onSubmit }: UserFormProps) {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(userInfo);
    setUserInfo({ firstName: '', lastName: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name=""
        id=""
        value={userInfo.firstName}
        onChange={(e) => {
          setUserInfo((prev) => ({ ...prev, firstName: e.target.value }));
        }}
        placeholder="Enter first name"
      />
      <input
        type="text"
        name=""
        id=""
        value={userInfo.lastName}
        onChange={(e) => {
          setUserInfo((prev) => ({ ...prev, lastName: e.target.value }));
        }}
        placeholder="Enter last name"
      />
      <button type="submit">Add User</button>
    </form>
  );
}
