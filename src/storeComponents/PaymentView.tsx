import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { stripePromise } from "@/utils/stripeClient";
import { Button } from "@/components/ui/button";
import { SheetHeader, SheetTitle } from "@/components/ui/sheet";

export function PaymentView({
  onBack,
  clientSecret,
}: {
  onBack: () => void;
  clientSecret: string;
}) {
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
      <div className="pb-4 overflow-y-auto">
        {clientSecret ? (
          <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{ clientSecret }}
          >
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        ) : (
          <div className="flex justify-center items-center h-40">
            <p>Loading payment form...</p>
          </div>
        )}
      </div>
    </>
  );
}
