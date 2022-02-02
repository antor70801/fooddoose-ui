import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination"
import SwiperCore, {
    Pagination
} from 'swiper';
SwiperCore.use([Pagination]);

const slideData = [
    {
        id: "1",
        time: ' Order Right Now'
    },
    {
        id: "2",
        time: '3:30 PM - 4:00 PM '
    },

    {
        id: "3",
        time: '3:30 PM - 4:00 PM '
    },

    {
        id: "4",
        time: '3:30 PM - 4:00 PM '
    },

    {
        id: "40",
        time: '3:30 PM - 4:00 PM '
    },

    {
        id: "5",
        time: '3:30 PM - 4:00 PM '
    },

    {
        id: "6",
        time: '3:30 PM - 4:00 PM '
    },

    {
        id: "7",
        time: '3:30 PM - 4:00 PM '
    },

    {
        id: "8",
        time: '3:30 PM - 4:00 PM '
    },

    {
        id: "9",
        time: '3:30 PM - 4:00 PM '
    },

    {
        id: "10",
        time: '3:30 PM - 4:00 PM '
    },

    {
        id: "11",
        time: '3:30 PM - 4:00 PM '
    },

]

const Tomorrow = [

    {
        id: "1",
        time: '3:30 PM - 4:00 PM '
    },

    {
        id: "3",
        time: '3:30 PM - 4:00 PM '
    },

    {
        id: "4",
        time: '3:30 PM - 4:00 PM '
    },

    {
        id: "40",
        time: '3:30 PM - 4:00 PM '
    },

    {
        id: "5",
        time: '3:30 PM - 4:00 PM '
    },

    {
        id: "6",
        time: '3:30 PM - 4:00 PM '
    },

    {
        id: "7",
        time: '3:30 PM - 4:00 PM '
    },

    {
        id: "8",
        time: '3:30 PM - 4:00 PM '
    },

    {
        id: "9",
        time: '3:30 PM - 4:00 PM '
    },

    {
        id: "10",
        time: '3:30 PM - 4:00 PM '
    },

    {
        id: "11",
        time: '3:30 PM - 4:00 PM '
    },

]

const PrepranceTime = () => {
    const [select, setSelect] = useState(true);
    const [Id, setId] = useState('1')
    const handleClick = (id) => {
        setSelect(true)
        setId(id)
    }
    return (
        <div>
            <div className='py-5 px-3 bg-light'>
                <h4 className=''>Preprance Time</h4>
                <ul class="nav nav-pills mb-3 " id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link px-5 fw-bold active" id="Today-tab" data-bs-toggle="tab" data-bs-target="#Today" type="button" role="tab" aria-controls="Today" aria-selected="true">Today</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link fw-bold" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Tomorrow</button>
                    </li>

                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="Today" role="tabpanel" aria-labelledby="Today-tab">
                        <Swiper slidesPerView={10} spaceBetween={10} slidesPerGroup={1} loop={false} navigation={true}
                            breakpoints={{
                                240: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 2,
                                },
                                1024: {
                                    slidesPerView: 6,
                                    slidesPerGroup: 1,
                                },
                            }}
                            className="mySwiper">
                            {slideData.map(data => <SwiperSlide>
                                <div className='slider_div w-100 '>

                                    <div style={{ margin: "0px" }} type="button" onClick={() => { handleClick(data.id) }} className={(Id === data.id) && select ? 'w-100 btn activee fw-bold' : 'fw-bold  btn '}>
                                        {data.time}
                                    </div>

                                </div>
                            </SwiperSlide>)}
                        </Swiper>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div class="tab-pane fade show active" id="Today" role="tabpanel" aria-labelledby="Today-tab">
                            <Swiper slidesPerView={10} spaceBetween={10} slidesPerGroup={1} loop={false} navigation={true}
                                breakpoints={{
                                    240: {
                                        slidesPerView: 2,
                                        slidesPerGroup: 1,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        slidesPerGroup: 2,
                                    },
                                    1024: {
                                        slidesPerView: 6,
                                        slidesPerGroup: 1,
                                    },
                                }}
                                className="mySwiper">
                                {Tomorrow.map(data => <SwiperSlide>
                                    <div className='slider_div w-100'>

                                        <div style={{ margin: "0px" }} type="button" onClick={() => { handleClick(data.id) }} className={(Id === data.id) && select ? ' w-100 btn activee fw-bold' : 'fw-bold  btn '}>
                                            {data.time}
                                        </div>
                                    </div>
                                </SwiperSlide>)}
                            </Swiper>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PrepranceTime;