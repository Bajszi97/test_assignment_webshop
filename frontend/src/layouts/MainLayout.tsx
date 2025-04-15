import { Outlet } from "react-router";
import Header from "@/components/Header";
import CartOverlay from "@/components/cart/CartOverlay";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="relative w-screen min-h-screen flex justify-center pb-50">
        <CartOverlay />
        <div className="max-w-[1920px] w-full md:px-10 lg:px-20">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
