import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css/pagination"

/* import "./styles.css"; */


// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);


const slideData = [
    {
        id: "1",
        name: 'Demo1',
        comapny: 'chilox',
        remaining: '2 days remaining',
        img: "https://static.hungrynaki.com/hungrynaki-v4/deals/january_2022/deal_banner_1642431811248.jpeg"
    }
    , {
        id: "1",
        name: 'Demo1',
        comapny: 'chilox',
        remaining: '2 days remaining',
        img: 'https://static.hungrynaki.com/hungrynaki-v4/deals/january_2022/deal_banner_1641990600264.jpeg'
    }
    , {
        id: "1",
        name: 'Demo1',
        comapny: 'chilox',
        remaining: '2 days remaining',
        img: 'https://static.hungrynaki.com/hungrynaki-v4/deals/january_2022/deal_banner_1641990811040.jpeg'
    }
    , {
        id: "1",
        name: 'Demo1',
        comapny: 'chilox',
        remaining: '2 days remaining',
        img: 'https://static.hungrynaki.com/hungrynaki-v4/deals/january_2022/deal_banner_1641990811040.jpeg'
    }
    , {
        id: "1",
        name: 'Demo1',
        comapny: 'chilox',
        remaining: '2 days remaining',
        img: 'https://static.hungrynaki.com/hungrynaki-v4/deals/january_2022/deal_banner_1641876917161.jpeg'
    }
    , {
        id: "1",
        name: 'Demo1',
        comapny: 'chilox',
        remaining: '2 days remaining',
        img: 'https://static.hungrynaki.com/hungrynaki-v4/deals/january_2022/deal_banner_1641812541490.jpeg'
    }
    , {
        id: "1",
        name: 'Demo1',
        comapny: 'chilox',
        remaining: '2 days remaining',
        img: 'https://static.hungrynaki.com/hungrynaki-v4/deals/january_2022/deal_banner_1641901205427.jpeg'
    }
    , {
        id: "1",
        name: 'Demo1',
        comapny: 'chilox',
        remaining: '2 days remaining',
        img: 'https://static.hungrynaki.com/hungrynaki-v4/deals/january_2022/deal_banner_1641704378700.jpeg'
    }
    , {
        id: "1",
        name: 'Demo1',
        comapny: 'chilox',
        remaining: '2 days remaining',
        img: 'https://static.hungrynaki.com/hungrynaki-v4/deals/january_2022/deal_banner_1641442276306.jpeg'
    }
    , {
        id: "1",
        name: 'Demo1',
        comapny: 'chilox',
        remaining: '2 days remaining',
        img: "https://static.hungrynaki.com/hungrynaki-v4/deals/january_2022/deal_banner_1641441899974.jpeg"
    }
]

const UnderBanner = () => {
    return (
        <div className='my-5'>
            <div className='mx-auto'>
                <Swiper slidesPerView={4} spaceBetween={5} slidesPerGroup={1} loop={true} navigation={true}
                    breakpoints={{
                        240: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },
                        768: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                        1024: {
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                        },
                    }}
                    className="mySwiper">
                    {slideData.map(data => <SwiperSlide>
                        <div className='slider_div'>
                            <span>{data.remaining}</span>
                            <div className='resturantName'>
                                {data.name}
                            </div>
                            <img className='img-fluid' src={data.img} alt="" />
                        </div>
                    </SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    );
};

export default UnderBanner;