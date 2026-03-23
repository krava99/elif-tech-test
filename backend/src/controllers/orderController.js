import { Order } from '../models/order.js';

export const createOrder = async (req, res) => {
  const order = await Order.create(req.body);
  res.status(201).json(order);
};

export const getOrders = async (req, res) => {
  const { email } = req.query;
  const filter = email ? { 'user.email': email } : {};

  const orders = await Order.find(filter);

  if (!orders.length) {
    throw new Error(404, 'Shop not found');
  }
  res.status(200).json(orders);
};
