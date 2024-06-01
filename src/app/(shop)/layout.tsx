import { Cart } from "../components/cart/Cart";
import { Footer, TopMenu } from "../components/ui";


export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <main className=" min-h-screen">
      <TopMenu />
      <Cart />

      <div className=" px-0 sm:px-10">{children}</div>

      <Footer />
    </main>
  );
}
