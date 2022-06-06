import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../assets/banner/banner1.jpg';
import banner2 from '../../assets/banner/banner2.jpg';
import banner3 from '../../assets/banner/banner3.jpg';


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2 className='text-green-500 text-3xl'>Indonesian Bike Parts And Accessories.. </h2>
                    <p className='text-white text-2xl'>We manufacturers Indonesian motor cycle R15 v3 honda CBR 150r Suzuki GsxR, S Genuine parts and.....</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h2 className='text-primary text-3xl uppercase'>SPARE PARTS  Rasel Industries </h2>
                    <p className='text-white text-2xl'>Clutch plates, Helmets , Tyre , Battery, Air filter, Chain ,Spark plug, Horn, Break, Engine oil, Light, Safety gears and more....</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h2 className='text-orange-600 text-3xl uppercase'>Motorcycle Engine Spare Parts manufacturers </h2>
                    <p className='text-white text-2xl'>
                        Exciting Encyclopedia of Bike Engine Parts Name
                        Cylinder Heads.
                        Cylinders.
                        Pistons.
                        Connecting Rods.
                        Crankshaft.
                        Spark Plugs.
                        Engine Valves.
                        Cooling System...
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
};

export default Banner;