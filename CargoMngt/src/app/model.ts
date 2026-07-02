export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantityInStock: number;
}

export interface Order {
  id: number;
  customerId: number;
  productId: number;
  quantity: number;
  totalAmount: number;
  status: string;
}

export interface Payment {
  id: number;
  orderId: number;
  amount: number;
  paidAt: string;
  status: string;
}

export interface AuthResponse {
  token: string;
  role: string;
}

export interface UserState {
  username: string;
  role: string;
  token: string;
}
