import React from "react";
import "./Login.css";

import LoginImg from "../../images/User_Login/login1.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login_area" id="login_area">
        <div className="container">
          <div className="row border py-3 my-3">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="login_inner_left_site">
                <img src={LoginImg} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="login_inner_right_site">
                <div className="login_form">
                  <h2>Log in</h2>
                  <form action="">
                    <div class="input-group mb-3">
                      <button
                        class="dropdown_btn dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        BD +880
                      </button>
                      <ul class="dropdown-menu">
                        <p className="select_country">Select Your Country</p>
                        <li>
                          <a class="dropdown-item" href="#">
                            BD Bangladesh +088
                          </a>
                        </li>
                      </ul>
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Text input with dropdown button"
                        placeholder="Enter Your Phone Number"
                      />
                    </div>
                    <p className="login_alert">
                      <i class="fas fa-exclamation-circle me-sm-2"></i>
                      Enter Phone Number to Log In or Create Account
                    </p>
                    <Link to="/code_from_sms">
                      <button className="login_btn">Log in</button>
                    </Link>
                    <p className="agree">
                      By Logging In you agree to our
                      <Link to="/">
                        <span>Terms & Conditions</span>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
