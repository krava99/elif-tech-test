import { Product, Shop } from '../models/shop.js';

export const getShops = async (req, res) => {
  const shops = await Shop.find();
  res.status(200).json(shops);
};

export const getShopById = async (req, res) => {
  const { shopId } = req.params;
  const shop = await Shop.findById(shopId);

  if (!shop) {
    throw new Error(404, 'Shop not found');
  }

  res.status(200).json(shop);
};

export const getProductsByShop = async (req, res) => {
  try {
    const { shopId } = req.params;
    // Шукаємо товари, де поле shopId збігається з ID з URL
    const products = await Product.find({ shopId: shopId });

    if (!products) {
      return res.status(200).json([]); // Краще повернути порожній масив, ніж 404
    }

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching products' });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id).populate('shopId', 'name');
  // populate додасть назву магазину до об'єкта продукту
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
};
