import React from "react";
import { Link } from "react-router-dom";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <div className="user_profile" id="user_profile">
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
                <div className="personal_address border-bottom d-flex justify-content-between pb-1 mb-2">
                  <p className="pb-0 mb-0">Personal information</p>
                  <p className="pb-0 mb-0 add_new_address">
                    <Link to="/user_address">Add new Address</Link>
                  </p>
                </div>
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
                    <label for="email" className="form-label">
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                    <label for="email" className="form-label">
                      Date of Birth (day month year)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="birth day"
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
                      Save
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

export default UserProfile;
