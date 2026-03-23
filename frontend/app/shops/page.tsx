import Header from "@/components/Header/Header";
import ShopProductList from "@/components/ShopProductList/ShopProductList";
import ShopSidebar from "@/components/ShopSidebar/ShopSidebar";

export default function ShopsPage() {
  return (
    <>
      <Header />
      <div className="flex gap-10 p-10">
        <ShopSidebar />
        <ShopProductList />
      </div>
    </>
  );
}
