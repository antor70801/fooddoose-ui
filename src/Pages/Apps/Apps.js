import React from 'react';
import './Apps.css'

const Apps = () => {
  return (
    <main>



      <div class="main-body-div">
        {/* <!-- Top Start --> */}
        <section class="top-start">
          <div class="container ">
            <div class="row">
              <div class="row col-lg-7 top-content">
                <div>
                  <h3 class="d-flex justify-content-center justify-content-md-start text-center text-md-left">
                    aFood
                  </h3>
                  <span class="d-flex justify-content-center justify-content-md-start text-center text-md-left">
                    Order from afood, we will deliver to your doorstep
                  </span>
                  <h4 class="d-flex justify-content-center justify-content-md-start text-center text-md-left">
                    Get 10% OFF on your first order
                  </h4>
                </div>

                <div class="download-buttons">
                  <div class="play-store">
                    <a href="https://play.google.com/store/apps/details?id=com.afood.app">
                      <img src="https://afood.aphelin.com/public/assets/landing/image/play_store.png" />
                    </a>
                  </div>
                  <div class="apple-store">
                    <a href="https://food.aphelin.com">
                      <img src="https://afood.aphelin.com/public/assets/landing/image/apple_store.png" />
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-lg-5 d-flex justify-content-center justify-content-md-end text-center text-md-right top-image">
                <img src="https://afood.aphelin.com/public/assets/landing/image/2021-11-18-61956491df0a0.png" />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Top End --> */}

        {/* <!-- About Us Start --> */}
        <section class="about-us">
          <div class="container">
            <div class="row featured-section">
              <div class="col-12 featured-title-m">
                <span>About us</span>
              </div>
              <div class="col-lg-6 col-md-6  d-flex justify-content-center justify-content-md-start text-center text-md-left featured-section__image">
                <img src="https://afood.aphelin.com/public/assets/landing/image/2021-11-18-61956491df20b.png" />
              </div>
              {/* <!-- <div class="col-lg-3 col-md-0"></div> --> */}
              <div class="col-lg-6 col-md-6">
                <div class="featured-section__content">
                  <span>About us</span>
                  <h2 class="d-flex justify-content-center justify-content-md-start text-center text-md-left">
                    aFood is Best Delivery Service Near You</h2>
                  <p class="d-flex justify-content-center justify-content-md-start text-center text-md-left">
                  </p><p>We are AphelinFood</p>

                  <p>AphelinFood is sister concern of <a href="https://www.aphelin.com/about-us" target="_blank">Aphelin</a>.</p>

                  <p>We want to build a digital Keraniganj with you,&nbsp;...
                  </p>
                  <div class="d-flex justify-content-center justify-content-md-start text-center text-md-left">
                    <a href="https://afood.aphelin.com/about-us" class="btn btn-color-primary text-white rounded align-middle">Read More...</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- About Us End --> */}

        {/* <!-- Why Choose Us Start --> */}
        <section class="why-choose-us">
          <div class="container">
            <div class="row choosing-section">
              <div class="choosing-section__title">
                <div>
                  <h2>Why Choose Us?</h2>
                  <span>We believe in good service</span>
                  <hr class="customed-hr-1" />
                </div>
              </div>
              <div class="choosing-section__content">
                <div>
                  <div class="choosing-section__image-card">
                    <img src="https://afood.aphelin.com/public/assets/landing/image/clean_&amp;_cheap_icon.png" />
                  </div>
                  <div style={{margin: "0px 55px 30px 54px"}}>
                    <p>Clean &amp; Cheap Price</p>
                  </div>
                </div>
                <div>
                  <div class="choosing-section__image-card">
                    <img src="https://afood.aphelin.com/public/assets/landing/image/best_dishes_icon.png" />
                  </div>
                  <div style={{margin: "0px 55px 30px 54px"}}>
                    <p>Best Dishes Near You</p>
                  </div>
                </div>
                <div>
                  <div class="choosing-section__image-card">
                    <img src="https://afood.aphelin.com/public/assets/landing/image/virtual_restaurant_icon.png" />
                  </div>
                  <div style={{margin: "0px 55px 30px 54px"}}>
                    <p>Your Own Virtual Restaurant</p>
                  </div>
                </div>
                {/* <!-- <div>
                                <div class="choosing-section__image-card">
                                    <img src="https://afood.aphelin.com/public/assets/landing/image/best_dishes_icon.png"/></img>
                                </div>
                                <div style="margin: 0px 54px 30px 55px">
                                    <p>Best Dishes Near You</p>
                                </div>
                            </div>

                            <div>
                                <div class="choosing-section__image-card">
                                    <img
                                        src="https://afood.aphelin.com/public/assets/landing/image/virtual_restaurant_icon.png"/></img>
                                </div>
                                <div style="margin: 0px 31px 30px 31px">
                                    <p>Your Own Virtual Restaurant</p>
                                </div>
                            </div> --> */}
              </div>
            </div>
          </div>

        </section>
        {/* <!-- Why Choose Us End --> */}
        {/* <!-- Trusted Customers Starts --> */}
        <section class="trusted-customers">
          <div class="container">
            <div class="trusted_customers__title">
              <span class="trusted-customer mt-4" style={{fontSize: "33px"}}>Trusted by Customer &amp; Restaurant Owner</span>
            </div>

            <div class="mt-5">
              <div class="demo">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12">
                      <div id="testimonial-slider" class="owl-carousel owl-theme" style={{opacity: "1", display: "block"}}>
                        <div class="owl-wrapper-outer"><div class="owl-wrapper" style={{width: "1050px", left: "0px", display: "block", transition: "all 1000ms ease 0s", transform: "translate3d(0px, 0px, 0px)"}}><div class="owl-item" style={{width: "525px"}}><div class="testimonial">
                          <div class="pic">
                            <img src="https://afood.aphelin.com/public/assets/landing/image/2021-11-18-619564845cc4b.png" alt="" />
                          </div>
                          <div class="testimonial-content">
                            <h3 class="testimonial-title">
                              Robin Khan
                              <small class="post">Business Man</small>
                            </h3>
                            <p class="description">
                              aFood is doing great job, now i can order food from my home
                            </p>
                          </div>
                        </div></div></div></div>
                        <div class="owl-controls clickable" style={{display: "none"}}><div class="owl-pagination"><div class="owl-page"><span class=""></span></div></div></div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Trusted Customers Ends --> */}
      </div>
    </main>
  );
};

export default Apps;