"use client";

import { useCartStore } from "@/stores/orderStore";

export default function OrderList() {
  const items = useCartStore((state) => state.items);
  const totalPrice = useCartStore((state) => state.getTotalPrice());
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  return (
    <div className="w-full h-full bg-amber-600 rounded-2xl p-4 md:p-6 ">
      <div className="grid grid-cols-1 gap-6">
        {items.map((item) => (
          <div
            key={item._id}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-black pb-4 "
          >
            <div className="w-full sm:w-40 lg:w-48 h-32 bg-gray-100 rounded-lg flex items-center justify-center "></div>

            <div className="flex flex-col flex-1 gap-2 w-full sm:w-auto text-center sm:text-left">
              <h3 className="text-black  text-lg">{item.name}</h3>
              <p className="text-black  text-xl">${item.price}</p>

              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-black font-medium">Amount:</span>
                <input
                  className="text-center border-black p-2 rounded-lg w-20 bg-black text-amber-600 "
                  type="number"
                  min="0"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item._id, parseInt(e.target.value) || 0)
                  }
                />
              </div>
            </div>
          </div>
        ))}

        {items.length === 0 && (
          <p className="text-black text-center py-10">Your cart is empty</p>
        )}
      </div>

      <div className="text-black text-center sm:text-right font-bold py-10 text-2xl mt-4">
        Total price: ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
}
