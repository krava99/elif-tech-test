// import { redirect } from "next/navigation";

// export default function Home() {
//   redirect("/shop");
// }

export default function page({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {children}
      <div>Домашня сторінка</div>
    </>
  );
}
