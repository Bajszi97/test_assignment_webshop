import { Link } from "react-router";
import { ProductForCard } from "@/types/DomainModels";
import PriceTag from "./PriceTag";

interface ProductCardProps {
  product: ProductForCard;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const outOfStock = !product.inStock;

  return (
    <Link to={`/${product.category.slug}/${product.slug}`}>
      <figure className="cursor-pointer border border-transparent p-4 transition-all duration-300 ease-in-out hover:border-neutral-100 hover:shadow-[0_4px_35px_0_rgba(168,172,176,0.19)]">
        <div className="relative">
          <img
            className={`w-full aspect-square object-contain mb-5 ${outOfStock && "grayscale"}`}
            src={product.mainImage}
            alt={`${product.name}-main-image`}
          />
          {outOfStock && <span className="absolute inset-0 flex justify-center items-center uppercase text-2xl bg-[rgba(196,196,196,0.25)] text-[rgba(141,143,154,1)]">out of stock</span>}
        </div>
        <figcaption>
          <h2 className="mb-1 font-light text-lg">{product.name}</h2>
          <PriceTag className="text-lg" price={product.prices[0]} />
        </figcaption>
      </figure>
    </Link>
  );
};

export default ProductCard;
