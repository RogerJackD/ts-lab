interface User {
  uuid: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

function getUsersByRole(users: User[], role: User['role']): User[] {
  return users.filter(user => user.role === role);
}

interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

function calculateTotal(items: CartItem[]): number {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
}