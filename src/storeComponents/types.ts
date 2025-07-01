export interface CartItem {
  id: string;
  name: string;
  image: string | null;
  price: number;
  currency: string;
  quantity: number;
  productType: "e-files" | "physical";
}

export interface StripeProduct {
  id: string;
  name: string;
  description: string | null;
  image: string | null;
  price: number;
  currency: string;
  productType: "e-files" | "physical";
}
