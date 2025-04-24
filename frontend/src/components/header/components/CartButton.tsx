import React from "react";
import { useCartContext } from "@/hooks";
import { Cart } from "@/assets/icons";

export const CartButton: React.FC = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useCartContext();
  const hasItem = cartItems.length > 0;

  return (
    <button
      onClick={() => setIsCartOpen(!isCartOpen)}
      className="relative me-5 group cursor-pointer"
      // disabled={!hasItem}
      data-testid='cart-btn'
    >
      <Cart className={`transition-colors group-hover:fill-primary`} />
      {hasItem && (
        <span className="absolute -top-3 left-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-shark px-1 font-roboto text-sm font-bold text-white group-hover:bg-primary">
          {cartItems.length}
        </span>
      )}
    </button>
  );
};
