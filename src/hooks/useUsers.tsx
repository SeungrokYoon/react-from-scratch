import { useState, useEffect } from 'react';

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

export default function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
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
        setUsers(data.users);
        setIsLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch users');
        setIsLoading(false);
      });
  };

  const addUser = async ({ firstName, lastName }: Omit<User, 'id'>) => {
    if (firstName.trim() && lastName.trim()) {
      const newUser = { firstName, lastName };
      const res = await fetch(`https://dummyjson.com/users/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });
      const body = await res.json();
      setUsers([...users, body]);
    }
  };

  const deleteUser = (userId: string) => {
    setUsers(users.filter((user) => user.id !== userId));

    fetch(`https://dummyjson.com/users/${userId}`, {
      method: 'DELETE',
    });
  };
  return { users, isLoading, error, addUser, deleteUser };
}
