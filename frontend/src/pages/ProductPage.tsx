import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import { findProduct } from "@/utils/queries";
import Gallery from "@/components/gallery/Gallery";
import ProductInfo from "@/components/ProductInfo";
import ProductPageSkeleton from "@/components/skeletons/ProductPageSkeleton";

const ProductPage: React.FC = () => {
  const params = useParams();
  const { loading, error, data } = useQuery(findProduct, {
    variables: { slug: params.product },
  });

  // TODO improve this three
  if (loading) return <ProductPageSkeleton />;
  if (error) return <p>Error : {error.message}</p>;
  if (!data) return <>Empty data</>;

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

export default ProductPage;
