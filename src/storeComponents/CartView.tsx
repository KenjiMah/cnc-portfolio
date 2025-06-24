// Create this in a new file, e.g., src/components/CartView.jsx
import { Button } from "@/components/ui/button";
import { SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { formatCurrency } from "@/utils/utilFns";
import { CartItem } from "./CartItem";

export function CartView({
  cartItems,
  getCartTotal,
  updateQuantity,
  removeFromCart,
  onProceed,
}: {
  cartItems: any[];
  getCartTotal: () => number;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  onProceed: () => void;
}) {
  return (
    <>
      <SheetHeader>
        <SheetTitle>Your Cart</SheetTitle>
      </SheetHeader>
      <div className="flex-1 overflow-y-auto pr-4">
        {" "}
        {/* -mr-4 to hide scrollbar but keep functionality */}
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
          />
        ))}
      </div>
      <SheetFooter className="mt-auto border-t pt-4">
        <div className="w-full">
          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Total</span>
            <span>{formatCurrency(getCartTotal())}</span>
          </div>
          <Button className="w-full !bg-[#007bff]" onClick={onProceed}>
            Proceed to Checkout
          </Button>
        </div>
      </SheetFooter>
    </>
  );
}
