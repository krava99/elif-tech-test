import { Shop } from '../models/shop.js';

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
