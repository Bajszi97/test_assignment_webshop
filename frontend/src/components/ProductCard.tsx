import { Link } from "react-router";
import { Product, ProductForCard } from "@/types/DomainModels";
import PriceTag from "./PriceTag";
import Cart from "@/assets/cart.svg?react"
import { MouseEvent } from "react";
import { useLazyQuery } from "@apollo/client";
import { findProduct } from "@/utils/queries";
import { useCartContext } from "@/hooks/useCartContext";
interface ProductCardProps {
  product: ProductForCard;
}

const getDefaultAttributes = (product: Product) => {
  return product.attributes.reduce<Record<string, string>>((defaults, attributeSet) => {
    defaults[attributeSet.slug] = attributeSet.items[0].slug;
    return defaults; // Explicitly return the defaults object
  }, {});
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
    <Link to={`/${product.category.slug}/${product.slug}`}>
      <figure className="cursor-pointer border border-transparent p-4 transition-all duration-300 ease-in-out group hover:border-neutral-100 hover:shadow-[0_4px_35px_0_rgba(168,172,176,0.19)]">
        <div className="relative">
          <img
            className={`w-full aspect-square object-contain mb-5 ${outOfStock && "grayscale"}`}
            src={product.mainImage}
            alt={`${product.name}-main-image`}
            loading="lazy"
          />
          {outOfStock ?
            <span className="absolute inset-0 flex justify-center items-center uppercase text-2xl bg-[rgba(196,196,196,0.25)] text-[rgba(141,143,154,1)]">out of stock</span>
            : <button onClick={handleClick} className="opacity-0 group-hover:opacity-100 absolute cursor-pointer flex items-center justify-center bottom-0 right-5 bg-primary hover:bg-primary-dark rounded-full size-14 transition-all duration-500" tabIndex={-1}>
              <Cart className="fill-white" />
            </button>
          }
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
