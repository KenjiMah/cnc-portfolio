import { Button } from "@/components/ui/button";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  Sheet,
} from "@/components/ui/sheet";
import { useCart } from "@/context/cart-provider";
import { formatCurrency } from "@/utils/utilFns";
import { ShoppingCart, Trash2 } from "lucide-react";

export function CartSheet() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getCartItemCount,
  } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-4 w-4" />
          {getCartItemCount() > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full h-5 w-5 text-xs flex items-center justify-center">
              {getCartItemCount()}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>
        {cartItems.length > 0 ? (
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto pr-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 py-4">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-md object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </Button>
                      <span>{item.quantity}</span>
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p>{formatCurrency(item.price * item.quantity)}</p>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <SheetFooter className="mt-auto border-t pt-4">
              <div className="w-full">
                <div className="flex justify-between font-bold text-lg mb-4">
                  <span>Total</span>
                  <span>{formatCurrency(getCartTotal())}</span>
                </div>
                <Button className="w-full">Proceed to Checkout</Button>
                <p className="text-xs text-center text-muted-foreground mt-2">
                  (Checkout is not implemented in this demo)
                </p>
              </div>
            </SheetFooter>
          </div>
        ) : (
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
