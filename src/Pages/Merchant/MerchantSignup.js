import React from "react";

const MerchantSignup = () => {
  return (
    <div style={{ paddingTop: '70px' }}>
      <div class="container custom_slider_margin ">
        <div class="text-center w-75 mx-auto">
          <h1 style={{ color: "rgb(244, 111, 34)" }}>
            Create your merchant account today !
          </h1>
          <p>
            Let your employees focus on what's important. We'll take care of the
            food they love.Try our easy, flexible corporate food delivery
            service today.
          </p>
        </div>
        <div class="shadow px-2 p-md-5 mb-5 bg-light rounded  m-5 col-8 mx-auto">
          <div class="mx-auto  col-6 ">
            <h5 class="mb-3">Company Name</h5>
            <form class="row g-3">
              <div class="col-md-12">
                <input
                  type="text"
                  class="form-control p-3"
                  placeholder="Company name  "
                  required=""
                  name="business_name"
                />

                <input
                  type="text"
                  placeholder="bKash Number (Optional) "
                  name="bkash_number"
                  class="form-control p-3  mt-2"
                />

                <input
                  type="text"
                  autocomplete="tel"
                  placeholder="Rocket Number  (Optional) "
                  name="rocket_number"
                  class="form-control p-3 border-h-0 PhoneInput mt-2"
                />
                <input
                  type="tel"
                  autocomplete="tel"
                  placeholder="Nagad Number  (Optional) "
                  name="nagad_number"
                  class="form-control p-3 mt-2"
                />
                <input
                  type="text"
                  class="form-control p-3 mt-2"
                  placeholder="Bank name  (Optional) "
                  name="bank_name"
                />
                <input
                  type="text"
                  class="form-control p-3 mt-2"
                  placeholder="Account Name  (Optional) "
                  name="account_name"
                />
                <input
                  type="text"
                  class="form-control p-3 mt-2"
                  placeholder="Account Number  (Optional) "
                  name="account_number"
                />
                <input
                  type="text"
                  class="form-control p-3 mt-2"
                  placeholder="Payment Method (Optional) "
                  name="payment_method"
                />
              </div>

              <div class="mt-5">
                <h5 class="mb-3">Your details</h5>
                <div class="col-md-12 mb-3">
                  <input
                    type="text"
                    class="form-control p-3"
                    placeholder="Full name "
                    required=""
                    name="merchant_name"
                  />
                </div>
                <div class="col-md-12 mb-3">
                  <input
                    type="email"
                    class="form-control p-3"
                    placeholder="Email"
                    required=""
                    name="email"
                  />
                </div>
                <div class="col-md-12 mb-3">
                  <input
                    type="tel"
                    autocomplete="tel"
                    placeholder="Personal Number"
                    required=""
                    name="merchant_phone"
                    class="form-control p-3"
                  />
                </div>
                <div class="col-md-12 mb-3">
                  <input
                    type="text"
                    class="form-control p-3"
                    placeholder="Address"
                    required=""
                    name="merchant_address"
                  />
                </div>
                <div class="col-md-12 mb-3">
                  <input
                    type="password"
                    class="form-control p-3"
                    placeholder="Password"
                    required=""
                    name="password"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div>
                  <button
                    type="submit"
                    class="btn px-4 ml-md-4 ml-0 mt-md-0 mt-3 text-white"
                    style={{
                      backgroundColor: "rgb(244, 111, 34)",
                      width: "100%",
                    }}
                  >
                    SIGN UP
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantSignup;
