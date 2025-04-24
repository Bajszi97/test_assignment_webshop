import { useCartContext } from "@/hooks/useCartContext";
import { CartItemCard } from "./CartItemCard";
import { useMutation } from "@apollo/client";
import { createOrder } from "@/utils/queries";
import { PriceTag, PrimaryButton } from "@/components";

export const CartContent: React.FC = () => {
  const { cartItems, cartTotal, clearCart, setIsCartOpen } = useCartContext();
  const [placeOrder, { loading, error }] = useMutation(createOrder);

  const prepareOrderInput = () => {
    return {
      items: cartItems.map((item) => {
        return {
          productSlug: item.product.slug,
          quantity: item.quantity,
          price: {
            amount: item.product.prices[0].amount,
            currency: item.product.prices[0].currency.label,
          },
          attributes: Object.keys(item.selectedAttributes).map((key) => {
            return {
              setSlug: key,
              valueSlug: item.selectedAttributes[key],
            };
          }),
        };
      }),
    };
  };

  const getItemCountText = () => {
    return `${cartItems.length} Item${cartItems.length > 1 ? "s" : ""}`;
  };

  const handleClick = () => {
    placeOrder({
      variables: {
        input: prepareOrderInput(),
      },
    });
    clearCart();
    setIsCartOpen(false);
  };

  if (loading) return "Submitting...";

  if (error) return `Submission error! ${error.message}`;

  // TODO default currency
  return (
    <div className="mx-5 flex h-min max-h-[94%] w-full flex-col bg-white px-4 py-8 pb-8 sm:w-82 md:me-10 lg:me-20">
      <h2 className="mb-5 font-medium">
        <span className="font-bold">My Bag,</span> {getItemCountText()}
      </h2>
      <ul className="mb-5 space-y-8 overflow-y-scroll">
        {cartItems.map((item, index) => (
          <CartItemCard key={index} item={item} />
        ))}
      </ul>
      <div className="mb-8 font-medium" data-testid="cart-total">
        <span className="font-roboto font-medium">Total</span>
        <PriceTag
          className="float-right font-bold"
          price={{
            amount: cartTotal(),
            currency: { label: "USD", symbol: "$" },
          }}
        />
      </div>
      <div className="">
        <PrimaryButton disabled={cartItems.length < 1} onClick={handleClick}>
          Place order
        </PrimaryButton>
      </div>
    </div>
  );
};
