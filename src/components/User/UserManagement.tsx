import { useEffect, useState } from 'react';

interface User {
  id: string;
  name: string;
}

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [newUserName, setNewUserName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    setIsLoading(true);
    setError(null);

    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch users');
        setIsLoading(false);
      });
  };

  const handleAddUser = () => {
    if (newUserName.trim()) {
      const newUser = { id: Date.now(), name: newUserName };
      fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });
      setNewUserName('');
    }
  };

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter((user) => user.id !== userId));

    fetch(`https://dummyjson.com/users/${userId}`, {
      method: 'DELETE',
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div>
      <h1>User Management</h1>
      <input
        type="text"
        name=""
        id=""
        value={newUserName}
        onChange={(e) => {
          setNewUserName(e.target.value);
        }}
        placeholder="Enter new user name"
      />
      <button onClick={handleAddUser}>Add User</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
