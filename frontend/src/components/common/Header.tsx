import { Category } from "@/types/DomainModels";
import { getCategories } from "@/utils/queries";
import { useQuery } from "@apollo/client";
import { Link, NavLink } from "react-router";
import Logo from "@/assets/logo.svg?react";

const Header: React.FC = () => {
  const { loading, error, data } = useQuery(getCategories);

  // TODO improve this three
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (!data) return <>Empty data</>;

  return (
    <div className="flex h-16 w-full justify-center">
      <div className="flex w-full">
        {data.categories.map((c: Category, index: number) => (
          <NavLink key={`${index}-nav`} className="" to={`${c.slug}`}>
            {({ isActive }) => (
              <div
                className={
                  "flex h-full min-w-12 px-2 text-center transition-colors hover:text-primary active:text-green-600 " +
                  (isActive ? "border-b-2 border-primary text-primary" : "")
                }
              >
                <span className="my-auto font-raleway uppercase">{c.name}</span>
              </div>
            )}
          </NavLink>
        ))}
      </div>
      <div className="flex w-16 items-center">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="flex w-full justify-end">cart</div>
    </div>
  );
};

export default Header;
