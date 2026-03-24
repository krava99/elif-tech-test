import { nextApi } from "../api";

export const getShops = async () => {
  const res = await nextApi.get("/shops");

  return res.data;
};

export const getProductsByShop = async (shopId: string) => {
  const res = await nextApi.get(`/shops/${shopId}/products`);
  return res.data;
};
