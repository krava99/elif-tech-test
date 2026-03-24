import { Schema, model } from 'mongoose';

const productSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    category: { type: String, required: true },
    shopId: {
      type: Schema.Types.ObjectId,
      ref: 'shop',
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

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
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Product = model('product', productSchema);
export const Shop = model('shop', shopSchema);
