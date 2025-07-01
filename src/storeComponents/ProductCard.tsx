import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Context and Components
import { useCart } from "@/context/cart-provider";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ImagePlaceholder } from "@/customComponents/ImagePlaceholder";
import { LightModeBoundary } from "@/components/ui/theme-boundary";

// Utilities and Types
import { formatCurrency } from "@/utils/utilFns";
import type { StripeProduct } from "./types";

// Define the form schema once at the top level for physical products.
const formSchema = z.object({
  quantity: z.coerce.number().min(0, { message: "Must be at least 0" }),
});

type QuantityForm = z.infer<typeof formSchema>;

interface ProductCardProps {
  product: StripeProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const { id, name, description, image, price, currency, productType } =
    product;
  const isEfile = productType === "e-files";

  const { cartItems, addToCart, updateQuantity, removeFromCart } = useCart();
  const cartItem = cartItems.find((item) => item.id === id);
  const isInCart = !!cartItem;

  const [imageError, setImageError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuantityForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: cartItem?.quantity ?? 1,
    },
  });

  useEffect(() => {
    reset({ quantity: cartItem?.quantity ?? 1 });
  }, [cartItem, reset]);

  // Handler for physical product form submission
  const handlePhysicalProductSubmit = (data: QuantityForm) => {
    if (isInCart && data.quantity === 0) {
      removeFromCart(id);
      return;
    }

    if (isInCart) {
      updateQuantity(id, data.quantity);
    } else {
      addToCart(
        { id, name, price, currency, image, productType },
        data.quantity
      );
    }
  };

  // Specific handlers for e-file buttons
  const handleEfileAdd = () => {
    addToCart({ id, name, price, currency, image, productType }, 1);
  };

  const handleRemove = () => {
    removeFromCart(id);
  };

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription className="h-10 text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow flex flex-col justify-between">
        {image && !imageError ? (
          <img
            src={image}
            alt={name}
            className="rounded-md object-cover aspect-[4/3] w-full"
            onError={() => setImageError(true)}
          />
        ) : (
          <ImagePlaceholder />
        )}
        <p className="text-3xl font-bold mt-4">{formatCurrency(price)}</p>
      </CardContent>

      <CardFooter>
        {/* --- LOGIC FOR E-FILES --- */}
        {isEfile ? (
          isInCart ? (
            <Button
              type="button"
              className="w-full bg-[#ef5350] hover:bg-[#e57373]"
              onClick={handleRemove}
            >
              Remove
            </Button>
          ) : (
            <Button type="button" className="w-full" onClick={handleEfileAdd}>
              Add to Cart
            </Button>
          )
        ) : (
          /* --- LOGIC FOR PHYSICAL PRODUCTS --- */
          <form
            onSubmit={handleSubmit(handlePhysicalProductSubmit)}
            className="flex w-full items-start gap-2"
          >
            <div className="flex-col">
              <LightModeBoundary>
                <Input
                  type="number"
                  min={isInCart ? 0 : 1}
                  className="w-20 text-center"
                  {...register("quantity")}
                />
              </LightModeBoundary>
              {errors.quantity && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.quantity.message}
                </p>
              )}
            </div>
            <Button type="submit" className="flex-1">
              {isInCart ? "Update" : "Add to Cart"}
            </Button>
            {isInCart && (
              <Button
                type="button"
                className="flex-shrink-0 bg-[#ef5350] hover:bg-[#e57373]"
                onClick={handleRemove}
              >
                Remove
              </Button>
            )}
          </form>
        )}
      </CardFooter>
    </Card>
  );
}
