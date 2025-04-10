import { useQuery } from "@apollo/client";
import { NavLink } from "react-router"
import { getCategories } from "../utils/queries"
import { Category } from "../utils/types";

export default function Header() {
    const { loading, error, data } = useQuery(getCategories);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <div className="w-full flex justify-center h-16">
            <div className="flex w-full">
                {data.categories.map((c: Category, index: number) =>
                    <NavLink key={`${index}-nav`} className="" to={`/${c.slug}`}>
                        {({ isActive }) => (
                            <div className={"flex min-w-12 text-center px-2 h-full transition-colors hover:text-green-400 active:text-green-600 " +
                                (isActive ? "text-green-400 border-b-2 border-green-400" : "")}>
                                <span className="my-auto font-raleway">{c.name.toUpperCase()}</span>
                            </div>
                        )}
                    </NavLink>)}
            </div>
            <div className="w-16">
                logo
            </div>
            <div className="flex w-full justify-end">
                cart
            </div>
        </div>
    )
}