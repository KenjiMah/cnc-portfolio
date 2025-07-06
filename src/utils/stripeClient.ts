import { loadStripe } from "@stripe/stripe-js";

const isLocalhost =
  typeof window !== "undefined" && window.location.hostname === "localhost";

const PUBLIC_TEST_KEY =
  "pk_test_51RcUNk4aYz2OR2fHZJOpNRkXe8dX0c8X4jSi8q8trFxNAzpL2qVxNXaE4uMj9tkoQUNlcIuCyAm6MNa4oLsPSSgL00sxxrkHhu";

const PUBLIC_LIVE_KEY =
  "pk_live_51RcUNbG4tz9qB6w3Grl2PEwuK0y0M4fjXpddjHtaywUXiC6W1oUGyifkGNlr5uJ88VOZ2eagjdu7JK5zc09UzjII00GUJkiUcI";
export const stripePromise = loadStripe(
  isLocalhost ? PUBLIC_TEST_KEY : PUBLIC_LIVE_KEY
);
