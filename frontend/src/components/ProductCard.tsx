import { ProductForCard } from "../utils/types";

export default function ProductCard({ product }: { product: ProductForCard }) {
  return (
    <div className="w-min cursor-pointer border border-transparent p-4 shadow-gray-200 transition-all duration-300 ease-in-out hover:scale-105 hover:border-neutral-100 hover:shadow-xl">
      <div className="mb-5 flex size-64 bg-transparent">
        {product.mainImage? 
                <img
                className="size-full object-contain"
                src={product.mainImage}
                alt="productImage"
              />
            :
            <></> //Placeholder image if the product doesn't have any image
            }

      </div>
      <div className="mb-1 font-raleway font-light text-neutral-900">
        {product.name}
      </div>
      <div className="font-raleway text-neutral-900">
        {product.prices[0].currency.symbol}
        {product.prices[0].amount / 100}
      </div>
    </div>
  );
}
