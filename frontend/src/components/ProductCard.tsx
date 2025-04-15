import { Link } from "react-router";
import { ProductForCard } from "@/types/DomainModels";
import PriceTag from "./PriceTag";

interface ProductCardProps {
  product: ProductForCard;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/${product.category.slug}/${product.slug}`}>
      <figure className="cursor-pointer border border-transparent p-4 transition-all duration-300 ease-in-out hover:border-neutral-100 hover:shadow-[0_4px_35px_0_rgba(168,172,176,0.19)]">
        <img
          className="w-full aspect-square object-contain mb-5"
          src={product.mainImage}
          alt={`${product.name}-main-image`}
        />
        <figcaption>
          <h2 className="mb-1 font-light text-lg">{product.name}</h2>
          <PriceTag className="text-lg" price={product.prices[0]} />
        </figcaption>
      </figure>
    </Link>
  );
};

export default ProductCard;
