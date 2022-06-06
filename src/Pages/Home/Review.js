import React from 'react';


const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-6">
                            <img src={review.img} alt="" />
                        </div>
                        <div>
                            <h4 className='text-xl'>{review.name}</h4>
                            <p>{review.location}</p>
                            <h3>{review.review}</h3>
                            <div className="rating rating-md">
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;