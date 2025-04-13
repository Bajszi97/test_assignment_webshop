import { ButtonHTMLAttributes } from "react";

const AddToCartButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  onClick,
  disabled,
  title,
  ...props
}) => {
  return (
    <button
      {...props}
      title={disabled ? "Select product attributes first" : title}
      className={`h-12 w-full bg-primary text-white uppercase ${disabled ? "grayscale" : "cursor-pointer"}`}
      onClick={onClick}
      disabled={disabled}
    >
      ADD TO CART
    </button>
  );
};

export default AddToCartButton;
