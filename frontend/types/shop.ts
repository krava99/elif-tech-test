export interface Product {
  _id: string;
  name: string;
  price: number;
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
  categories: Category[];
}
