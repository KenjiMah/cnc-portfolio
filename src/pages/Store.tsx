import { CheckoutButton } from "@/customComponents/stripePayments/CheckoutButton";
import CompletePage from "@/customComponents/stripePayments/CheckoutComplete";
import CheckoutForm from "@/customComponents/stripePayments/CheckoutForm";
import { stripePromise } from "@/utils/stripeClient";
import { Elements } from "@stripe/react-stripe-js";
import type { Appearance } from "@stripe/stripe-js";
import { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "../css/Stripe.scss";
import { Header } from "@/storeComponents/Header";
import type { StripeProduct } from "@/storeComponents/types";
import { getMockProducts } from "@/mock-api";
import { ProductCard } from "@/storeComponents/ProductCard";
import { CartProvider } from "@/context/cart-provider";
import { Toaster } from "sonner";

async function handleClick() {
  const stripe = await stripePromise;

  const res = await fetch("/create-checkout-session", { method: "POST" });
  const { url } = await res.json();

  stripe?.redirectToCheckout({ sessionId: url });
}

export function Store() {
  const [products, setProducts] = useState<StripeProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch products when the component mounts
    const fetchProducts = async () => {
      setIsLoading(true);
      const data = await getMockProducts();
      setProducts(data);
      setIsLoading(false);
    };

    fetchProducts();
  }, []); // Empty dependency array means this runs once on mount

  const [clientSecret, setClientSecret] = useState("");
  const fetchedRef = useRef(false); // prevents duplicate fetch
  const handleCheckoutClick = () => {
    handleClick();
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Our Products</h1>
        {isLoading ? (
          <p className="text-center">Loading products...</p>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">
            No products found.
          </p>
        )}
      </div>

      {/* {clientSecret && (
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
      </p> */}
    </div>
  );
}
