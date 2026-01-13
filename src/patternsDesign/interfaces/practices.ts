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

interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

function createResponse<T>(data: T, status: number): ApiResponse<T> {
  return {
    data,
    status,
    message: status === 200 ? 'Success' : 'Error'
  };
}

interface Point {
  readonly x: number;
  readonly y: number;
}

function distance(p1: Point, p2: Point): number {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}