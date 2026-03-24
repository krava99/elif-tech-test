import createError from 'http-errors';
import { Product } from '../models/shop.js';

export const createProduct = async (req, res, next) => {
  try {
    const { name, price, category, shopId } = req.body;

    // Валідація: замість manual res.status(400) викидаємо HttpError
    if (!name || !price || !category || !shopId) {
      throw createError(
        400,
        'All fields are required: name, price, category, shopId',
      );
    }

    const newProduct = await Product.create({
      name,
      price,
      category,
      shopId,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};
