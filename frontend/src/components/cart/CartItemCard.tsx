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
  const { changeQuantity } = useCartContext();
  return (
    <li className="flex min-h-42 flex-nowrap">
      <div className="flex flex-1 flex-col gap-y-2">
        <span className="text-lg font-light">{product.name}</span>
        <PriceTag className="text-base" price={product.prices[0]} />
        {product.attributes.map((attributeSet: AttributeSet, index) => (
          <CartItemAttributeSet
            key={index}
            attributeSet={attributeSet}
            selectedValue={selectedAttributes[attributeSet.slug]}
          />
        ))}
      </div>
      <div className="mx-1 flex w-6 flex-col justify-between">
        <button className="group" onClick={() => changeQuantity(id, 1)} data-testid="cart-item-amount-increase">
          <AddIcon className="cursor-pointer group-hover:bg-neutral-200" />
        </button>
        <span className="flex size-6 items-center justify-center" data-testid="cart-item-amount">
          {quantity}
        </span>
        <button className="group" onClick={() => changeQuantity(id, -1)} data-testid="cart-item-amount-decrease">
          <RemoveIcon className="cursor-pointer hover:bg-neutral-200" />
        </button>
      </div>
      <div className="flex w-32 items-center justify-center">
        <img
          src={product.gallery[0]}
          alt="Product Image"
          className="object-contain"
        />
      </div>
    </li>
  );
};

export default CartItemCard;
