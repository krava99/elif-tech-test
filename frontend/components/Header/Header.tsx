import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav>
        <ul className="flex gap-8 sm:gap-12 md:gap-20 justify-center py-4 cursor-pointer">
          <li>
            <Link href="/shops">Shop</Link>
          </li>
          <li>
            <Link href="/orders">Shopping Cart</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
