import { useCartContext } from "@/hooks/useCartContext";
import CartContent from "./CartContent";

const CartOverlay: React.FC = () => {
    const { isCartOpen, setIsCartOpen } = useCartContext();

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => (e.target === e.currentTarget) && setIsCartOpen(false);

    if (isCartOpen) {
        return (
            <div
                className="fixed top-16 start-0 w-full flex h-full justify-end bg-gray-900/20 z-[9999] pb-10"
                onClick={handleClick}
            >
                <CartContent />
            </div>
        );
    }

    return <></>;
}

export default CartOverlay;