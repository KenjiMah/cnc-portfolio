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
import { formatCurrency } from "@/utils/utilFns";
import type { StripeProduct } from "./types";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  quantity: z.coerce.number().min(1, { message: "Must be at least 1" }),
});

interface ProductCardProps {
  product: StripeProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { quantity: 1 },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
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
  };

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription className="h-10">
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={400}
          height={300}
          className="rounded-md object-cover aspect-[4/3]"
        />
        <p className="text-2xl font-bold mt-4">
          {formatCurrency(product.price)}
        </p>
      </CardContent>
      <CardFooter>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full items-start gap-2"
        >
          <div className="flex-col">
            <Input
              type="number"
              min="1"
              className="w-20"
              {...register("quantity")}
            />
            {errors.quantity && (
              <p className="text-red-500 text-xs mt-1">
                {errors.quantity.message}
              </p>
            )}
          </div>
          <Button type="submit" className="flex-1">
            Add to Cart
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
