import { Schema, model } from 'mongoose';

const productSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    category: { type: String, required: true }, // Категорія тепер просто рядок (або ID)
    shopId: {
      type: Schema.Types.ObjectId,
      ref: 'shop',
      required: true,
    }, // Зв'язок із магазином
  },
  { timestamps: true, versionKey: false },
);

export const Product = model('product', productSchema);

// 2. Схема для категорії, яка містить масив товарів
const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  products: [productSchema], // Вкладений масив товарів
});

// 3. Основна схема магазину
const shopSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    categories: [categorySchema], // Вкладений масив категорій
  },
  {
    timestamps: true, // Автоматично додає createdAt та updatedAt
    versionKey: false, // Прибирає поле __v, яке додає MongoDB
  },
);

export const Shop = model('shop', shopSchema);
