import React, { useState } from "react";
import "./Helper.css";
import { Link } from "react-router-dom";
import { TfiViewList } from "react-icons/tfi";
const Navbar = () => {
  const [showNavbarIcon, setShowNavbarIcon] = useState(true);
  const navChild = [
    { name: "About Us", link: "AboutUs" },
    { name: "Campaign", link: "Campaign" },
    { name: "Contact Us", link: "ContactUs" },
  ];
  return (
    <>
      <div className="navbarElement">
        <div className="logoContainer">
          <img className="LOGO" src="/LOGO.svg" alt="" />
          <TfiViewList
            className="NavListIcon"
            style={{ color: "black" }}
            onClick={() => setShowNavbarIcon(!showNavbarIcon)}
          />
        </div>

        {/* <div
          className={`navbarLine ${showNavbarIcon ? "navbarLine2" : ""}`}
          style={{ display: showNavbarIcon ? "none" : "" }}
        > */}
        <div className={`navbarLine`}>
          {navChild.map((n) => {
            return (
              <>
                <div className="navLink">
                  <Link to={`/${n.link}`}>{n.name}</Link>
                </div>
              </>
            );
          })}
        </div>

        <AuthComponent />
      </div>
    </>
  );
};

export default Navbar;

const AuthComponent = () => {
  return (
    <>
      <div className="authElement">
        {["Sign Up", "Login"].map((a) => {
          return (
            <>
              <div className="authButton">{a}</div>
            </>
          );
        })}
      </div>
    </>
  );
};
