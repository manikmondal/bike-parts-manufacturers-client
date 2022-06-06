import React from 'react';
import Footer from '../Shared/Footer';
import Contact from './Contact';
import Testimonials from './Testimoals';

const ReviewItem = () => {
    return (
        <div>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default ReviewItem;