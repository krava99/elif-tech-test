import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav>
        <ul className="flex gap-20 justify-center py-4 cursor-pointer ">
          <Link href="/">Shop</Link>
          <Link href="/orders">Shopping Cart</Link>
          {/* <Link href="/History">About</Link> */}
        </ul>
      </nav>
    </>
  );
}
