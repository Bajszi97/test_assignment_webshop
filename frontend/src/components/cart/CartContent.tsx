import { useCartContext } from "@/hooks/useCartContext";
import PriceTag from "../PriceTag";
import PrimaryButton from "../PrimaryButton";
import CartItemCard from "./CartItemCard";

const CartContent: React.FC = () => {
    const { cartItems, cartTotal, clearCart, setIsCartOpen } = useCartContext();

    const getItemCountText = () => {
        return `${cartItems.length} Item${cartItems.length > 1 ? "s" : ""}`;
    }

    const placeOrder = () => {
        console.log(cartItems);
        clearCart();
        setIsCartOpen(false);
    }

    // TODO default currency
    return (
        <div className="bg-white w-82 h-fit me-5 lg:me-20 py-8 px-4">
            <div className="font-raleway font-medium mb-5"><span className="font-bold">My Bag,</span> {getItemCountText()}</div>
            <div className="mb-5">
                {cartItems.map((item, index) => <CartItemCard key={index} item={item}/>)}
            </div>
            <div className="font-raleway font-medium mb-8 overflow-scroll">
                <span className="font-medium font-roboto">Total</span>
                <PriceTag className="float-right font-bold" price={{ amount: cartTotal(), currency: { label: "USD", symbol: "$" } }} />
            </div>
            <div className="">
                <PrimaryButton disabled={cartItems.length < 1} onClick={placeOrder}>
                    Place order
                </PrimaryButton>
            </div>
        </div>
    )
}

export default CartContent;