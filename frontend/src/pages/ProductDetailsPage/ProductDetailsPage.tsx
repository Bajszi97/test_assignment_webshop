import { useQuery } from "@apollo/client";
import { Navigate, useParams } from "react-router";
import { findProduct } from "@/utils/queries";
import { ProductPageSkeleton } from "@/components/skeletons";
import { Gallery, ProductInfo } from "./components";

export const ProductDetailsPage: React.FC = () => {
  const params = useParams();
  const { loading, error, data } = useQuery(findProduct, {
    variables: { slug: params.product },
  });

  if (loading) return <ProductPageSkeleton />;
  if (error) throw Error("Could not fetch data for product details page.");
  if (!data?.product) return <Navigate to="/404"/>;

  const product = data.product;

  return (
    <div className="flex flex-col py-5 md:flex-row md:py-20">
      <div className="mb-10 flex justify-center md:basis-7/12 md:justify-end">
        <Gallery urls={product.gallery} />
      </div>
      <div className="flex justify-center md:basis-5/12 md:justify-start md:ps-10">
        <ProductInfo product={product} />
      </div>
    </div>
  );
};
