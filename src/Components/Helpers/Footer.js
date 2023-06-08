import React from "react";
import "./Helper.css";
const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="footerContent">
          <div className="footerTop">
            <div className="footerLeft">
              <div className="logo">
                <img src="/LOGO.svg" alt="" />
              </div>
              <div className="greateFeature">
                Great futures are built with a small charity
              </div>
            </div>
            <div className="footerRight">
              {["About Us", "Campaigns", "Contact Us"].map((i) => {
                return (
                  <>
                    <div className="footerlink">{i}</div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="footerBottom">
            <div className="divideLine" />
            <div className="Copyright">© 2023 Copyright. aziemelasar</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
