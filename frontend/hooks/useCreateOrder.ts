import { createOrder } from "@/lib/orders/order-api";
import { useCartStore } from "@/stores/orderStore";
import { OrderData} from "@/types/order";
import { OrderSchemaType } from "@/utils/orderSchema";

export const useCreateOrder = () => {
  const { items, getTotalPrice, clearCart } = useCartStore();

  const handleCreateOrder = async (formData: OrderSchemaType) => {
    if (!items.length) throw new Error("Cart is empty");

    const fullOrder: OrderData = {
      user: { ...formData },
      shopId: items[0].shopId,
      items: items.map(({ _id, name, price, quantity }) => ({
        _id,
        name,
        price,
        quantity,
      })),
      totalPrice: getTotalPrice(),
    };

    const result = await createOrder(fullOrder);
    clearCart();

    return result;
  };

  return { handleCreateOrder };
};
