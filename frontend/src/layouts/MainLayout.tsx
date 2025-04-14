import { Outlet } from "react-router";
import Header from "@/components/Header";
import CartOverlay from "@/components/cart/CartOverlay";

const MainLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center">
        <Header />
        <main className="relative px-20 w-full flex-1">
          <CartOverlay />
          <Outlet />
        </main>
    </div>
  );
};

export default MainLayout;
