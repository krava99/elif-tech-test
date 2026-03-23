"use client";

import { useCartStore } from "@/stores/orderStore";

export default function OrderList() {
  const items = useCartStore((state) => state.items);
  return (
    <div className="flex-1 h-full bg-amber-600 rounded-2xl p-6 ">
      <div className="grid grid-cols-1 gap-4">
        <div className="flex  gap-2">
          <div className="w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center  font-bold"></div>
          <h3 className="font-bold">Назва</h3>
          <p className="text-black font-bold">Ціна</p>
        </div>
        <div className="">
          <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center text-gray-300 font-bold"></div>
          <h3 className="font-bold">Назва</h3>
          <p className="text-black font-bold">Ціна</p>
        </div>
      </div>
    </div>
  );
}
