import { Price } from "@/types/DomainModels";
import { HTMLAttributes } from "react";

interface PriceTagProps extends HTMLAttributes<HTMLDivElement> {
    price: Price;
}

const PriceTag: React.FC<PriceTagProps> = ({ price, className, ...props }) => {
    return (
        <div {...props} className={`${className}`}>
            {price.currency.symbol}
            {price.amount}
        </div>
    )
}

export default PriceTag;