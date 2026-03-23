"use client";

import { getProducts } from "@/lib/shops/shopList-api";
import { Product } from "@/types/shop";
import { useEffect, useState } from "react";

export default function ShopProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts({ _id: "shop_id" });
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <div className="w-full h-full rounded-2xl bg-amber-600 gap-2 p-4 ">
        <ul className="grid grid-cols-3 gap-4 ">
          {products.map((product) => (
            <li key={product._id} className="w-70 bg-black h-40 rounded-2xl ">
              {product.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
