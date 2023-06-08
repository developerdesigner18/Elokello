import React from "react";
import "./ContactUs.css";
import { DropDownButton } from "./DropDown";
import { useState } from "react";
const ContactUsDetails = () => {
  const [select, setSelect] = useState({});

  const onChange = (value) => {
    console.log(value);
  };
  return (
    <>
      <div className="ContactUsPage">
        <div className="ContactUsTitle">
          Love to hear from you, Get in touch 👋
        </div>
        <div className="messageBox">
          <div className="row">
            <div className="inputFieldClass col-lg-6 col-md-6 col-sm-12">
              <div className="inputBox">
                <label className="inputFieldTitle">Your Name</label>
                <div className="inputCover">
                  <input
                    className="inputValue"
                    type="text"
                    placeholder="Edward Snowden"
                  />
                </div>
              </div>
            </div>
            <div className="inputFieldClass col-lg-6 col-md-6 col-sm-12">
              <div className="inputBox">
                <label className="inputFieldTitle">Your Email</label>
                <div className="inputCover">
                  <input
                    className="inputValue"
                    type="text"
                    placeholder="itonexample@gmail.com"
                  />
                </div>
              </div>
            </div>
            <div className="inputFieldClass col-lg-6 col-md-6 col-sm-12">
              <DropDownButton
                setSelect={setSelect}
                select={select}
                options={["options1", "options2", "options3", "options4"]}
                name={`Design & Branding`}
                onChange={onChange}
                lable={`What you are interested`}
              />
            </div>

            <div className="inputFieldClass col-lg-6 col-md-6 col-sm-12">
              <DropDownButton
                setSelect={setSelect}
                select={select}
                options={["options1", "options2", "options3", "options4"]}
                name={`Select your budget`}
                onChange={onChange}
                lable={`Project Budget`}
              />
            </div>
          </div>

          <div className="textareaBox">
            <label className="inputFieldTitle">Message</label>
            <div className="textareaCover">
              <textarea
                className="textareaValue"
                type="text"
                placeholder="Let tell us know your project about"
              />
            </div>
          </div>

          <div className="JustSend">
            <img src="/ContactUs.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
// hello
export default ContactUsDetails;
