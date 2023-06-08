import React from "react";
import "./JustMinute.css";
const Data = [
  {
    img: "/laughing.svg",
    title: "Give Happiness",
    description: `Giving happiness to others is one
of the most fulfilling things you
can do in life.`,
  },
  {
    img: "/laughing2.svg",
    title: "Share Love",
    description: `When you share love with those
    around you, you create a ripple
    effect of kindness.`,
  },
  {
    img: "/laughing3.svg",
    title: "Build Socially",
    description: `Building socially requires not just
    connecting with others, but also
    actively contributing.`,
  },
];
export const JustMinute = () => {
  return (
    <>
      <div className="JustMinute">
        <div className="justHeading">
          Fundraising on Pracima takes just a few minutes
        </div>
        <div className="row">
          {Data.map((i) => {
            return (
              <>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="cardData">
                    <img src={i.img} alt="" />
                    <div className="cardTitle">{i.title}</div>
                    <div className="cardDescription">{i.description}</div>
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
