import { Outlet } from "react-router";
import Header from "@/components/Header";

const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main className={`flex min-h-screen w-screen justify-center pb-32`}>
        <div className="w-full max-w-[1920px] md:px-10 lg:px-20">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default MainLayout;
