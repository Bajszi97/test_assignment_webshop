import { Outlet } from "react-router";
import Header from "@/components/Header";
import CartOverlay from "@/components/cart/CartOverlay";

const MainLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center">
      <Header />
      <main className="relative w-full flex-1 flex justify-center">
        <CartOverlay />
        <div className="max-w-[1920px] w-full lg:px-20">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
