import { Link } from "react-router";
import { ProductForCard } from "@/types/DomainModels";
import { MouseEvent } from "react";
import { toKebabCase } from "@/utils/toKebabCase";
import { PriceTag } from "@/components";
import { Cart } from "@/assets/icons";
import { useQuickShop } from "@/hooks";

interface ProductCardProps {
  product: ProductForCard;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const outOfStock = !product.inStock;
  const { quickShopProduct } = useQuickShop();

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    quickShopProduct(product.slug);
  };

  return (
    <Link
      to={`/${product.category.slug}/${product.slug}`}
      data-testid={`product-${toKebabCase(product.name)}`}
    >
      <figure className="group cursor-pointer border border-transparent p-4 transition-all duration-300 ease-in-out hover:border-neutral-100 hover:shadow-[0_4px_35px_0_rgba(168,172,176,0.19)]">
        <div className="relative">
          <img
            className={`mb-5 aspect-square w-full object-contain ${outOfStock ? "grayscale" : ""}`}
            src={product.mainImage}
            alt={`${product.name}-main-image`}
            loading="lazy"
          />
          {outOfStock ? (
            <span className="absolute inset-0 flex items-center justify-center bg-[rgba(196,196,196,0.25)] text-2xl text-[rgba(141,143,154,1)] uppercase">
              out of stock
            </span>
          ) : (
            <button
              onClick={handleClick}
              className="absolute right-5 bottom-0 flex size-14 cursor-pointer items-center justify-center rounded-full bg-primary opacity-0 transition-all duration-500 group-hover:opacity-100 hover:bg-primary-dark"
              tabIndex={-1}
            >
              <Cart className="fill-white" />
            </button>
          )}
        </div>
        <figcaption>
          <h2 className="mb-1 text-lg font-light">{product.name}</h2>
          <PriceTag className="text-lg" price={product.prices[0]} />
        </figcaption>
      </figure>
    </Link>
  );
};
