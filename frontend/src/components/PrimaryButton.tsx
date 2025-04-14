import { ButtonHTMLAttributes } from "react";

const PrimaryButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  onClick,
  disabled,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`h-12 w-full bg-primary text-white uppercase transition-colors ${disabled ? "grayscale" : "cursor-pointer hover:bg-[#2fa455]"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
