import React from 'react';
import svg1 from '../../images/svg-1.svg'
import svg2 from '../../images/svg2.svg'
import svg3 from '../../images/sbg3.svg'

const RiderPage = () => {
    return (
        <div>
            <section className="RiderSection">
                <div className="container">
                    <div class="row justify-content-center">
                        <div class="col-xs-12 col-xl-10">
                            <div class="d-flex justify-content-between align-items-center my-3 "><div class="nav_logo">
                                <a href="/">
                                    <img src="/static/media/logo.4ca50020a39a2d15ddea.png" class="img-fluid my-md-0 my-3" alt="" />
                                </a>
                            </div>
                                <h5 class="raider-lag-btn">BN</h5>
                            </div>
                        </div>
                    </div>
                    <div class="row g-3 g-lg-5 mt-4 justify-content-center">
                        <div class="col-xs-12 col-sm-6 col-md-6 col-xl-5  px-0 px-md-5">
                            <div class="p-2">
                                <h3 class="fw-bold">fooddoose</h3>
                                <h5>Join as a raider</h5>
                                <img class="img-fluid" src="https://i.ibb.co/ykpVNch/RiderTop.png" alt="" />
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-6 col-xl-5  px-0 px-md-5">
                            <form class="raider_reg_form p-4 p-lg-5">
                                <h4 class="text-white">Create your profile</h4>
                                <br />
                                <input type="text" class="form-control mt-3 rounded  p-2 raider_district_select" placeholder=" Full Name  " required="" name="name" />
                                <input type="email" class="form-control mt-3 rounded  p-2 raider_district_select" placeholder="Email " required="" name="email" />
                                <input type="text" class="form-control mt-3 rounded  p-2 raider_district_select" placeholder="Personal Number" required="" name="merchant_phone" />

                                <input type="text" class="form-control mt-3 rounded  p-2 raider_district_select" placeholder="Address" required="" name="address" />
                                <input type="password" class="form-control mt-3 rounded  p-2 raider_district_select" placeholder="Password " required="" name="password" />
                                <br /><br />
                                <button type="submit" class="btn raider_form_submit_btn  bg-white">Submit</button>
                            </form>
                        </div>
                        <div class="col-xs-12 col-md-6 col-xl-5  px-0 px-md-5 d-flex align-items-center p-4">
                            <div class="p-3">
                                <h2>Opportunity for better pay</h2>
                                <p class="fs-5">Depending on the delivery you can earn up to 25000 rupees per month! You bring your own motorbike or bicycle</p>
                            </div>
                        </div>
                        <div class="col-xs-12 col-md-6 col-xl-5 px-0 px-md-5">
                            <img class="img-fluid" src="https://i.ibb.co/fp5Dysy/Rider.png" alt="" />
                        </div>
                        {/*   <div class="col-xs-12 col-md-6 col-xl-5 px-0 px-md-5">
                            <img class="img-fluid" src="https://i.ibb.co/fp5Dysy/Rider.png" alt="" />
                        </div>
                        <div class="col-xs-12 col-md-6 col-xl-5  px-0 px-md-5 d-flex align-items-center p-4">
                            <div class="p-3">
                                <h2>Schedule your work hours yourself</h2>
                                <p class="fs-5">Whether you are part-time or full-time, you can choose the time you want to work.</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

            <section class="raider-details pt-5">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xs-12 col-md-6 col-xl-5 px-0 px-md-5 order-lg ">
                            <img class="img-fluid" src="https://i.ibb.co/fp5Dysy/Rider.png" alt="" />
                        </div>
                        <div class="col-xs-12 col-md-6 col-xl-5  px-0 px-md-5 d-flex align-items-center p-4 order-lg-">
                            <div class="p-3">
                                <h2>Schedule your work hours yourself</h2>
                                <p class="fs-5">Whether you are part-time or full-time, you can choose the time you want to work.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row my-5 py-5">
                        <h2 class="text-center mb-4">Additional benefits</h2>
                        <div class="col-12 col-md-4">
                            <div class="text-center p-3 p-md-5">
                                <img width="80px" class="img-fluid mb-3" src={svg1} alt="" />
                                <h5>Performance bonus</h5>
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="text-center p-3 p-md-5">
                                <img width="80px" class="img-fluid mb-3" src={svg2} alt="" />
                                <h5>Freedom to choose the time of work according to one's choice</h5>
                            </div>
                        </div>
                        <div class="col-12 col-md-4">
                            <div class="text-center p-3 p-md-5">
                                <img width="80px" class="img-fluid mb-3" src={svg3} alt="" />
                                <h5>Team events</h5>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-5">
                        <div class="col-xs-12 col-xl-10 mx-auto">
                            <div class="raider-required-card p-2 p-sm-3 p-lg-5 py-4 py-md-0 ">
                                <h2 class="mb-3">All that is required to apply</h2>
                                <ul>
                                    <li>Android phone (4.2 or newer) or iPhone 4S or newer.</li>
                                    <li>Bicycle, scooter or motorbike.</li>
                                    <li>National Identity Card</li>
                                    <li>Must be 18+ years of age</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="rider-testimonial">
                <div class="container">
                    <div class="row my-5 py-5 justify-content-center">
                        <h2 class="text-center mb-4">Testimonials</h2>
                        <div class="col-12 col-sm-6 col-lg-4">
                            <div class="text-center p-3 p-md-5">
                                <img width="100px" class="img-fluid testimonial-user-img mb-3" src="https://i.ibb.co/4dVgFN3/user1.jpg" alt="" />
                                <h3 class="mb-3">Shahriar Hoq Shubho</h3>
                                <h6 class="testimonial-description">Working as a rider in Foodpanda is a big opportunity in my life. Thanks to working here, I make new friends every day and meet new people</h6>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-4">
                            <div class="text-center p-3 p-md-5">
                                <img width="100px" class="img-fluid mb-3 testimonial-user-img" src="https://i.ibb.co/4dVgFN3/user1.jpg" alt="" />
                                <h3 class="mb-3">Azizul Islam is calm</h3>
                                <h6 class="testimonial-description">I have been working at Foodpanda for 4 years and I enjoy working here. And it's not just about making money, but in most cases I can do it very easily.</h6>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-5 pb-5 text-center justify-content-center">
                        <div class="col-xs-12 col-xl-10">
                            <div>
                                <img class="img-fluid mb-3" src="https://i.ibb.co/hVdVVFq/banner.jpg" alt="" />
                                <h3 class="fw-bold mb-3">Start the journey with us.</h3>
                                <h5>Apply now</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RiderPage;