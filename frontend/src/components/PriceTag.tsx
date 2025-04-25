import { Price } from "@/types/DomainModels";
import { HTMLAttributes } from "react";

interface PriceTagProps extends HTMLAttributes<HTMLSpanElement> {
  price: Price;
}

export const PriceTag: React.FC<PriceTagProps> = ({
  price,
  className,
  ...props
}) => {
  return (
    <span {...props} className={`${className}`}>
      {price.currency.symbol}
      {price.amount}
    </span>
  );
};
