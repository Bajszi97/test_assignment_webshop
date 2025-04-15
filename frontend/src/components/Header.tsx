import { Category } from "@/types/DomainModels";
import { getCategories } from "@/utils/queries";
import { useQuery } from "@apollo/client";
import { Link, NavLink } from "react-router";
import Logo from "@/assets/logo.svg?react";
import CartButton from "./cart/CartButton";

const Header: React.FC = () => {
  const { loading, error, data } = useQuery(getCategories);

  // TODO improve this three
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (!data) return <>Empty data</>;

  return (
    <header className="flex h-16 w-full justify-center">
      <div className="flex max-w-[1920px] w-full px-5 lg:px-20">
        <nav className="flex w-full">
          {data.categories.map((category: Category, index) => (
            <NavLink
              key={index}
              to={category.slug}
              className={({ isActive }) =>
                `flex h-full min-w-12 px-2 items-center justify-center text-center uppercase transition-colors hover:text-primary active:text-green-600
                  ${isActive && "border-b-2 border-primary text-primary font-semibold"}
                  `
              }>
              {category.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex w-16 items-center">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <div className="flex w-full justify-end items-center">
          <CartButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
