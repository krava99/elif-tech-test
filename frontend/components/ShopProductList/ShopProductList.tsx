"use client";

import { useQuery } from "@tanstack/react-query";
import { getProductsByShop } from "@/lib/shops/shopList-api";
import { useState } from "react";
import { useCartStore } from "@/stores/orderStore";
import { Product } from "@/types/shop";

interface Props {
  selectedShopId: string | null;
}

export default function ShopProductList({ selectedShopId }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const addToCart = useCartStore((state) => state.addToCart);
  const categories = ["Burgers", "Drinks", "Desserts"];
  const [sortSelected, setSortSelected] = useState("name-asc");

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["products", selectedShopId],
    queryFn: () => getProductsByShop(selectedShopId!),
    enabled: !!selectedShopId && selectedShopId !== "undefined",
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
  });

  const filteredProducts = selectedCategory
    ? products?.filter((product) => product.category === selectedCategory)
    : products;

  const sorted = [...(filteredProducts || [])].sort((a, b) => {
    if (sortSelected === "name-asc") return a.name.localeCompare(b.name);
    if (sortSelected === "name-desc") return b.name.localeCompare(a.name);
    if (sortSelected === "price-asc") return a.price - b.price;
    if (sortSelected === "price-desc") return b.price - a.price;
    return 0;
  });

  if (isLoading) return <div className="flex-1 p-10">Loading products...</div>;

  if (!selectedShopId) {
    return (
      <div className="flex-1 flex items-center justify-center border-2 border-amber-600 rounded-2xl text-amber-600">
        <p className="text-xl">Select a shop to view its menu</p>
      </div>
    );
  }
  if (!sorted) return null;

  return (
    <div className="flex-1 flex flex-col gap-6">
      {categories.length > 0 && (
        <div className="flex  gap-2 sm:gap-3 pb-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full cursor-pointer transition-colors ${
              !selectedCategory
                ? "bg-black text-amber-600"
                : "bg-amber-600 text-black"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full cursor-pointer transition-colors ${
                selectedCategory === category
                  ? "bg-black text-amber-600"
                  : "bg-amber-600 text-black"
              }`}
            >
              {category}
            </button>
          ))}
          <div className="flex-end ml-auto rounded-full bg-amber-600 text-black px-4 py-2">
            <select
              className="border-none bg-transparent cursor-pointer focus:outline-none"
              name="sort"
              id="sort"
              onChange={(e) => setSortSelected(e.target.value)}
            >
              <option value="name-asc">Name A-Z</option>
              <option value="name-desc">Name Z-A</option>
              <option value="price-asc">Price Low to High</option>
              <option value="price-desc">Price High to Low</option>
            </select>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {sorted.map((product) => (
          <div
            key={product._id}
            className="border p-4 rounded-xl text-black bg-amber-600 shadow-sm flex flex-col gap-3 "
          >
            <div className="h-32 md:h-40 bg-gray-100 rounded-lg flex items-center justify-center text-gray-300 font-bold">
              Image
            </div>
            <h3 className="font-bold " title={product.name}>
              {product.name}
            </h3>
            <p className="text-black font-bold text-lg">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-auto w-full py-3 md:py-2 text-amber-600 bg-black rounded-lg cursor-pointer active:bg-amber-800 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
