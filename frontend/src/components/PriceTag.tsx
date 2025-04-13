import { PriceTagProps } from "@/types/ComponentTypes";

const PriceTag: React.FC<PriceTagProps> = ({ price, className }) => {
    return (
        <div className={`${className}`}>
            {price.currency.symbol}
            {price.amount}
        </div>
    )
}

export default PriceTag;