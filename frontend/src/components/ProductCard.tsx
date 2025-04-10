import { ProductForCard } from "../utils/types";

export default function ProductCard({product}: {product: ProductForCard}){
    return (
        <div className="w-min p-4 border border-transparent shadow-gray-200 hover:border-neutral-100 hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
            <div className="flex bg-transparent size-64 mb-5">
                <img className="size-full object-contain" src={product.mainImage.url} alt="productImage" />
            </div>
            <div className="text-neutral-900 font-raleway font-light mb-1">
                {product.name}
            </div>
            <div className="text-neutral-900 font-raleway">
                {product.price.currency.symbol}{product.price.amount/100}
            </div>
        </div>
    )
}