import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="flex w-full flex-col">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}
