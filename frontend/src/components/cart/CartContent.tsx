import { useCartContext } from "@/hooks/useCartContext";
import PriceTag from "../PriceTag";
import PrimaryButton from "../PrimaryButton";
import CartItemCard from "./CartItemCard";
import { useMutation } from "@apollo/client";
import { createOrder } from "@/utils/queries";

const CartContent: React.FC = () => {
    const { cartItems, cartTotal, clearCart, setIsCartOpen } = useCartContext();
    const [placeOrder, { data, loading, error }] = useMutation(createOrder);
    
    const prepareOrderInput = () => {
        return {
            items: cartItems.map((item) => {
                return {
                    productSlug: item.product.slug,
                    quantity: item.quantity,
                    price: {
                        amount: item.product.prices[0].amount,
                        currency: item.product.prices[0].currency.label
                    },
                    attributes: Object.keys(item.selectedAttributes).map((key) => {
                        return {
                            setSlug: key,
                            valueSlug: item.selectedAttributes[key]
                        }
                    })
                } 
            })
        }
    }
    

    const getItemCountText = () => {
        return `${cartItems.length} Item${cartItems.length > 1 ? "s" : ""}`;
    }

    const handleClick = () => {
        placeOrder({
            variables: {
                input: prepareOrderInput()
            }
        });
        clearCart();
        setIsCartOpen(false);
    }

    if (loading) return 'Submitting...';

    if (error) return `Submission error! ${error.message}`;

    // TODO default currency
    return (
        <div className="flex flex-col bg-white w-full sm:w-82 h-min max-h-[94%] mx-5 md:me-10 lg:me-20 py-8 px-4 pb-8">
            <h2 className="font-medium mb-5"><span className="font-bold">My Bag,</span> {getItemCountText()}</h2>
            <ul className="space-y-8 mb-5 overflow-y-scroll">
                {cartItems.map((item, index) => <CartItemCard key={index} item={item} />)}
            </ul>
            <div className="font-medium mb-8">
                <span className="font-medium font-roboto">Total</span>
                <PriceTag className="float-right font-bold" price={{ amount: cartTotal(), currency: { label: "USD", symbol: "$" } }} />
            </div>
            <div className="">
                <PrimaryButton disabled={cartItems.length < 1} onClick={handleClick}>
                    Place order
                </PrimaryButton>
            </div>
        </div>
    )
}

export default CartContent;