import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { useCart } from "@/context/cart-provider";
import { ShoppingCart } from "lucide-react";
import "../css/Stripe.scss";
import { CartView } from "./CartView";
import { PaymentView } from "./PaymentView";
import { useState } from "react";

export function CartSheet() {
  const { cartItems, removeFromCart, updateQuantity, getCartItemCount } =
    useCart();
  // STEP 1: Add state to manage the wizard step
  const [step, setStep] = useState(1); // 1 = Cart, 2 = Payment
  const [clientSecret, setClientSecret] = useState("");

  const handleSheetOpenChange = (isOpen: any) => {
    // Reset to the first step whenever the sheet is closed
    if (!isOpen) {
      setTimeout(() => setStep(1), 200); // Delay reset to allow closing animation
    }
  };
  const handleProceed = (clientSecret: string) => {
    // Reset to the first step whenever the sheet is closed
    setClientSecret(clientSecret);
    setStep(2);
  };

  return (
    <Sheet onOpenChange={handleSheetOpenChange}>
      <SheetTrigger asChild>
        <Button className="relative bg-[#222222] shadow-lg border border-gray-200">
          <ShoppingCart className="h-4 w-4 text-[#FFFFFF] " />
          {getCartItemCount() > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#E8751A] text-primary-foreground rounded-full h-5 w-5 text-xs flex items-center justify-center">
              {getCartItemCount()}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col z-50">
        {cartItems.length > 0 ? (
          // STEP 2: Conditionally render the view based on the current step
          <>
            {step === 1 && (
              <CartView
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
                onProceed={handleProceed} // This function will advance the wizard
              />
            )}

            {step === 2 && (
              <PaymentView
                onBack={() => setStep(1)} // This function goes back
                clientSecret={clientSecret}
              />
            )}
          </>
        ) : (
          // TODO create a success page
          // This is the view for an empty cart, which doesn't need steps
          <div className="flex flex-col items-center justify-center h-full">
            <ShoppingCart className="h-16 w-16 text-muted-foreground" />
            <p className="mt-4 text-lg text-muted-foreground">
              Your cart is empty.
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
