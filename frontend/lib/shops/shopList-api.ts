import { nextApi } from "../api";

export const getShops = async () => {
  const res = await nextApi.get("/shops");
  return res.data;
};

export const getProducts = async (data: { _id: string }) => {
  const res = await nextApi.get(`/shops/${data._id}/products`);
  return res.data;
};
