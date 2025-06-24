import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/customComponents/ImagePlaceholder";
import { formatCurrency } from "@/utils/utilFns";
import { Trash2 } from "lucide-react";
import { useState } from "react";

export function CartItem({
  item,
  removeFromCart,
  updateQuantity,
}: {
  item: {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image?: string | null;
  };
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
}) {
  const [imageError, setImageError] = useState(false);
  return (
    <div key={item.id} className="flex items-center gap-4 py-4 ml-3">
      {item.image && !imageError ? (
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          width={80}
          height={80}
          className="rounded-md object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-20 h-20">
          <ImagePlaceholder />
        </div>
      )}
      <div className="flex-1">
        <p className="font-medium">{item.name}</p>
        <div className="flex items-center gap-2 mt-1">
          <Button
            size="icon"
            variant="outline"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <span>{item.quantity}</span>
          <Button
            size="icon"
            variant="outline"
            className="text-gray-500"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
      </div>
      <div className="text-right ">
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
  );
}
