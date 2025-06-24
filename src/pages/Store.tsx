import { CheckoutButton } from "@/customComponents/stripePayments/CheckoutButton";
import CompletePage from "@/customComponents/stripePayments/CheckoutComplete";
import CheckoutForm from "@/customComponents/stripePayments/CheckoutForm";
import { stripePromise } from "@/utils/stripeClient";
import { Elements } from "@stripe/react-stripe-js";
import type { Appearance } from "@stripe/stripe-js";
import { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "../css/Stripe.scss";

async function handleClick() {
  const stripe = await stripePromise;

  const res = await fetch("/create-checkout-session", { method: "POST" });
  const { url } = await res.json();

  stripe?.redirectToCheckout({ sessionId: url });
}

export function Store() {
  const [clientSecret, setClientSecret] = useState("");
  const fetchedRef = useRef(false); // prevents duplicate fetch
  const handleCheckoutClick = () => {
    handleClick();
  };

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
          items: [{ id: "cad-keycap-metal", amount: 200 }],
          receiptEmail: "gobef12449@iridales.com",
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  } as Appearance;
  // Enable the skeleton loader UI for optimal loading.
  const loader = "auto";

  return (
    <div className="flex flex-col items-center justify-center h-full stripe">
      {clientSecret && (
        <Elements
          options={{ clientSecret, appearance, loader }}
          stripe={stripePromise}
        >
          <Routes>
            <Route path="/" element={<CheckoutForm />} />
            <Route path="store/complete" element={<CompletePage />} />
          </Routes>
        </Elements>
      )}
      <p className="text-gray-600">
        <CheckoutButton onClick={handleCheckoutClick} />
      </p>
    </div>
  );
}
