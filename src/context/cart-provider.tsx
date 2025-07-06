import type { CartItem } from "@/storeComponents/types";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
  useCallback,
} from "react";
import { toast } from "sonner";

// This function runs once to get the initial state.
const getInitialCart = (): CartItem[] => {
  if (typeof window === "undefined") {
    return []; // Return empty array if on the server (for SSR frameworks)
  }
  const storedCart = localStorage.getItem("cart");
  try {
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error("Failed to parse cart from localStorage", error);
    return [];
  }
};

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: (sessionId?: string) => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  // Initialize state directly from our function instead of an empty array.
  const [cartItems, setCartItems] = useState<CartItem[]>(getInitialCart);
  // Keep track of the last session ID that cleared the cart
  const [lastClearedSession, setLastClearedSession] = useState<string | null>(
    null
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: Omit<CartItem, "quantity">, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prevItems, { ...item, quantity }];
    });

    toast.success("Item Added", {
      description: `${quantity} x ${item.name} added to your cart.`,
    });
  };

  const removeFromCart = (id: string) => {
    const itemName = cartItems.find((item) => item.id === id)?.name || "Item";
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    toast.error("Item Removed", {
      description: `${itemName} has been removed from your cart.`,
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id); // This already has a toast
    } else {
      // Find the item to get its name for the toast message
      const itemName = cartItems.find((item) => item.id === id)?.name || "Item";
      setCartItems((prevItems) =>
        prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
      );

      toast.info("Quantity Updated", {
        description: `Set ${itemName} to ${quantity}.`,
      });
    }
  };

  const clearCart = useCallback(
    (sessionId?: string) => {
      // Only clear the cart if the session ID is new
      // This session ID is provided when a customer completes a purchase and
      // stripe redirects them to the success page
      if (sessionId && sessionId !== lastClearedSession) {
        setCartItems([]);
        localStorage.removeItem("cart");
        setLastClearedSession(sessionId); // Remember this session ID
        console.log(`Cart cleared for session ${sessionId}`);
      } else if (!sessionId) {
        setCartItems([]);
        localStorage.removeItem("cart");
        console.log(`Cart cleared for session ${sessionId}`);
        // Your toast logic would go here, now it's guaranteed to run once
        toast.success("Empty Cart", {
          description: "Your cart has been cleared.",
        });
      }
    },
    [lastClearedSession]
  ); // Dependency on the last cleared session
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
