import useUsers from '@Hook/useUsers';
import UserForm from './UserForm';
import UserList from './UserList';
import ErrorBoundary from '@Component/ErrorBoundary';

export default function UserManagement() {
  const { users, isLoading, error, addUser, deleteUser } = useUsers();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <ErrorBoundary fallback={<div>Error</div>}>
      <div>
        <h1>User Management</h1>
        <UserForm onSubmit={addUser} />
        <UserList users={users} onDeleteUser={deleteUser} />
      </div>
    </ErrorBoundary>
  );
}
