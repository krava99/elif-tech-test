"use client";

import { useQuery } from "@tanstack/react-query";
import { getShops, getProductsByShop } from "@/lib/shops/shopList-api"; // Імпортуємо нову функцію
import { useState } from "react";
import { useCartStore } from "@/stores/orderStore";

interface Props {
  selectedShopId: string | null;
}

export default function ShopProductList({ selectedShopId }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const addToCart = useCartStore((state) => state.addToCart);

  // 1. Отримуємо список магазинів (для назв категорій та інфо)
  const { data: shops } = useQuery({
    queryKey: ["shops"],
    queryFn: getShops,
  });

  // 2. Отримуємо продукти ЛИШЕ для вибраного магазину
  const { data: products, isLoading: isProductsLoading } = useQuery({
    queryKey: ["products", selectedShopId],
    queryFn: () => getProductsByShop(selectedShopId!),
    enabled: !!selectedShopId && selectedShopId !== "undefined",
  });

  // Знаходимо поточний магазин, щоб витягнути список унікальних категорій
  // (Або можна просто витягнути унікальні категорії з самих продуктів)
  const categories = products
    ? Array.from(new Set(products.map((p: any) => p.category)))
    : [];

  // Фільтрація продуктів за категорією
  const filteredProducts = selectedCategory
    ? products?.filter((product: any) => product.category === selectedCategory)
    : products;

  if (isProductsLoading)
    return <div className="flex-1 p-10">Loading products...</div>;

  if (!selectedShopId) {
    return (
      <div className="flex-1 flex items-center justify-center border-2 border-amber-600 rounded-2xl text-amber-600">
        <p className="text-xl">Select a shop to view its menu</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col gap-6">
      {/* Категорії */}
      <div className="flex gap-3 pb-2 overflow-x-auto">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full cursor-pointer ${!selectedCategory ? "bg-black text-amber-600" : "bg-amber-600 text-black"}`}
        >
          All
        </button>
        {categories.map((catName: any) => (
          <button
            key={catName}
            onClick={() => setSelectedCategory(catName)}
            className={`px-4 py-2 rounded-full cursor-pointer ${selectedCategory === catName ? "bg-black text-amber-600" : "bg-amber-600 text-black"}`}
          >
            {catName}
          </button>
        ))}
      </div>

      {/* Список продуктів */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts?.map((product: any) => (
          <div
            key={product._id} // ТУТ ТЕПЕР ВЛАСНИЙ ID ПРОДУКТУ
            className="border p-4 rounded-xl text-black bg-amber-600 shadow-sm flex flex-col gap-3"
          >
            <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center text-gray-300 font-bold">
              {/* Сюди можна додати Image */}
            </div>
            <h3 className="font-bold">{product.name}</h3>
            <p className="text-black font-bold">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-auto w-full py-2 text-amber-600 bg-black rounded-lg hover:opacity-80 transition-opacity"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
