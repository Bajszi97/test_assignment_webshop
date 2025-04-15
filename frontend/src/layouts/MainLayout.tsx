import { Outlet } from "react-router";
import Header from "@/components/Header";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main className={`w-screen min-h-screen flex justify-center pb-32`}>
        <div className="max-w-[1920px] w-full md:px-10 lg:px-20">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
