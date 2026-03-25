import Header from "@/components/Header/Header";
import OrderInfo from "@/components/OrderInfo/OrderInfo";
import OrderList from "@/components/OrderList/OrderList";

export default function OrdersPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 p-4 md:p-10 w-full max-w-7xl mx-auto">
        <div className="w-full lg:w-1/2 ">
          <OrderInfo />
        </div>
        <div className="flex-1 ">
          <OrderList />
        </div>
      </div>
    </>
  );
}
