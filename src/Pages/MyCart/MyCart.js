import React from 'react';
import DeliveryOptions from '../Components/DeliveryOptions';
import PrepranceTime from '../Components/PrepranceTime';
const MyCart = () => {
    return (
        <div className='mt-5 pt-5'>
            <div class="container custom_cart_page mx-auto">
                <DeliveryOptions></DeliveryOptions>
                <PrepranceTime></PrepranceTime>
                <div class="d-flex align-items-center">
                    <img src="https://icon2.cleanpng.com/20180331/ezq/kisspng-catering-food-computer-icons-logo-event-management-catering-5abf487c5eb658.714031151522485372388.jpg" class="img-fuild" alt="" style={{ width: '1.5rem' }} />
                    <div class="d-flex flex-column ms-3">
                        <span>Ordered From</span>
                        <span style={{ color: 'rgb(244, 111, 34)' }}>Chunk - </span>
                    </div>
                </div>
                <div class="card p-3 px-2 mt-4">
                    <div class="container position-relative py-3" style={{ overflowWrap: 'anywhere' }}>
                        <div class="row" style={{ borderBottom: '1px solid rgb(226, 197, 197)' }}>
                            <div class="col-md-6">
                                <h6 style={{ fontWeight: 'bolder' }}>Cheese Nan </h6>
                                <span style={{ fontSize: '0.7rem', color: 'gray' }}>Toppings: No Toppings</span>
                            </div>
                            <div class="d-flex justify-content-between align-items-center col-md-6 ">
                                <div class="">
                                    <span> Tk. 50</span><span style={{ color: 'rgb(244, 111, 34)', fontSize: '20px', cursor: 'pointer' }}>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"></path><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg></span>
                                    <span>7</span>
                                    <span style={{ color: 'rgb(244, 111, 34)', fontSize: '20px', cursor: 'pointer' }}>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                                        </svg>
                                    </span>
                                </div>
                                <div class="ms-4">
                                    <span>350TK</span>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn-close btn-sm cross"></button>
                    </div>
                    <div class="container position-relative py-3" style={{ overflowWrap: 'anywhere' }}>
                        <div class="row" style={{ borderBottom: '1px solid rgb(226, 197, 197)' }}>
                            <div class="col-md-6">
                                <h6 style={{ fontWeight: 'bolder' }}>Cheese Nan </h6><span style={{ fontSize: '0.7rem', color: 'gray' }}>Toppings: Cheese25 tk</span>
                            </div>
                            <div class="d-flex justify-content-between align-items-center col-md-6 ">
                                <div class="">
                                    <span> Tk. 50</span>
                                    <span style={{ color: 'rgb(244, 111, 34)', fontSize: '20px', cursor: 'pointer' }}>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"></path><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg>
                                    </span>
                                    <span>7</span>
                                    <span style={{ color: 'rgb(244, 111, 34)', fontSize: '20px', cursor: 'pointer' }}>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path></svg>
                                    </span>
                                </div>
                                <div class="ms-4">
                                    <span>525TK</span>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn-close btn-sm cross">
                        </button>
                    </div>
                    <div class="container position-relative py-3" style={{ overflowWrap: 'anywhere' }}>
                        <div class="row" style={{ borderBottom: '1px solid rgb(226, 197, 197)' }}>
                            <div class="col-md-6">
                                <h6 style={{ fontWeight: 'bolder' }}>Cheese Nan </h6>
                                <span style={{ fontSize: '0.7rem', color: 'gray' }}>Toppings: Cheese25 tk</span>
                            </div>
                            <div class="d-flex justify-content-between align-items-center col-md-6 ">
                                <div class="">
                                    <span> Tk. 50</span>
                                    <span style={{ color: 'rgb(244, 111, 34)', fontSize: ' 20px', cursor: 'pointer' }}>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"></path><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg>
                                    </span>
                                    <span>7</span>
                                    <span style={{ color: 'rgb(244, 111, 34)', fontSize: '20px', cursor: 'pointer' }}>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                                        </svg>
                                    </span>
                                </div>
                                <div class="ms-4">
                                    <span>525TK</span>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn-close btn-sm cross"></button>
                    </div>
                    <div class="py-3" style={{ borderBottom: '1px solid rgb(226, 197, 197)' }}>
                        <div class="d-flex justify-content-between align-items-center">
                            <span style={{ fontSize: '0.9rem', color: 'gray' }}>Food Price</span>
                            <span style={{ fontSize: '0.9rem', color: 'gray' }}>Tk. 1400</span>
                        </div>
                        <div class="d-flex justify-content-between align-items-center"><span style={{ fontSize: '0.9rem', color: 'gray' }}>Delivery Fee</span>
                            <span style={{ fontSize: '0.9rem', color: 'gray' }}>Tk. 50</span>
                        </div>
                    </div>
                    <div class="pt-3">
                        <div class="d-flex justify-content-between align-items-center"><span style={{ fontSize: '1.1rem', color: 'black' }}>Total</span>
                            <div class="d-flex flex-column">
                                <span style={{ fontSize: '1.1rem', color: 'orangered' }}>1450</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container my-5">
                <form>
                    <div class="row">
                        <div class="col-md-3">
                            <h5 class="pb-2" style={{ fontWSeight: '500' }}>Payment Methods</h5>
                            <div class="methods">
                                <div class="method-container temporary_hide">
                                    <div class="method">
                                        <img src="https://static.hungrynaki.com/hungrynaki-v4/icons/payment-gateways/card.svg" alt="" />
                                        <p>Online Payment</p>
                                    </div>
                                </div>
                                <div class="method-container">
                                    <div class="method">
                                        <img src="https://static.hungrynaki.com/hungrynaki-v4/icons/payment-gateways/cash.svg" alt="" />
                                        <p class="my-auto">Cash on delivery</p>
                                    </div>
                                </div>
                                <div class="method-container temporary_hide">
                                    <div class="method">
                                        <img src="https://static.hungrynaki.com/hungrynaki-v4/icons/payment-gateways/mobile.svg" alt="" />
                                        <p>Mobile Payment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-9"><h5 class="pb-2" style={{ fontWeight: '500' }}>Delivery Method</h5>
                            <div class="row">
                                <div class="col-md-5 address-container wrap" style={{ padding: '0px 0.75rem' }}>
                                    <div class="address pointer">
                                        <p class="category bold text-ellipsis">Select Delivery Address</p>
                                        <p class="receiver text-ellipsis">Method: Today Delivery </p>
                                        <p class="phone text-ellipsis pt-1"> Receiver Name: Antor </p>
                                        <p class="phone text-ellipsis">+8801986297080</p>
                                        <p class="grey text-ellipsis"><span class="bold">Deliver To: Mirpur</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-6 address-container temporary_hide">
                                    <div class="address pointer">
                                        <p class="category bold text-ellipsis">Today DELIVERY CONTACT LESS</p>
                                        <p class="receiver text-ellipsis">Leave Order at Door or Gate</p>
                                        <p class="phone text-ellipsis">+880</p>
                                        <p class="grey text-ellipsis">
                                            <span class="bold">Deliver To:</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-6 address-container my-3 temporary_hide">
                                    <h5 class="mb-3">Select Delivery Address</h5>
                                    <div class="address pointer add_new_address py-4">
                                        <div class="d-flex justify-content-center align-items-center flex-column">
                                            <span class="text-ellipsis">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z">
                                                    </path>
                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
                                                    </path>
                                                </svg>
                                            </span>
                                            <span class="text-ellipsis">Add New Address</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="mb-3">
                                        <label class="form-label">Name</label>
                                        <input type="text" class="form-control" name="name" required="" value="Antor " />
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="mb-3">
                                        <label class="form-label">Email</label>
                                        <input type="text" class="form-control" name="email" required="" value="antor7080@gmail.com" />
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="mb-3">
                                        <label class="form-label">Address</label>
                                        <input type="text" class="form-control" name="address" required="" value="Mirpur" />
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="mb-3">
                                        <label class="form-label">Phone Number</label>
                                        <div class="form-control border-h-0  PhoneInput">

                                            <input type="tel" autocomplete="tel" placeholder="Enter phone number" required="" class="PhoneInputInput form-control" value="01986-297080" />
                                        </div>
                                        <label class="form-label ps-4">
                                            <span class="text-danger bold">
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-8 offset-md-1">
                                        <button type="submit" class="btn  rider-tip pointer mt-3 py-3 text-white" style={{ background: 'rgb(244, 111, 34)', width: '100%' }}>Place Order. Pay Tk.1450 . Proceed To Online Payment</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 temporary_hide">
                                <div class="rider">
                                    <h5>Encourage Our Delivery Executives</h5>
                                    <p>Our Delivery Executives are real life Superheroes. Your precious contribution will encourage them for being out there at this tough time.</p>
                                </div>
                                <div class="row">
                                    <div class="col-md-4 rider-tip pointer">
                                        <p>BDT 20</p>
                                    </div>
                                    <div class="col-md-4 rider-tip pointer"><p>BDT 30</p>
                                    </div>
                                    <div class="col-md-4 rider-tip pointer">
                                        <p>BDT 50</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 temporary_hide">
                                <h6 class="py-3 blod">Keep the Change</h6>
                                <div class="rider-tip pointer">
                                    <p>BDT 14</p>
                                </div>
                            </div>
                            <div class="col-md-12 order-comments temporary_hide">
                                <textarea rows="3" placeholder="Order Comments">
                                </textarea>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div >
    );
};

export default MyCart;