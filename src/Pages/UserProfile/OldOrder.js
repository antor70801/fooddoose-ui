import React from "react";
import { Link } from "react-router-dom";
import "./OldOrder.css";
const OldOrder = () => {
  return (
    <div className="user_profile">
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="inner_my_account_left">
              <div className="personal_info">
                <div className="account">
                  <p className="border-bottom pb-1">My Account</p>
                </div>
                <div className="user_info ">
                  <Link to="/user_profile">
                    <i className="far fa-user me-3"></i>
                    <span>Personal information</span>
                  </Link>
                </div>
                <div className="user_home_info pt-2">
                  <Link to="/user_address">
                    <i className="fas fa-house-user me-3"></i>
                    <span>Saved address</span>
                  </Link>
                </div>
                <div className="order_info_area mt-4">
                  <p className="border-bottom pb-1 m-1">Order information</p>
                  <i className="fas fa-folder-open me-3"></i>
                  <span>Old Order</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
            <div className="old_order">
              <div className=" border-bottom pb-1 mb-2">
                <p className="pb-0 mb-0">Your Order</p>
              </div>
              <div className="single_order_area">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="inner_old_order">
                      <h5>Order: P09990</h5>
                      <p>Order Date: 15 jan 2022 12.15 PM</p>
                      <p>Total: 220 tk </p>
                      <button className="order_now_btn">Order Now</button>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="inner_old_order">
                      <button className="processing_btn">Processing</button>
                      <p>Possible delivery time Will be notified soon</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="inner_old_order text-end">
                      <button className="order_details">Order Details</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single_order_area">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="inner_old_order">
                      <h5>Order: P09990</h5>
                      <p>Order Date: 15 jan 2022 12.15 PM</p>
                      <p>Total: 220 tk </p>
                      <button className="order_now_btn">Order Now</button>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="inner_old_order">
                      <button className="processing_btn">Processing</button>
                      <p>Possible delivery time Will be notified soon</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="inner_old_order text-end">
                      <button className="order_details">Order Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldOrder;
