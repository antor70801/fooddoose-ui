import React from "react";
import "./CodeFromSMS.css";
import LoginImg from "../../../images/User_Login/login1.png";
import { Link } from "react-router-dom";
import GoogleIMG from "../../../images/User_Login/google.png";
const CodeFromSMS = () => {
  return (
    <>
      <div className="code_from_sms">
        <div className="container">
          <div className="row border py-3 my-3 ">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="inner_code_left">
                <img src={LoginImg} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="inner_code_right">
                <h2>Enter Code From SMS</h2>
                <div className="code_box">
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                </div>
                <p className="mt-2">
                  We have sent an SMS to: +880 1234 567 890
                  <span> Edit number</span>
                </p>
                <p className="login_alert ">
                  <i class="fas fa-exclamation-circle me-sm-2"></i>
                  Enter the Code Sent via SMS
                </p>
                <p className="login_alert text-danger">
                  <i class="fas fa-exclamation-circle me-sm-2"></i>
                  Invalid Opt
                </p>
                <p>Trouble With OTP Call US 09678454545</p>
                <button className="resend_otp">Resend Otp</button>
                <button className="phone_verify">verify</button>
                <div className="google_login">
                  <img src={GoogleIMG} alt="" />
                  <p>Continue with Google</p>
                </div>
                <p className="agree text-center">
                  By Logging In you agree to our
                  <Link to="/">
                    <span>Terms & Conditions</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeFromSMS;
