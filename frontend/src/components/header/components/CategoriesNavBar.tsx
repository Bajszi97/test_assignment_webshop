import { getCategories } from "@/utils/queries";
import { useSuspenseQuery } from "@apollo/client";
import { Link, useParams } from "react-router";

export const CategoriesNavBar: React.FC = () => {
  const { data } = useSuspenseQuery(getCategories);
  const params = useParams();
  const activeCategory = params.category || "";

  return (
    <nav className="flex w-full">
      {data.categories.map((category, index) => {
        const isActive = activeCategory === category.slug;
        return (
          <Link
            key={index}
            data-testid={isActive ? "active-category-link" : "category-link"}
            to={category.slug}
            className={`flex h-full min-w-12 items-center justify-center px-2 text-center uppercase transition-colors hover:text-primary active:text-green-600 ${isActive ? "border-b-2 border-primary font-semibold text-primary" : ""} `}
          >
            {category.name}
          </Link>
        );
      })}
    </nav>
  );
};
