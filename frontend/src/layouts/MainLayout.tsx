import { Outlet } from "react-router";
import { Header } from "@/components/header/Header";

export const MainLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main className={`flex w-screen justify-center pb-32`}>
        <div className="w-full max-w-[1920px] md:px-10 lg:px-20">
          <Outlet />
        </div>
      </main>
    </>
  );
};
