export interface Product {
  _id: string; // Тепер він приходить від MongoDB автоматично
  name: string;
  price: number;
  category: string; // Раніше це був об'єкт-обгортка, тепер — поле
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
  // Поля categories тут більше НЕМАЄ,
  // бо ми отримуємо продукти окремим запитом
}
