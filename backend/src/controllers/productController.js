import { Product } from '../models/shop.js';

export const createProduct = async (req, res) => {
  try {
    const { name, price, category, shopId } = req.body;

    // Валідація: перевіряємо чи всі поля є
    if (!name || !price || !category || !shopId) {
      return res.status(400).json({
        message: 'All fields are required: name, price, category, shopId',
      });
    }

    const newProduct = await Product.create({
      name,
      price,
      category,
      shopId,
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating product' });
  }
};
