export interface Product {
  _id: string;
  name: string;
  price: number;
  category: string;
  shopId: string;
}

export interface Category {
  _id: string;
  name: string;
  products: Product[];
}

export interface Shop {
  _id: string;
  name: string;
  rating: number;
}
