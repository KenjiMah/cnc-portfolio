import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { stripePromise } from "@/utils/stripeClient";
import { Button } from "@/components/ui/button";
import { SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

export function PaymentView({
  onBack,
  clientSecret,
  hasFiles,
}: {
  onBack: () => void;
  clientSecret: string;
  hasFiles: boolean;
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

      {hasFiles && (
        <div className="px-1 pt-4 mx-6">
          {" "}
          {/* Add some padding for alignment */}
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Digital File Delivery</AlertTitle>
            <AlertDescription>
              A download link for your CAD files will be sent to the email
              address you use for payment. Please note: the link will be valid
              for 7 days, after which it will expire automatically.
            </AlertDescription>
          </Alert>
        </div>
      )}

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
