import { Outlet } from "react-router";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

const MainLayout: React.FC = () => {
  return (
    <div className="flex w-full flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
