"use client";

import { getShops } from "@/lib/shops/shopList-api";
import { Shop } from "@/types/shop";
import { useEffect, useState } from "react";

export default function ShopSidebar() {
  const [shops, setShops] = useState<Shop[]>([]);
  useEffect(() => {
    const fetchShops = async () => {
      try {
        const data = await getShops();

        setShops(data);
      } catch (error) {
        console.error("Error fetching shops:", error);
      }
    };
    fetchShops();
  }, []);

  return (
    <div className="w-64 rounded-2xl  bg-amber-600 h-75 flex flex-col gap-2 p-4">
      <h2 className="text-xl font-bold text-black text-center">Shops:</h2>
      {shops.map((shop) => (
        <button
          key={shop._id}
          className="flex p-3 min-w-55 border border-black justify-center rounded hover:bg-amber-800 cursor-pointer"
        >
          {shop.name}
        </button>
      ))}
    </div>
  );
}
