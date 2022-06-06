import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0kb9Ek2CDcWO6p65KPDSBmPtcY0K9HQErQogudR33MCK1KJHUnk0pAMqNGUiXNqWaBr3nAFsKzUlbxNnlDrBsR00iLTIV3Bd');

const Payment = () => {
    const { id } = useParams();
    const url = `https://still-escarpment-91401.herokuapp.com/booking/${id}`

    const { data: purchase, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>

            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <h2 className="text-success text-3xl">Hello, {purchase.patientName}</h2>
                    <h2 className="card-title">Please Pay for {purchase.treatment}</h2>
                    <p>We will see you on {purchase.date} at {purchase.slot}</p>
                    <p>Please Pay: ${purchase.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm purchase={purchase} />
                    </Elements>

                </div>
            </div>

        </div>
    );
};

export default Payment;