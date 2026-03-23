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
      <div className="flex gap-10 p-10">
        <ShopList onSelectShop={setSelectedShopId} />
        <ShopProductList selectedShopId={selectedShopId} />
      </div>
    </>
  );
}
