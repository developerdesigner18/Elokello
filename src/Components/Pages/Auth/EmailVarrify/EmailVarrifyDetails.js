import React from "react";
import "../Auth.css";
import { BsArrowUpRight } from "react-icons/bs";
const EmailVarrifyDetails = () => {
  return (
    <>
      <div className="at_AuthPage">
        <div className="at_AuthTitle">Verify your Email</div>
        <div className="at_warning">
          We sent an email to test1001.dds@gmail.com. Check your inbox and enter
          the 6-digit code to verify your email.
        </div>

        <div className="at_messageBox">
          <div className="at_row">
            <div className="at_inputFieldClass col-lg-12 col-md-12 col-sm-12">
              <div className="at_inputBox">
                <div className="at_inputCover">
                  <input
                    className="at_inputValue"
                    type="text"
                    placeholder="985674"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="at_AuthAction">
            Continue <BsArrowUpRight className="BsArrowUpRight" />
          </div>
          <div className="otherAuthLink Flex">I didn’t receive an email</div>
        </div>
      </div>
    </>
  );
};
export default EmailVarrifyDetails;
