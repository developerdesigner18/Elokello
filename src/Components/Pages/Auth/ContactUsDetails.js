import React from "react";
import "./ContactUs.css";
import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
const ContactUsDetails = () => {
  return (
    <>
      <div className="at_AuthPage">
        <div className="at_AuthTitle">Create New Account</div>
        <div className="at_messageBox">
          <div className="at_row">
            <div className="at_inputFieldClass col-lg-12 col-md-12 col-sm-12">
              <div className="at_inputBox">
                <label className="at_inputFieldTitle">Username</label>
                <div className="at_inputCover">
                  <input
                    className="at_inputValue"
                    type="text"
                    placeholder="Enter your user name"
                  />
                </div>
              </div>
            </div>
            <div className="at_inputFieldClass col-lg-12 col-md-12 col-sm-12">
              <div className="at_inputBox">
                <label className="at_inputFieldTitle">Email</label>
                <div className="at_inputCover">
                  <input
                    className="at_inputValue"
                    type="text"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
            </div>

            <div className="at_inputFieldClass col-lg-12 col-md-12 col-sm-12">
              <div className="at_inputBox">
                <label className="at_inputFieldTitle">Password</label>
                <div className="at_inputCover">
                  <input
                    className="at_inputValue"
                    type="text"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
            </div>
            <div className="at_inputFieldClass col-lg-12 col-md-12 col-sm-12">
              <div className="at_inputBox">
                <label className="at_inputFieldTitle">Confirm Password</label>
                <div className="at_inputCover">
                  <input
                    className="at_inputValue"
                    type="text"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="at_AuthAction">
            Sign Up <BsArrowUpRight className="BsArrowUpRight" />
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUsDetails;
