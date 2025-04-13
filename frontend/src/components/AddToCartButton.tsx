import { ButtonHTMLAttributes } from "react";

const AddToCartButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, onClick, disabled, ...props }) => {
    return (
        <button {...props} className={`uppercase w-full h-12 bg-primary text-white ${disabled ? "grayscale" : "cursor-pointer"}`} onClick={onClick} disabled={disabled}>
            ADD TO CART
        </button>
    )
}

export default AddToCartButton;