import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const CheckOut = ({ cart, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext)
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState(false);
    const [transaction, setTransaction] = useState('')
    const jwtToken = localStorage.getItem('secret-token')


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${jwtToken}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price, jwtToken]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('[error]', error);
            setCardError(error)
        } else {
            setCardError('')
            console.log('[PaymentMethod]', paymentMethod);
        }
        setLoading(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email,
                        name: user?.displayName,
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError);
        }
        setLoading(false)

        console.log(paymentIntent);
        if (paymentIntent.status === "succeeded") {
            const transactionId = paymentIntent.id;
            setTransaction(transactionId)
            const payment = {
                transactionId,
                price,
                email: user?.email,
                itemName: cart.map(item => item.name)
            }
            fetch("http://localhost:5000/payments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${jwtToken}`
                },
                body: JSON.stringify(payment),
            })
                .then((res) => res.json())
                .then((data) => console.log(data));
        }
    }



    return (
        <div>
            <form className="w-2/3 mx-auto" onSubmit={handleSubmit}>
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
                <button className="btn btn-primary mt-4" type="submit" disabled={!stripe || !clientSecret || loading}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className="text-red-600">{cardError.message}</p>
            }
            {
                transaction && <p className="text-green-600">{transaction}</p>
            }
        </div>
    );
};

export default CheckOut;