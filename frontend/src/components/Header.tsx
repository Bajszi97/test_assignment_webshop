import { Link } from "react-router";
import Logo from "@/assets/logo.svg?react";
import CartButton from "./cart/CartButton";
import CartOverlay from "./cart/CartOverlay";
import { Suspense } from "react";
import NavBarSkeleton from "./skeletons/NavBarSkeleton";
import CategoriesNavBar from "./CategoriesNavBar";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full justify-center bg-white">
      <div className="flex w-full max-w-[1920px] px-5 lg:px-20">
        <Suspense fallback={<NavBarSkeleton />}>
          <CategoriesNavBar />
        </Suspense>

        <div className="flex w-16 items-center">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <div className="flex w-full items-center justify-end">
          <CartButton />
        </div>
        <CartOverlay />
      </div>
    </header>
  );
};

export default Header;
