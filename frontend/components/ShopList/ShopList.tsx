"use client";

import { useQuery } from "@tanstack/react-query";
import { getShops } from "@/lib/shops/shopList-api";
import { Shop } from "@/types/shop";

interface Props {
  onSelectShop: (id: string) => void;
}

export default function ShopList({ onSelectShop }: Props) {
  const {
    data: shops,
    isLoading,
    isError,
    error,
  } = useQuery<Shop[]>({
    queryKey: ["shops"],
    queryFn: getShops,
  });

  if (isLoading) return <div className="w-64 p-4 text-center">Loading...</div>;

  if (isError) {
    return (
      <div className="w-64 p-4 text-red-500 text-center">
        Error: {(error as Error).message}
      </div>
    );
  }
  if (!shops) return null;

  return (
    <div className="w-full md:w-64 rounded-2xl bg-amber-600 flex flex-col gap-2 p-4">
      <h2 className="text-xl font-bold text-black text-center mb-2">Shops:</h2>
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-col gap-2">
        {shops.map((shop) => (
          <button
            key={shop._id}
            onClick={() => onSelectShop(shop._id)}
            className="flex p-3 w-full border border-black text-amber-600 justify-center rounded-lg bg-black hover:bg-amber-800 cursor-pointer transition-colors"
          >
            {shop.name}
          </button>
        ))}
      </div>
    </div>
  );
}
