import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import { findProduct } from "@/utils/queries";
import Gallery from "@/components/Gallery/Gallery";
import ProductInfo from "@/components/ProductInfo";

export default function ProductPage() {
  const params = useParams();
  const { loading, error, data } = useQuery(findProduct, {
    variables: { slug: params.product },
  });

  // TODO improve this three
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (!data) return <>Empty data</>

  const product = data.product; 

  return (
    <div className="flex py-10">
      <div className="">
        <Gallery urls={product.gallery}/>
      </div>
      <div className="flex flex-1 justify-center">
        <ProductInfo product={product}/>
      </div>
    </div>
  );
}
