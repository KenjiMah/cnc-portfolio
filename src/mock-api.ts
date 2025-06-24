// Create some fake product data. In a real app, this comes from Stripe.

import type { StripeProduct } from "./storeComponents/types";

// Use real image URLs or local placeholders.
const MOCK_PRODUCTS: StripeProduct[] = [
  {
    id: "prod_1",
    name: "Quantum Keyboard",
    description: "A mechanical keyboard that feels like typing on clouds.",
    image: "https://images.unsplash.com/photo-1618384887924-2c8427160226?q=80&w=870",
    price: 12999, // in cents ($129.99)
    currency: "usd",
  },
  {
    id: "prod_2",
    name: "Aero Mouse",
    description: "Lightweight gaming mouse for ultimate precision.",
    image: "https://images.unsplash.com/photo-1615663249852-321172a83214?q=80&w=870",
    price: 7900, // in cents ($79.00)
    currency: "usd",
  },
  {
    id: "prod_3",
    name: "Crystal-Clear Monitor",
    description: "A 27-inch 4K monitor with stunning color accuracy.",
    image: "https://images.unsplash.com/photo-1593344484962-796b16d8a976?q=80&w=774",
    price: 49950, // in cents ($499.50)
    currency: "usd",
  },
    {
    id: "prod_4",
    name: "Noise-Cancelling Headphones",
    description: "Immerse yourself in sound, and nothing else.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=870",
    price: 34900, // in cents ($349.00)
    currency: "usd",
  },
];

// This function simulates fetching data from a server.
export const getMockProducts = (): Promise<StripeProduct[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_PRODUCTS);
    }, 1000); // Simulate 1 second of network delay
  });
};