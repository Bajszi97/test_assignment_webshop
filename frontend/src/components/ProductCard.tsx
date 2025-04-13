import { Link } from "react-router";
import { ProductForCard } from "@/types/DomainModels";
import PriceTag from "./PriceTag";

interface ProductCardProps {
  product: ProductForCard
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="w-min cursor-pointer border border-transparent p-4 shadow-gray-200 transition-all duration-300 ease-in-out hover:scale-105 hover:border-neutral-100 hover:shadow-xl">
      <Link to={`/${product.category.slug}/${product.slug}`}>
        <div className="mb-5 flex size-64 bg-transparent">
          {product.mainImage ?
            <img
              className="size-full object-contain"
              src={product.mainImage}
              alt="productImage"
            />
            :
            <></> //Placeholder image if the product doesn't have any image
          }

        </div>
        <div className="mb-1 font-raleway font-light">
          {product.name}
        </div>
        <PriceTag className="font-raleway" price={product.prices[0]} />
      </Link>
    </div>
  );
}

export default ProductCard;
