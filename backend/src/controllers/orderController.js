import { Order } from '../models/order.js';

export const createOrder = async (req, res, next) => {
  try {
    const { user, items, totalPrice } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    const order = await Order.create({
      user,
      items,
      totalPrice,
    });

    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};

export const getOrders = async (req, res, next) => {
  try {
    const { email } = req.query;
    const filter = email ? { 'user.email': email } : {};
    const orders = await Order.find(filter);

    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};
