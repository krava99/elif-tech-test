import { Schema, model } from 'mongoose';

const orderSchema = new Schema(
  {
    user: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      address: { type: String, required: true },
    },
    shopId: {
      type: Schema.Types.ObjectId,
      ref: 'shop',
      required: true,
    },
    items: [
      {
        productId: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, // Це автоматично додасть дату замовлення (createdAt)
    versionKey: false,
  },
);

export const Order = model('order', orderSchema);
