// Create some fake product data. In a real app, this comes from Stripe.
// TODO: maybe convert to an endpoint?
import type { StripeProduct } from "./storeComponents/types";
import { ALL_IMAGES_MAP } from "./utils/projectData";

const isDev = process.env.NODE_ENV === "development";

// Use real image URLs or local placeholders.
const MOCK_PRODUCTS: StripeProduct[] = [
  {
    id: isDev
      ? "price_1RdamdG4tz9qB6w3L2yV3SQe"
      : "price_1RdfhCG4tz9qB6w3xcF2tRWh,prod_SYnHhIwxDeAqsT",
    name: "Basketball Keycap CAD Files",
    description: "STL's, fusion360, and Step files",
    image:
      ALL_IMAGES_MAP[
        "../assets/images/basketballKeycap/BasketballKeycapModel.png"
      ],
    price: 200, // in cents
    currency: "usd",
    productType: "e-file",
  },
  {
    id: isDev
      ? "price_1RdgLlG4tz9qB6w3B8FhimXs"
      : "price_1RdgLrG4tz9qB6w3q4pqMtmQ",
    name: "Poro Keycap",
    description: "Cute Poro Keycap.",
    image: ALL_IMAGES_MAP["../assets/images/poroKeycaps/singlePoro.jpeg"],
    price: 2000, // in cents ($79.00)
    currency: "usd",
    productType: "physical",
  },
];

// This function simulates fetching data from a server.
export const getMockProducts = (): Promise<StripeProduct[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_PRODUCTS);
    }, 0); // Simulate 0 seconds of network delay
  });
};
