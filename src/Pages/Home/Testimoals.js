import React from 'react';
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'spark plug',
            review: '5.0 star',
            location: 'Bangladesh',
            img: "https://api.lorem.space/image/face?hash=47449"
        },
        {
            _id: 2,
            name: 'chain-sprocket',
            review: '4.8 star',
            location: 'china',
            img: "https://api.lorem.space/image/face?hash=55350"
        },
        {
            _id: 3,
            name: 'Brake Pad',
            review: '4.7 star',
            location: 'India',
            img: "https://api.lorem.space/image/face?hash=60857"
        },
    ];
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>

        </section>
    );
};

export default Testimonials;