import Header from "@/components/Header/Header";
import OrderInfo from "@/components/OrderInfo/OrderInfo";
import OrderList from "@/components/OrderList/OrderList";

export default function OrdersPage() {
  return (
    <>
      <Header />
      <div className="flex-1 flex gap-10 p-10 w-full">
        <OrderInfo />
        <OrderList />
      </div>
    </>
  );
}
