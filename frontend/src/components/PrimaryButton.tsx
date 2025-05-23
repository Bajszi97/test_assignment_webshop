import { ButtonHTMLAttributes } from "react";

export const PrimaryButton: React.FC<
  ButtonHTMLAttributes<HTMLButtonElement>
> = ({ className, onClick, disabled, children, ...props }) => {
  return (
    <button
      {...props}
      className={`h-12 w-full bg-primary text-white uppercase transition-colors ${disabled ? "grayscale" : "cursor-pointer hover:bg-primary-dark"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
