import { ButtonHTMLAttributes } from "react";

export default function AddToCartButton({className, onClick, disabled, ...props} : ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button {...props} className={`uppercase w-full h-12 bg-primary text-white ${disabled? "grayscale" : "cursor-pointer"}`} onClick={onClick} disabled={disabled}>
            ADD TO CART
        </button>
    )
}