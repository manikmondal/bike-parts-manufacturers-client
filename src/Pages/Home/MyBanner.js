import React from 'react';
import motorcycle from '../../assets/images/motorcycle.jpg'
import PrimaryButton from '../Shared/PrimaryButton';

const MyBanner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src={motorcycle} className="max-w-sm rounded-lg shadow-2xl mr-8" alt="" />
                <div>
                    <h1 className="text-5xl font-bold">Exclusive Motor Bike parts Manufacturers, on Our Teems</h1>
                    <p className="py-6">1.Chassis, 2.Motorcycle Engine
                        3.Motorcycle Transmissions,
                        4.Final Drive,
                        5.Wheels and Tires,
                        6.Body Panels,
                        7.Mudguards,
                        8.Lights,
                        9.Handlebars,
                        10.Footpegs,
                        11.Motorcycle Brakes,
                        12.Exhausts</p>
                    <PrimaryButton>GET STARTED</PrimaryButton>

                </div>
            </div>
        </div>
    );
};

export default MyBanner;