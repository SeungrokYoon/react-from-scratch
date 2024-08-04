interface UserListProps {
  users: {
    id: string;
    firstName: string;
    lastName: string;
  }[];
  onDeleteUser: (id: string) => void;
}

export default function UserList({ users: data, onDeleteUser }: UserListProps) {
  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          <span>
            {user.firstName}&nbsp;{user.lastName}
          </span>
          <button onClick={() => onDeleteUser(user.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
