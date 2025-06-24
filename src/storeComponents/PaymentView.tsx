// Create this in a new file, e.g., src/components/PaymentView.jsx
import { useEffect, useRef, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "@/utils/stripeClient";
import CheckoutForm from "@/customComponents/stripePayments/CheckoutForm"; // Your existing Stripe form
import { Button } from "@/components/ui/button";
import { SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/context/cart-provider";

export function PaymentView({ onBack }: { onBack: () => void }) {
  const { cartItems } = useCart();
  const [clientSecret, setClientSecret] = useState("");
  const fetchedRef = useRef(false); // prevents duplicate fetch

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    // prevent strict mode from double-fetching
    if (fetchedRef.current) return;
    fetchedRef.current = true;

    fetch(
      "https://93xotz88ia.execute-api.us-west-1.amazonaws.com/prod/create-payment-intent?",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cartItems.map((item) => ({
            id: item.id,
            quantity: item.quantity,
          })),
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [cartItems]);

  return (
    <>
      <SheetHeader>
        <div className="flex items-center">
          <Button variant="ghost" size="icon" onClick={onBack} className="mr-2">
            ← {/* Left Arrow */}
          </Button>
          <SheetTitle>Payment Details</SheetTitle>
        </div>
      </SheetHeader>
      <div className="py-4">
        {clientSecret ? (
          <Elements
            options={{ clientSecret, appearance: { theme: "stripe" } }}
            stripe={stripePromise}
          >
            <CheckoutForm />
          </Elements>
        ) : (
          <div className="flex justify-center items-center h-40">
            <p>Loading payment form...</p>
          </div>
        )}
      </div>
    </>
  );
}
