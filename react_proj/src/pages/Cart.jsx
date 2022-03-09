import React from 'react';
import { Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CartTable from '../components/CartTable';

const Cart = () => {
    const stripePromise = loadStripe('pk_test_51KM8UWD5oBk3DmS9OTO6TRwyDHetko1QtTh32u83kmV35nCCpdjsIOfJQZxpwSvPhGY7YOJZHWlPVOStk1SubBn5004A8x6HT8');

    return (
        <Elements stripe={stripePromise}>
            <CartTable/>
        </Elements>
    )
};

export default Cart;