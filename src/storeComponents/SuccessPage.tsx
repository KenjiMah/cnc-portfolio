import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-provider";
import { CheckCircle } from "lucide-react";
import { ROUTES } from "@/utils/constants";

export function SuccessPage() {
  const { clearCart } = useCart();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // This effect runs once when the component mounts.
    const sessionId = searchParams.get("session_id");
    if (sessionId) {
      console.log("Payment successful for session:", sessionId);
      // Clear the cart now that the payment is complete.
      clearCart(sessionId);
    }
  }, [clearCart, searchParams]);

  return (
    <div className="flex flex-col items-center justify-start pt-12 min-h-screen text-center px-4">
      <CheckCircle className="h-24 w-24 text-green-500 mb-6" />
      <h1 className="text-4xl font-bold mb-2">Payment Successful!</h1>
      <p className="text-muted-foreground text-lg mb-8">
        Thank you for your order. A confirmation has been sent to your email.
      </p>
      <Button asChild>
        {/* Update the link to point to your store page */}
        <Link to={`/${ROUTES.STORE}`}>Continue Shopping</Link>
      </Button>
    </div>
  );
}
