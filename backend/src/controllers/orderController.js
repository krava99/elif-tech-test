import createError from 'http-errors';
import { Order } from '../models/order.js';

export const createOrder = async (req, res, next) => {
  try {
    const { user, items, totalPrice, shopId } = req.body;
    if (!items || items.length === 0) {
      throw createError(400, 'Cart is empty. Cannot create an order.');
    }

    const order = await Order.create({
      user,
      shopId,
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
    if (!email) {
      throw createError(400, 'Email is required.');
    }

    const filter = { 'user.email': email };
    const orders = await Order.find(filter);

    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};
