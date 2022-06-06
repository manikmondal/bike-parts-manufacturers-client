import React from 'react';
import Service from './Service';
import customers from '../../assets/images/Customer.png';
import revenue from '../../assets/images/revenue.png';
import tools from '../../assets/images/tools.png';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'customers',
            description: '120+K customers',
            img: customers
        },
        {
            _id: 2,
            name: 'Annual revenue',
            description: '135M+',
            img: revenue
        },
        {
            _id: 3,
            name: 'Tools Items',
            description: '30+ tools',
            img: tools
        },
    ]
    return (
        <div className='my-20'>
            <div className='text-center my-10'>
                <h2 className='text-primary text-6xl font-extrabold uppercase'>Our Business summary</h2>
            </div>
            <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;