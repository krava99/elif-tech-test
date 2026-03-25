import { nextApi } from "../api";
import { OrderData } from "@/types/order";

export const createOrder = async (orderData: OrderData) => {
  const { data } = await nextApi.post("/orders", orderData);
  return data;
};

export const getOrdersByEmail = async (email: string) => {
  const { data } = await nextApi.get(`/orders?email=${email}`);
  return data;
};
