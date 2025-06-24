import { loadStripe } from "@stripe/stripe-js";

const isLocalhost =
  typeof window !== "undefined" && window.location.hostname === "localhost";

const PUBLIC_TEST_KEY =
  "pk_test_51RcUNbG4tz9qB6w3UoOoTJi0Z3jcO4YK2zCmZrQZMa1b1lnixyNX3Qveqy0RKetCh3e7GGhAg7ZEnDDZSSBRZe2H007iFeGJm5";

const PUBLIC_LIVE_KEY =
  "pk_live_51RcUNbG4tz9qB6w3Grl2PEwuK0y0M4fjXpddjHtaywUXiC6W1oUGyifkGNlr5uJ88VOZ2eagjdu7JK5zc09UzjII00GUJkiUcI";
export const stripePromise = loadStripe(
  isLocalhost ? PUBLIC_TEST_KEY : PUBLIC_LIVE_KEY
);
