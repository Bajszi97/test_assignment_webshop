import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import { findProduct } from "../utils/queries";
import Gallery from "../components/Gallery/Gallery";

export default function ProductPage() {
  const params = useParams();
  const { loading, error, data } = useQuery(findProduct, {
    variables: { slug: params.product },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="flex py-10">
      <div className="">
        <Gallery urls={data.product.gallery}/>
      </div>
      <div className="flex-1">

      </div>
    </div>
  );
}
