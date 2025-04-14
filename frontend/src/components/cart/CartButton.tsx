import React from "react";
import Cart from "@/assets/cart.svg?react"
import { useCartContext } from "@/hooks/useCartContext";

const CartButton: React.FC = () => {
    const { cartItems, isCartOpen, setIsCartOpen } = useCartContext();
    const hasItem = cartItems.length > 0;
    return (
        <button onClick={() => setIsCartOpen(!isCartOpen)} className={`me-5 relative ${hasItem ? "group cursor-pointer" : ""}`} disabled={!hasItem}>
            <Cart className="group-hover:fill-primary transition-colors" />
            {hasItem &&
                <div className="absolute flex left-3 -top-3 min-w-5 h-5 px-1 rounded-full bg-shark group-hover:bg-primary text-white items-center justify-center">
                    {cartItems.length}
                </div>
            }
        </button>
    )
}

export default CartButton;