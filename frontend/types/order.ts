export interface OrderItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface OrderData {
  user: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  shopId: string;
  items: OrderItem[];
  totalPrice: number;
}
