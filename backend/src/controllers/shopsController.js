import createError from 'http-errors';
import { Product, Shop } from '../models/shop.js';

export const getShops = async (req, res, next) => {
  try {
    const shops = await Shop.find();
    res.status(200).json(shops);
  } catch (error) {
    next(error);
  }
};

export const getProductsByShop = async (req, res, next) => {
  try {
    const { shopId } = req.params;
    if (!shopId || shopId === 'undefined') {
      throw createError(400, 'Valid Shop ID is required');
    }

    const products = await Product.find({ shopId });
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      throw createError(404, 'Product not found');
    }

    res.json(product);
  } catch (error) {
    next(error);
  }
};
