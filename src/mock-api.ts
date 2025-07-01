// Create some fake product data. In a real app, this comes from Stripe.
// TODO: maybe convert to an endpoint?
import type { StripeProduct } from "./storeComponents/types";
import { ALL_IMAGES_MAP } from "./utils/projectData";

const isDev = process.env.NODE_ENV === "development";

// Use real image URLs or local placeholders.
const MOCK_PRODUCTS: StripeProduct[] = [
  {
    id: isDev
      ? "price_1RftL84aYz2OR2fHPl9PR91E"
      : "price_1RdfhCG4tz9qB6w3xcF2tRWh",
    name: "Basketball Keycap CAD Files",
    description: "STL's, fusion360, and Step files",
    image:
      ALL_IMAGES_MAP[
        "../assets/images/basketballKeycap/BasketballKeycapModel.png"
      ],
    price: 200, // in cents
    currency: "usd",
    productType: "e-files",
  },
  {
    id: isDev
      ? "price_1RftQ14aYz2OR2fHBoqpLUi1"
      : "price_1RftR8G4tz9qB6w3CBJzS6RS",
    name: "Minion Plaque CAD Files",
    description: "STL's, fusion360, and Step files",
    image: ALL_IMAGES_MAP["../assets/images/minionPlaque/MinionModel.png"],
    price: 200, // in cents
    currency: "usd",
    productType: "e-files",
  },
  {
    id: isDev
      ? "price_1RftoC4aYz2OR2fHrSKe9v3H"
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
