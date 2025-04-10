import { useQuery } from "@apollo/client";
import { useParams } from "react-router"
import { getCategoryProducts } from "../utils/queries";
import { Category, ProductForCard } from "../utils/types";
import ProductCard from "../components/ProductCard";

export default function Home() {
    const params = useParams()
    const { loading, error, data } = useQuery(getCategoryProducts, {variables: {category: params.category}});

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <div className="pt-10">
            <span className="text-2xl font-raleway">{data.category.find((e: Category) => e.slug === params.category).name}</span>
            <div className="px-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10 justify-items-center mt-10">
                {data.products.map((p: ProductForCard) => <ProductCard product={p}/>)}
            </div>
        </div>
    )
}