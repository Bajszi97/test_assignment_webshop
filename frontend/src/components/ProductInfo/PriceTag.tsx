import { PriceTagProps } from "../../utils/types";

export default function PriceTag({price, className}: PriceTagProps) {
    return (
        <div className={`${className}`}>
            {price.currency.symbol}
            {price.amount}
        </div>
    )
}