"use client";

import { useCartStore } from "@/stores/orderStore";

export default function OrderList() {
  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.getTotalPrice());
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  return (
    <div className="w-100 h-full bg-amber-600 rounded-2xl p-6 overflow-y-auto">
      <div className="grid grid-cols-1 gap-4">
        {items.map((item) => (
          <div key={item._id} className="flex items-center justify-between">
            <div className="w-70 h-32 bg-gray-100 rounded-lg flex items-center justify-center font-bold"></div>
            <div className="flex flex-col gap-2">
              <h3 className="text-black text-center font-bold">{item.name}</h3>
              <p className="text-black text-center font-bold">${item.price}</p>
              <input
                className="text-center ml-2 border-black p-2  rounded-lg w-full  bg-black"
                type="number"
                min="0"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item._id, parseInt(e.target.value) || 0)
                }
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
      <div className="text-black text-center  font-bold py-10">
        Total price: ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
}
