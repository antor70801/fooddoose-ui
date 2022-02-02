import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from '../../images/cover1.jpg'
import img2 from '../../images/cover2.jpg'
import img3 from '../../images/cover3.jpg'
import 'swiper/css';

const Slider = () => {
    return (
        <div>
            <>
                <Swiper
                    
                    className="mySwiper">
                    <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={img3} alt="" /></SwiperSlide>

                </Swiper>
            </>
        </div>
    );
};

export default Slider;