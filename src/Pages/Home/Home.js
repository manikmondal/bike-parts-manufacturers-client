import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Info from './Info';
import MyBanner from './MyBanner';
import Product from './Product';
import Services from './Services';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Product></Product>
            <Services></Services>
            <MyBanner></MyBanner>
            <Info></Info>
            <Footer></Footer>
        </div>
    );
};

export default Home;