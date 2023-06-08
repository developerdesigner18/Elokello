import React from "react";
import "./ShortStoryAboutUs.css";
const aboutUsData = [
  { title: "Feugiat nsectetsit amet", number: 159 },
  { title: "Our Volunteers", number: 200 },
  { title: "Feugiat nsectetsit amet", number: "50M" },
  { title: "consectetur adipisci", number: 33 },
];
const ShortStoryAboutUs = () => {
  return (
    <>
      <div className="aboutUsPage">
        <div className="aboutUs">
          <div className="aboutUsTitle">A Short Story About Us</div>
          <div className="aboutDescription">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vitae
          </div>
        </div>
        <div className="staticData">
          <div className="aboutInfo row">
            <div className="aboutUs1 col-lg-4 col-md-6 col-sm-6">
              <img src="/aboutUs1.svg" alt="" />
            </div>
            <div className="aboutUs3 col-lg-4 col-md-6 col-sm-6">
              <img src="/aboutUs3.svg" alt="" />
            </div>
            <div className="aboutUs2 col-lg-4 col-md-6 col-sm-6">
              <img src="/aboutUs2.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="aboutDescription row">
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="aboutDescriptionBox">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="aboutDescriptionBox">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </div>
          </div>
        </div>
        <div className="ourStaticInfoParent row">
          {aboutUsData.map((i) => {
            return (
              <>
                <div className="ourStaticInfo col-lg-3 col-md-6 col-sm-6">
                  <div className="staticBorder">
                    <div className="staticNumbers">{i.number}+</div>
                    <div className="staticTitle">{i.title}</div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ShortStoryAboutUs;
