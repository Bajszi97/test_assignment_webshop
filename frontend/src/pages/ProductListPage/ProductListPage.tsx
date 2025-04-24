import React from "react";
import { useQuery } from "@apollo/client";
import { Navigate, useParams } from "react-router";
import { getCategoryProducts } from "@/utils/queries";
import { ProductForCard } from "@/types/DomainModels";
import { NoProductNotice, ProductCard } from "./components";
import { ProductListSkeleton } from "@/components/skeletons";

export const ProductListPage: React.FC = () => {
  const params = useParams();
  const { loading, data, error } = useQuery(getCategoryProducts, {
    variables: { category: params.category },
  });

  if (loading) return <ProductListSkeleton />;
  if (error) throw Error("Could not fetch products for listing.");
  if (!data?.category) return <Navigate to="/404" />;
  if (!data.products) return <NoProductNotice />;

  return (
    <div className="px-5 pt-10 lg:px-0">
      <h1 className="text-[42px]">{data.category.name}</h1>
      <section className="mt-10 grid grid-cols-1 justify-items-center gap-16 md:grid-cols-2 lg:grid-cols-3">
        {data.products.map((product: ProductForCard, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </section>
    </div>
  );
};
