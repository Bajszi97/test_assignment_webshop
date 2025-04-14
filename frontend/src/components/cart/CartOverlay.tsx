import { useCartContext } from "@/hooks/useCartContext";
import CartContent from "./CartContent";

const CartOverlay: React.FC = () => {
    const { isCartOpen, setIsCartOpen } = useCartContext();

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => (e.target === e.currentTarget) && setIsCartOpen(false);

    if (isCartOpen) {
        return (
            <div
                className="absolute flex min-h-full h-fit justify-end inset-0 bg-gray-900/20 z-[9999] pb-10"
                onClick={handleClick}
            >
                <CartContent />
            </div>
        );
    }

    return <></>;
}

export default CartOverlay;