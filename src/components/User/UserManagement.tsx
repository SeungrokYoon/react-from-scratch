import useUsers from '@Hook/useUsers';
import UserForm from './UserForm';

export default function UserManagement() {
  const { users, isLoading, error, addUser, deleteUser } = useUsers();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div>
      <h1>User Management</h1>
      <UserForm onSubmit={addUser} />
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
