interface User {
  uuid: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

function getUsersByRole(users: User[], role: User['role']): User[] {
  return users.filter(user => user.role === role);
}