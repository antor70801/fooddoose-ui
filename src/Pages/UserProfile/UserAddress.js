import React from "react";
import { Link } from "react-router-dom";
import "./UserAddress.css";

const UserAddress = () => {
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
                  <Link to="/old_order">
                    <i className="fas fa-folder-open me-3"></i>
                    <span>Old Order</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
            <div className="inner_my_account_right">
              {/* <h6>Personal information</h6>  */}
              <div className="user_form">
                <p className="border-bottom pb-1 mb-4">Add new Address</p>
                <form>
                  <div className="mb-3 form_details">
                    <label for="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                    <label for="email" className="form-label">
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                    <label for="" className="form-label">
                      Address
                    </label>
                    <textarea name="" id=""></textarea>
                    <label for="number" className="form-label">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="number"
                      placeholder="Phone"
                      required
                    />
                    <label for="number" className="form-label">
                      Phone (Optional)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="number"
                      placeholder="Phone"
                      required
                    />
                  </div>

                  <div className="user_identify">
                    <div className="mb-3 form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="male"
                      />
                      <label className="form-check-label" htmlFor="male">
                        MALE
                      </label>
                    </div>
                    <div className="mb-3 form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="female"
                      />
                      <label className="form-check-label" htmlFor="female">
                        FEMALE
                      </label>
                    </div>
                    <div className="mb-3 form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="other"
                      />
                      <label className="form-check-label" htmlFor="other">
                        OTHER
                      </label>
                    </div>
                  </div>
                  <p>Photo</p>
                  <div className="photo_upload_box">
                    <input type="file" className="file_upload" id="formFile" />
                  </div>
                  <div className="submit_user_info">
                    <button type="submit" className="">
                      Add Now
                    </button>
                    <button type="submit" className="ms-2">
                      Delete
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAddress;
