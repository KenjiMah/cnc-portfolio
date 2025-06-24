"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { formatCurrency } from "@/utils/utilFns";
import type { StripeProduct } from "./types";
import { LightModeBoundary } from "@/components/ui/theme-boundary";
import { ImagePlaceholder } from "@/customComponents/ImagePlaceholder";

const formSchema = z.object({
  quantity: z.coerce.number().min(1, { message: "Must be at least 1" }),
});

interface ProductCardProps {
  product: StripeProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, updateQuantity, cartItems } = useCart();
  const [imageError, setImageError] = useState(false);

  // 2. Check if the current product is already in the cart
  const existingCartItem = cartItems.find((item) => item.id === product.id);
  const isInCart = !!existingCartItem;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: existingCartItem?.quantity || 1,
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    if (isInCart) {
      // If in cart, call updateQuantity
      updateQuantity(product.id, data.quantity);
    } else {
      // If not, call addToCart
      addToCart(
        {
          id: product.id,
          name: product.name,
          price: product.price,
          currency: product.currency,
          image: product.image,
        },
        data.quantity
      );
    }
  };

  useEffect(() => {
    reset({ quantity: existingCartItem?.quantity || 1 });
  }, [existingCartItem, reset]);

  return (
    <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription className="h-10 text-muted-foreground">
          {product.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow flex flex-col justify-between">
        {/* Image with Placeholder Fallback */}
        {product.image && !imageError ? (
          <img
            src={product.image}
            alt={product.name}
            className="rounded-md object-cover aspect-[4/3] w-full"
            onError={() => setImageError(true)}
          />
        ) : (
          <ImagePlaceholder />
        )}

        <p className="text-3xl font-bold mt-4">
          {formatCurrency(product.price)}
        </p>
      </CardContent>

      <CardFooter>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full items-start gap-2"
        >
          <div className="flex-col">
            <LightModeBoundary>
              <Input
                type="number"
                min="1"
                className="w-20 text-center"
                {...register("quantity")}
              />
              {errors.quantity && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.quantity.message}
                </p>
              )}
            </LightModeBoundary>
          </div>
          {/* Use the primary color for the main call-to-action */}
          <Button
            type="submit"
            className="flex-1"
            // variant={isInCart ? "secondary" : "default"} // Use a different style for "Update"
          >
            {isInCart ? "Update" : "Add to Cart"}
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
