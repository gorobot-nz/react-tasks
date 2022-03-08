import React from 'react';
import { Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CartTable from '../components/CartTable';

const Cart = () => {
    const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

    return (
        <Elements stripe={stripePromise}>
            <CartTable/>
        </Elements>
    )
};

export default Cart;