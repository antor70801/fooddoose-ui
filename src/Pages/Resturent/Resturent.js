import React from 'react';
import resturentImg from '../../images/resturant.jpg';
import logo from '../../images/resturent-logo.png'
import ResturantMenuItems from '../Components/ResturantMenuItems';
import ResturentTopFood from '../Components/ResturentTopFood';

const Resturent = () => {
    return (
        <div className='' style={{ paddingTop: '85px' }}>


            <div class="container-lg mb-5 restaurant_banner">
                <div class="card text-white custom_box_shadow">
                    <img src={resturentImg} class="card-img img-fluid" alt="..." />
                    <div style={{ marginTop: '25%' }} class="card-img-overlay overlay_content d-flex flex-column flex-md-row align-items-center">
                        <img class="me-auto me-md-3 mb-2 img-fluid res-logo" src={logo} alt="" />
                        <div class="">
                            <div class="d-flex">
                                <h5 class="card-title me-2 mb-0">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"></path></g></svg></h5><span><span style={{ backgroundColor: 'rgb(244, 111, 34)', color: 'rgb(255, 255, 255)' }}> <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                                    </svg>
                                    </span>
                                </span>
                            </div>
                            <span class="card-text res-banner-text">Bengali - Indian - Chinese - South Indian - Thai - Biryani - Soups- Rolls-Wrap<span>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></svg></span> Open Now</span></div></div><div class="love_react"><span><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> 200</span></div></div><div class="bg-light p-3 banner_price">
                    <span class="me-3">Delivery Time: <b>Pre Order </b></span><span class="me-3">Min Order: <b>Tk.100</b>
                    </span>
                    <span>Delivery Fee: <b>Tk.19</b></span>

                </div>
                <ResturentTopFood></ResturentTopFood>
                <ResturantMenuItems></ResturantMenuItems>
            </div>

        </div>

    );
};

export default Resturent;