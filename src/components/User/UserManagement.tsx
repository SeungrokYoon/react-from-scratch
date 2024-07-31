import useUsers from '@Hook/useUsers';
import { useState } from 'react';

export default function UserManagement() {
  const { users, isLoading, error, addUser, deleteUser } = useUsers();
  const [newUserName, setNewUserName] = useState({
    firstName: '',
    lastName: '',
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div>
      <h1>User Management</h1>
      <input
        type="text"
        name=""
        id=""
        value={newUserName.firstName}
        onChange={(e) => {
          setNewUserName((prev) => ({ ...prev, firstName: e.target.value }));
        }}
        placeholder="Enter first name"
      />
      <input
        type="text"
        name=""
        id=""
        value={newUserName.lastName}
        onChange={(e) => {
          setNewUserName((prev) => ({ ...prev, lastName: e.target.value }));
        }}
        placeholder="Enter last name"
      />
      <button
        onClick={() => {
          addUser(newUserName);
          setNewUserName({ firstName: '', lastName: '' });
        }}
      >
        Add User
      </button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>
              {user.firstName}&nbsp;{user.lastName}
            </span>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
