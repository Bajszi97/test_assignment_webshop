import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import { findProduct } from "@/utils/queries";
import Gallery from "@/components/gallery/Gallery";
import ProductInfo from "@/components/ProductInfo";

const ProductPage: React.FC = () => {
  const params = useParams();
  const { loading, error, data } = useQuery(findProduct, {
    variables: { slug: params.product },
  });

  // TODO improve this three
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (!data) return <>Empty data</>;

  const product = data.product;

  return (
    <div className="flex py-5 lg:py-10 flex-col lg:flex-row">
      <div className="flex justify-center mb-10 lg:justify-end lg:basis-7/12">
        <Gallery urls={product.gallery} />
      </div>
      <div className="flex justify-center lg:justify-start lg:basis-5/12 lg:ps-10">
        <ProductInfo product={product} />
      </div>
    </div>
  );
};

export default ProductPage;
