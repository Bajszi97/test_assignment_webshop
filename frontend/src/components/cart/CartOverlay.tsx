import { useCartContext } from "@/hooks/useCartContext";
import CartContent from "./CartContent";

const CartOverlay: React.FC = () => {
    const { isCartOpen, setIsCartOpen } = useCartContext();

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => (e.target === e.currentTarget) && setIsCartOpen(false);

    if (isCartOpen) {
        return (
            <div
                className="absolute inset-0 bg-gray-900/20 z-[9999]"
                onClick={handleClick}
            >
                <CartContent />
            </div>
        );
    }

    return <></>;
}

export default CartOverlay;