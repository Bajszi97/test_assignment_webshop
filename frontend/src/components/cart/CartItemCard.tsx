import { CartItem } from "@/providers/CartProvider";
import AddIcon from "@/assets/add.svg?react";
import RemoveIcon from "@/assets/remove.svg?react";
import PriceTag from "../PriceTag";
import { AttributeSet } from "@/types/DomainModels";
import CartItemAttributeSet from "./attributes/CartItemAttributeSet";
import { useCartContext } from "@/hooks/useCartContext";

interface CartItemCardProps {
    item: CartItem;
}

const CartItemCard: React.FC<CartItemCardProps> = ({ item }) => {
    const { id, product, selectedAttributes, quantity } = item;
    const {changeQuantity} = useCartContext();
    return (
        <div className="flex flex-nowrap mb-8 min-h-42">
            <div className="flex flex-col flex-1 font-raleway gap-y-2">
                <div className="font-light text-lg">{product.name}</div>
                <PriceTag className=" text-base" price={product.prices[0]} />
                {product.attributes.map((attributeSet: AttributeSet, index) => 
                    <CartItemAttributeSet key={index} attributeSet={attributeSet} selectedValue={selectedAttributes[attributeSet.slug]} />
                )}
            </div>
            <div className="w-6 flex flex-col justify-between mx-1">
                <button className="group" onClick={() => changeQuantity(id, 1)}>
                    <AddIcon className="group-hover:bg-neutral-200 cursor-pointer"/>
                </button>
                <div className="font-raleway size-6 flex items-center justify-center">
                    {quantity}
                </div>  
                <button className="group" onClick={() => changeQuantity(id, -1)}>
                    <RemoveIcon className="hover:bg-neutral-200 cursor-pointer" />
                </button>
            </div>
            <div className="flex justify-center items-center w-32">
                <img src={product.gallery[0]} alt="Product Image" className="object-contain" />
            </div>
        </div>
    )
}

export default CartItemCard;