import { useEffect, useState } from "react";
import "../css/Stripe.scss";
import type { StripeProduct } from "@/storeComponents/types";
import { getMockProducts } from "@/mock-api";
import { ProductCard } from "@/storeComponents/ProductCard";
import { CartSheet } from "@/storeComponents/CartSheet";

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

  return (
    <div className="flex flex-col items-center justify-center h-full pb-24">
      <div className="container mx-auto px-4 pt-0 py-8">
        <div className="sticky top-4 right-12 z-30 m-4 text-right">
          <CartSheet />
        </div>
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
    </div>
  );
}
