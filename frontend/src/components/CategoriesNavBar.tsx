import { getCategories } from "@/utils/queries";
import { useSuspenseQuery } from "@apollo/client";
import { NavLink } from "react-router";

const CategoriesNavBar: React.FC = () => {
  const { error, data } = useSuspenseQuery(getCategories);

  return (
    <nav className="flex w-full">
      {data.categories.map((category, index) => (
        <NavLink
          key={index}
          to={category.slug}
          className={({ isActive }) =>
            `flex h-full min-w-12 items-center justify-center px-2 text-center uppercase transition-colors hover:text-primary active:text-green-600 ${isActive && "border-b-2 border-primary font-semibold text-primary"} `
          }
        >
          {category.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default CategoriesNavBar;
