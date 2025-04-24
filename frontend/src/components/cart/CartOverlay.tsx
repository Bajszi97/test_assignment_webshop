import { useCartContext } from "@/hooks";
import { CartContent } from "./components/CartContent";

export const CartOverlay: React.FC = () => {
  const { isCartOpen, setIsCartOpen } = useCartContext();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) =>
    e.target === e.currentTarget && setIsCartOpen(false);

  if (isCartOpen) {
    return (
      <div
        className="fixed start-0 top-16 z-[9999] flex h-full w-full justify-end bg-gray-900/20 pb-10"
        onClick={handleClick}
        data-testid="cart-overlay"
      >
        <CartContent />
      </div>
    );
  }

  return <></>;
};
