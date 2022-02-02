import React from "react";
import "./TrackOrder.css";

const TrackOrder = () => {
  return (
    <div className="track_order">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 py-3">
            <div className="inner_track_order_left_top">
              <h4>track order</h4>
            </div>
            <div className="inner_track_order_left_bottom">
              <p>Tracking ID</p>
              <p>21A999H0009</p>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 py-3">
            <div className="inner_track_order_left_top">
              <h5 className="text-center m-0">
                <i class="far fa-flag text-danger me-2"></i> Raise an Issue
              </h5>
            </div>
            <div className="inner_track_order_left_bottom">
              <div className="delivery_information">
                <ul>
                  <li className="delivery_list">
                    <i className="fa fa-check"></i>
                    <div>
                      <p>Parcel Delivery successful</p>
                      <p>jan. 24th 2022 08:14 pm</p>
                    </div>
                  </li>
                  <li className="delivery_list uncheck">
                    <i className="fa fa-check"></i>
                    <div>
                      <p>
                        Parcel Delivery successful test for uncheck list. ok its
                        working.
                      </p>
                      <p>jan. 24th 2022 08:14 pm</p>
                    </div>
                  </li>
                  <li className="delivery_list uncheck">
                    <i className="fa fa-check"></i>
                    <div>
                      <p>Parcel Delivery successful</p>
                      <p>jan. 24th 2022 08:14 pm</p>
                    </div>
                  </li>
                  <li className="delivery_list uncheck">
                    <i className="fa fa-check"></i>
                    <div>
                      <p>Parcel Delivery successful</p>
                      <p>jan. 24th 2022 08:14 pm</p>
                    </div>
                  </li>
                  <li className="delivery_list uncheck">
                    <i className="fa fa-check"></i>
                    <div>
                      <p>Parcel Delivery successful</p>
                      <p>jan. 24th 2022 08:14 pm</p>
                    </div>
                  </li>
                  <li className="delivery_list uncheck">
                    <i className="fa fa-check"></i>
                    <div>
                      <p>Parcel Delivery successful</p>
                      <p>jan. 24th 2022 08:14 pm</p>
                    </div>
                  </li>
                  <li className="delivery_list uncheck">
                    <i className="fa fa-check"></i>
                    <div>
                      <p>Parcel Delivery successful</p>
                      <p>jan. 24th 2022 08:14 pm</p>
                    </div>
                  </li>
                  <li className="delivery_list uncheck">
                    <i className="fa fa-check"></i>
                    <div>
                      <p>Parcel Delivery successful</p>
                      <p>jan. 24th 2022 08:14 pm</p>
                    </div>
                  </li>
                  <li className="delivery_list uncheck">
                    <i className="fa fa-check"></i>
                    <div>
                      <p>Parcel Delivery successful</p>
                      <p>jan. 24th 2022 08:14 pm</p>
                    </div>
                  </li>
                  <li className="delivery_list uncheck">
                    <i className="fa fa-check"></i>
                    <div>
                      <p>Parcel Delivery successful</p>
                      <p>jan. 24th 2022 08:14 pm</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 py-3">
            <div className="inner_track_order_left_top">
              <h4>Customer and Order Details information </h4>
            </div>
            <div className="inner_track_order_left_bottom customer_details_info">
              <div className="parcel_id">
                <p>Parcel ID</p>
                <p>21A999H0009</p>
              </div>
              <div className="customer_address">
                <p>Customer Address</p>
                <h5>Dhaka Bangladesh</h5>
              </div>
              <div className="customer_phone">
                <p>Customer Phone</p>
                <h5>+88 123 456 7890</h5>
              </div>
              <div className="customer_name">
                <p>Customer Name</p>
                <h5>Abdullah Al Mamun</h5>
              </div>
              <div className="area">
                <p>Area</p>
                <h5>Dhaka</h5>
              </div>
              <div className="weight">
                <p>Weight</p>
                <h5>500</h5>
              </div>
              <div className="price">
                <p>Price</p>
                <h5>999</h5>
              </div>
              <div className="delivery_charge">
                <p>Delivery Charge</p>
                <h5>130</h5>
              </div>
              <div className="cod_charge">
                <h5>COD Charge</h5>
                <p>6.75</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
