import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import PurchaseBanner from './PurchaseBanner';
import AvailablePurchases from './AvailablePurchases';

const Purchase = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <PurchaseBanner date={date} setDate={setDate}></PurchaseBanner>
            <AvailablePurchases date={date}></AvailablePurchases>
            <Footer></Footer>
        </div>
    );
};

export default Purchase;