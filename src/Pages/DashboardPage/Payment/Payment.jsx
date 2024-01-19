import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../compo/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";
import useCart from "../../../Hooks/useCart";


const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_key)
    const [cart] = useCart() ;
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div className="w-full">
            <SectionTitle subHeading={'please'} heading={'Payment'}></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckOut cart={cart} price={price}></CheckOut>
            </Elements>
        </div>
    );
};

export default Payment;