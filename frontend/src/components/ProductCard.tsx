import { Link } from "react-router";
import { Product, ProductForCard } from "@/types/DomainModels";
import PriceTag from "./PriceTag";
import Cart from "@/assets/cart.svg?react";
import { MouseEvent } from "react";
import { useLazyQuery } from "@apollo/client";
import { findProduct } from "@/utils/queries";
import { useCartContext } from "@/hooks/useCartContext";
import { toKebabCase } from "@/utils/toKebabCase";

interface ProductCardProps {
  product: ProductForCard;
}

const getDefaultAttributes = (product: Product) => {
  return product.attributes.reduce<Record<string, string>>(
    (defaults, attributeSet) => {
      defaults[attributeSet.slug] = attributeSet.items[0].slug;
      return defaults;
    },
    {},
  );
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const outOfStock = !product.inStock;
  const [getProduct] = useLazyQuery(findProduct);
  const { addItem, setIsCartOpen } = useCartContext();

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const { data } = await getProduct({
        variables: { slug: product.slug },
      });
      if (data?.product) {
        addItem({
          product: data.product,
          quantity: 1,
          selectedAttributes: getDefaultAttributes(data.product),
        });
        setIsCartOpen(true);
      } else {
        throw new Error("Could not fetch product for quick shopping.");
      }
    } catch (error) {
      console.error("Error fetching product for quick shopping:", error);
    }
  };

  return (
    <Link to={`/${product.category.slug}/${product.slug}`} data-testid={`product-${toKebabCase(product.name)}`}>
      <figure className="group cursor-pointer border border-transparent p-4 transition-all duration-300 ease-in-out hover:border-neutral-100 hover:shadow-[0_4px_35px_0_rgba(168,172,176,0.19)]">
        <div className="relative">
          <img
            className={`mb-5 aspect-square w-full object-contain ${outOfStock?  "grayscale" : ""}`}
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

export default ProductCard;
