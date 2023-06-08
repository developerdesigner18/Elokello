import React from "react";
import "../Auth.css";
import { BsArrowUpRight } from "react-icons/bs";
const LoginDetails = () => {
  return (
    <>
      <div className="at_AuthPage">
        <div className="at_AuthTitle">Welcome Back</div>
        <div className="at_messageBox">
          <div className="at_row">
            <div className="at_inputFieldClass col-lg-12 col-md-12 col-sm-12">
              <div className="at_inputBox">
                <label className="at_inputFieldTitle">Email</label>
                <div className="at_inputCover">
                  <input
                    className="at_inputValue"
                    type="email"
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
                    type="password"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="at_AuthAction">
            Login <BsArrowUpRight className="BsArrowUpRight" />
          </div>
          <div className="otherAuthLink Flex">Forgot password?</div>
        </div>
      </div>
    </>
  );
};
export default LoginDetails;
