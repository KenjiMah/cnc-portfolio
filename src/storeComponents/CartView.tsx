import { Button } from "@/components/ui/button";
import { SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { formatCurrency } from "@/utils/utilFns";
import { CartItem } from "./CartItem";
import { useCart } from "@/context/cart-provider";
import { useState } from "react";
import { Loader2Icon } from "lucide-react";
import { ROUTES } from "@/utils/constants";

export function CartView({
  updateQuantity,
  removeFromCart,
  onProceed,
}: {
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  onProceed: (clientSecret: string) => void;
}) {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheckout = async () => {
    // Dynamically construct the success URL based on the current window location.
    // This works for both http://localhost:5173 and https://kenjimah.github.io

    const successPathWithHash = `#/${ROUTES.SUCCESSFUL_PAYMENT}`;
    const returnUrlWithTemplate = `${window.location.origin}${window.location.pathname}${successPathWithHash}?session_id={CHECKOUT_SESSION_ID}`;

    // const returnUrl = `${window.location.origin}${window.location.pathname}#/success`;
    setIsLoading(true);
    fetch(
      "https://93xotz88ia.execute-api.us-west-1.amazonaws.com/prod/create-checkout-session",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cartItems.map((item) => ({
            id: item.id,
            quantity: item.quantity,
            productType: item.productType,
          })),
          returnUrl: returnUrlWithTemplate,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const { error } = data;
        if (error) {
          setError(error);
        } else {
          onProceed(data.clientSecret);
        }
      });
  };

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
          {/* The Checkout Button */}
          {isLoading ? (
            <Button className="w-full mt-4" disabled>
              <Loader2Icon className="animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button
              disabled={isLoading}
              onClick={handleCheckout}
              className="w-full mt-4"
            >
              Proceed to Checkout
            </Button>
          )}
          {error && (
            <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
          )}
        </div>
      </SheetFooter>
    </>
  );
}
