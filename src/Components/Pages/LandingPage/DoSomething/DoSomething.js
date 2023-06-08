import React from "react";
import "./DoSomething.css";
export const DoSomething = () => {
  return (
    <>
      <div className="DoSomethingElement">
        <div className="DoSomethingIcredibleNow">
          <div className="DoSomething">
            <div className="dialogue">DO SOMETHING</div>
            <div className="handImg1">
              <img src="/HandImg.svg" alt="" />
            </div>
          </div>
          <div className="IcredibleNow">
            <div className="handImg2">
              <img src="/HandImg.svg" alt="" />
            </div>
            <div className="dialogue">INCREDIBLE NOW</div>
          </div>
        </div>
        <div className="littleSantence">
          You give bit little when you give of your possessions. It is when you
          give of yourself
        </div>
        <div className="otherLink">
          <div className="playLinks">Start your campaign</div>
          <div className="playButtonParent">
            <img className="playButton" src="/playButton.svg" alt="" />
          </div>
          <div className="playLinks">How it works?</div>
        </div>
      </div>
    </>
  );
};
