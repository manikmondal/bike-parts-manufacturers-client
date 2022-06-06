import React from 'react';
import parts from '../../assets/images/Parts.jpg'
import PrimaryButton from '../Shared/PrimaryButton';

const Product = () => {
    return (
        <div className="my-20">
            <div className='text-center my-10'>
                <h1 className='text-primary text-6xl font-bold uppercase'>our manufacturer parts</h1>
            </div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={parts} className="max-w-sm rounded-lg shadow-2xl" alt="" />
                <div>
                    <h1 className="text-5xl font-bold">Motorcycle parts manufacturers Here!</h1>
                    <p className="py-6">CBF provides a rich selection of high-grade custom motorcycle parts for most branded models. We can provide competitively priced motorcycle components and can complete bulk orders with a short lead-time thanks to our stable supply chain and scientific warehouse management system.</p>
                    <PrimaryButton>GET STARTED</PrimaryButton>
                </div>

            </div>
        </div>
    );
};

export default Product;