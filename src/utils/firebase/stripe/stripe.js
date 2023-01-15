import { loadStripe } from "@stripe/stripe-js";

require("dotenv").config();

export const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
);
