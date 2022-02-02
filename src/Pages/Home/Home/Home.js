import React from 'react';
import Cart from '../../Components/Cart';
import PopularFood from '../../Components/PopularFood';
import PopularResturent from '../../Components/PopularResturent';
import Slider from '../../Components/Slider';
import TopFood from '../../Components/TopFood';
import UnderBanner from '../../Components/UnderBanner';

const Home = () => {
    return (
        <div style={{ paddingTop: '85px' }}>
           { <Cart></Cart>}
            <div className="container">

                <Slider></Slider>
                <UnderBanner></UnderBanner>
                <TopFood></TopFood>
                <PopularFood></PopularFood>
                <PopularResturent></PopularResturent>
            </div>
        </div>
    );
};

export default Home;