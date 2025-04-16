import { Product } from "@/types/DomainModels";
import {
  createContext,
  useState,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

export interface CartItem {
  id: string;
  product: Product;
  selectedAttributes: Record<string, string>;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
  addItem: (item: Omit<CartItem, "id">) => void;
  changeQuantity: (itemId: string, change: number) => void;
  clearCart: () => void;
  cartTotal: () => number;
}

const generateCartItemId = (item: Omit<CartItem, "id">): string => {
  return [item.product.slug, ...Object.values(item.selectedAttributes)].join(
    "-",
  );
};

const getInitialCart = () => {
  try {
    const stored = localStorage.getItem('cartItems');
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.error('Failed to parse cart from localStorage', e);
    return [];
  }
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

export const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {

  const [cartItems, setCartItems] = useState<CartItem[]>(getInitialCart());
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? "hidden" : "";
  }, [isCartOpen]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addItem = (item: Omit<CartItem, "id">) => {
    const id = generateCartItemId(item);
    setCartItems((prev) => {
      const existingItemIndex = prev.findIndex(
        (cartItem) => cartItem.id === id,
      );

      if (existingItemIndex > -1) {
        const newCart = [...prev];
        const existingItem = { ...newCart[existingItemIndex] };
        existingItem.quantity += item.quantity;
        newCart[existingItemIndex] = existingItem;
        return newCart;
      }

      return [...prev, { ...item, id }];
    });
  };

  const changeQuantity = (itemId: string, increment: number) => {
    setCartItems((prev) => {
      const newCart = [...prev];
      const changedItemIndex = newCart.findIndex(
        (cartItem) => cartItem.id === itemId,
      );

      if (changedItemIndex === -1) return prev;

      const changedItem = { ...newCart[changedItemIndex] };
      changedItem.quantity += increment;

      if (changedItem.quantity > 0) {
        newCart[changedItemIndex] = changedItem;
      } else {
        newCart.splice(changedItemIndex, 1);
      }

      return newCart;
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = () => {
    return Number(
      cartItems
        .reduce(
          (total, item) =>
            total + item.quantity * item.product.prices[0].amount,
          0,
        )
        .toFixed(2),
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addItem,
        changeQuantity,
        clearCart,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
