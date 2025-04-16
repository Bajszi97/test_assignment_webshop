import { ButtonHTMLAttributes } from "react";
import Chevron from "@/assets/chevron.svg?react";

const NavButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`h-full w-16 cursor-pointer bg-gradient-to-l from-transparent p-2 transition-colors duration-500 ease-in-out hover:from-gray-200 hover:to-transparent ${className}`}
    >
      <Chevron />
    </button>
  );
};

export default NavButton;
