"use client";

import Header from "@/components/Header/Header";
import ShopProductList from "@/components/ShopProductList/ShopProductList";
import ShopList from "@/components/ShopList/ShopList";
import { useState } from "react";

export default function ShopsPage() {
  const [selectedShopId, setSelectedShopId] = useState<string | null>(null);

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 p-4 md:p-10">
        <aside className="w-full md:w-auto">
          <ShopList onSelectShop={setSelectedShopId} />
        </aside>

        <main className="flex-1">
          <ShopProductList selectedShopId={selectedShopId} />
        </main>
      </div>
    </>
  );
}
