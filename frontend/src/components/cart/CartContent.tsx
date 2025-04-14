import { useCartContext } from "@/hooks/useCartContext";
import PriceTag from "../PriceTag";
import PrimaryButton from "../PrimaryButton";

const CartContent: React.FC = () => {
    const { cartItems, cartTotal } = useCartContext();

    const getItemCountText = () => {
        return `${cartItems.length} Item${cartItems.length > 1 ? "s" : ""}`;
    }

    // TODO default currency
    return (
        <div className="float-right bg-white w-82 me-20 py-8 px-4">
            <div className="font-raleway font-medium mb-5"><span className="font-bold">My Bag,</span> {getItemCountText()}</div>
            <div className="mb-5">
                {cartItems.map((item) => <div>{item.id}</div>)}
            </div>
            <div className="font-raleway font-medium mb-8">
                <span className="font-medium font-roboto">Total</span>
                <PriceTag className="float-right font-bold" price={{ amount: cartTotal(), currency: { label: "USD", symbol: "$" } }} />
            </div>
            <div className="">
                <PrimaryButton>
                    Place order
                </PrimaryButton>
            </div>
        </div>
    )
}

export default CartContent;