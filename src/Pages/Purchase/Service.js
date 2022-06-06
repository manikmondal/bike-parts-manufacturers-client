import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots, price, description, img } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center items-center">
                <h2 className="text-3xl text-secondary uppercase">{name}</h2>
                <p>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>Service not Available. Try another date..</span>
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'Lot of Quantity' : 'Lot of Quantity'} Available</p>
                <p>Quantity price:$ {price} </p>
                <p><small className='text-green-500'>Description:{description}</small></p>
                <div className="avatar">
                    <div className="avatar online w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn btn-sm btn-secondary text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">place order now</label>
                </div>
            </div>
        </div>
    );
};

export default Service;