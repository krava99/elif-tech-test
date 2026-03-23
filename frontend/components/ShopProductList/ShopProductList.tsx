"use client";

import { useQuery } from "@tanstack/react-query";
import { getShops } from "@/lib/shops/shopList-api";
import { Shop } from "@/types/shop";
import { useState } from "react";
import { useCartStore } from "@/stores/orderStore";

interface Props {
  selectedShopId: string | null;
}

export default function ShopProductList({ selectedShopId }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const addToCart = useCartStore((state) => state.addToCart);

  const { data: shops, isLoading } = useQuery<Shop[]>({
    queryKey: ["shops"],
    queryFn: getShops,
  });

  const currentShop = shops?.find((shop) => shop._id === selectedShopId);

  const filteredProducts = selectedCategory
    ? currentShop?.categories.find(
        (category) => category.name === selectedCategory,
      )?.products || []
    : currentShop?.categories.flatMap((category) => category.products) || [];

  if (isLoading) return <div className="flex-1 p-10">Loading...</div>;

  if (!selectedShopId) {
    return (
      <div className="flex-1 flex items-center justify-center border-2 border-amber-600 rounded-2xl text-amber-600">
        <p className="text-xl">Select a shop to view its menu</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col gap-6">
      <div className="flex gap-3 pb-2">
        <button
          onClick={() => setSelectedCategory(null)}
          className="px-4 py-2 rounded-full text-black bg-amber-600  cursor-pointer"
        >
          All
        </button>
        {currentShop?.categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setSelectedCategory(cat.name)}
            className="px-4 py-2 rounded-full bg-amber-600 text-black cursor-pointer"
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4"></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="border p-4 rounded-xl text-black bg-amber-600 shadow-sm flex flex-col gap-3"
            >
              <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center text-gray-300 font-bold"></div>
              <h3 className="font-bold">{product.name}</h3>
              <p className="text-black font-bold">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-auto w-full py-2 text-amber-600 bg-black rounded-lg "
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
