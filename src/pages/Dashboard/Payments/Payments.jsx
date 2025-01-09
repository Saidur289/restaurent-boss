import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";


const Payments = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_GATEWAY_KEY);
  return (
    <div>
        <SectionTitle heading={'payment'} subHeading={'Please Pay To Eat'}></SectionTitle>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payments;
