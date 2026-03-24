"use client";

import { useCartStore } from "@/stores/orderStore";

export default function OrderList() {
  const items = useCartStore((state) => state.items);

  return (
    <div className="w-100 h-full bg-amber-600 rounded-2xl p-6 overflow-y-auto">
      <div className="grid grid-cols-1 gap-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="w-70 h-32 bg-gray-100 rounded-lg flex items-center justify-center font-bold"></div>
            <div className="flex flex-col gap-2">
              <h3 className="text-black text-center font-bold">{item.name}</h3>
              <p className="text-black text-center font-bold">${item.price}</p>
              <input
                className="border-black text-center border p-2 rounded-lg w-full mt-2 active:outline-none focus:outline-none bg-white"
                type="number"
                min="1"
                value={item.quantity}
                readOnly
              />
            </div>
          </div>
        ))}

        {items.length === 0 && (
          <p className="text-black text-center font-bold py-10">
            Your cart is empty
          </p>
        )}
      </div>
    </div>
  );
}
