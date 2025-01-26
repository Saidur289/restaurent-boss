import {
  CardElement,
useElements,
useStripe,
} from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";
import Loading from "../../../Shared/Loading/Loading";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useAuth } from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
const  CheckoutForm = () => {
  const [cart, refetch, isLoading] = useCart()
  const axiosPublic = useAxiosPublic()
  if(isLoading) return <Loading></Loading>
    const stripe = useStripe();
    const {user} = useAuth()
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('')
    const [error, setError] = useState('')
    const axiosSecure = useAxiosSecure()
    const [transactionId, setTransactionId] = useState('')
    const navigate = useNavigate()
  //  find total price for post data 
  const totalPrice = cart.reduce(((total, item) => total + item.price),0)
  useEffect(() => {
     if(totalPrice>0){
      axiosSecure.post('/create-payment-intent', {price: totalPrice})
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret)
      })
     }
  }, [axiosSecure, totalPrice])
    const handleSubmit = async (event) => {
      // Block native form submission.
      event.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }
  
      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const card = elements.getElement(CardElement);
  
      if (card == null) {
        return;
      }
  
      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        console.log('[error]', error);
        setError(error.message)
      } else {
        console.log('[PaymentMethod]', paymentMethod);
        setError('')
      }
      const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous'
          }
        }
      })
      if(confirmError){
        console.log('confirm error', confirmError);
      }
      else{
        console.log('payment intent', paymentIntent)
        setTransactionId(paymentIntent?.id)
        const payment = {
          email: user?.email,
          price: totalPrice,
          transactionId: paymentIntent?.id,
          date: new Date(),
          cartIds: cart.map(item=> item._id),
          menuIds: cart.map(item => item.menuId),
          status: 'pending'
        }
        const res = await axiosSecure.post('/payments', payment)
        if(res.data.paymentResult){
          refetch()
          toast.success('payment successful')
          navigate('/dashboard/paymentHistory')
        }

      }
      
    };
    const handlePaymentWithSSL = async() => {
      const payment = {
        email: user?.email,
        price: totalPrice,
        transactionId: '',
        date: new Date(),
        cartIds: cart.map(item=> item._id),
        menuIds: cart.map(item => item.menuId),
        status: 'pending'
      }
      const response = await axiosPublic.post(`/create-ssl-payment`, payment)
      console.log(response.data);
      if(response?.data?.gatewayUrl){
        window.location.replace(response?.data?.gatewayUrl)
      }
    }
    return (
       <>
        <div className="mb-5">
              <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn my-4 btn-sm btn-primary" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
    <p className="text-red-500">{error}</p>
    {
      transactionId && <p className="text-green-500">{transactionId}</p>
    }
        </div>
        <button onClick={handlePaymentWithSSL} className="btn btn-primary">Payment With Banking</button>
       </>
    );
};

export default CheckoutForm;