import React from 'react';
import InfoCard from './InfoCard';
import delivery from '../../assets/icons/delivery.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import happy from '../../assets/icons/happy.svg'


const Info = () => {
    return (
        <div className='my-20' >
            <div className='text-center my-10'>
                <h1 className='text-primary text-3xl font-extrabold uppercase'> Our
                    Contact and Reviews</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 '>
                <InfoCard cardTitle="Complete Delivery Product" cardBody="670+" bgClass="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" img={delivery} ></InfoCard>
                <InfoCard cardTitle="Visit our location" cardBody="Beijing Fortune Building 5 Dong San Huan Bei Lu, Chaoyang District Beijing 100004, China." bgClass="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" img={marker} ></InfoCard>
                <InfoCard cardTitle="Contact us now" cardBody="Tel: 86 (10) 5866 1888. Fax: 86 (10) 5866 1800." bgClass="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" img={phone} ></InfoCard>
                <InfoCard cardTitle="Happy Client" cardBody="720K" bgClass="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" img={happy} ></InfoCard>
            </div>
        </div>

    );
};

export default Info;