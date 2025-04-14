import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import { getCategoryProducts } from "@/utils/queries";
import ProductCard from "@/components/ProductCard";
import { ProductForCard } from "@/types/DomainModels";
import React from "react";

const ProductList: React.FC = () => {
  const params = useParams();
  const { loading, error, data } = useQuery(getCategoryProducts, {
    variables: { category: params.category },
  });

  // TODO improve this three
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (!data) return <>Empty data</>;

  return (
    <div className="pt-10">
      <span className="font-raleway text-2xl">{data.category.name}</span>
      <div className="mt-10 grid grid-cols-1 justify-items-center gap-16 px-5 md:grid-cols-2 lg:grid-cols-3">
        {data.products.map((p: ProductForCard, index) => (
          <ProductCard key={index} product={p} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
