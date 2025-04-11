import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import { findProduct } from "../utils/queries";

export default function ProductPage() {
  const params = useParams();
  const { loading, error, data } = useQuery(findProduct, {
    variables: { slug: params.product },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="pt-10">
      {data.product.name}
    </div>
  );
}
