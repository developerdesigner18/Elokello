import React from "react";
import "./LiveCampaign.css";
import LcCarousel from "./Carousel";
const Data = [
  {
    img: "/team.svg",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    Goals: `20,000`,
    Progress: `72`,
    Raised: "$ 72,000",
    Ended: "27",
    description: `Giving happiness to others is one
of the most fulfilling things you
can do in life.`,
  },
  {
    img: "/team.svg",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    Goals: `$20,000`,
    Progress: `72`,
    Raised: "72,000",
    Ended: "27",
    description: `Giving happiness to others is one
of the most fulfilling things you
can do in life.`,
  },
  {
    img: "/team.svg",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subtitle:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    Goals: `20,000`,
    Progress: `72`,
    Raised: "$ 72,000",
    Ended: "27",
    description: `Giving happiness to others is one
of the most fulfilling things you
can do in life.`,
  },
];
export const LiveCampaign = () => {
  return (
    <>
      <div className="LiveCampaign">
        <div className="LcHeading">Introducing our live campaign</div>
        <div className="LcInfo">
          Create or be part of our campaigns and share happiness
        </div>
        <LcCarousel Item={<CarouselItem />} />
      </div>
    </>
  );
};

const CarouselItem = () => {
  return (
    <>
      <div className="CarouselItem">
        <div className="row">
          {Data.map((i) => {
            return (
              <>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="LcCardData">
                    <img src={i.img} alt="" />
                    <div className="LcCardTitle">{i.title}</div>
                    <div className="LcCardSubTitle">{i.subtitle}</div>
                    <div className="progressBar">
                      <div
                        className="progressLength"
                        style={{ width: `${i.Progress}%` }}
                      ></div>
                    </div>

                    <div className="LcVariables">
                      <div className="LcVariable">
                        Goals: <span className="LcValue">${i.Goals}</span>
                      </div>

                      <div className="LcVariable">
                        Progress:{" "}
                        <span className="LcValue"> {i.Progress}$</span>
                      </div>
                    </div>
                    <div className="LcVariables2">
                      <div>
                        <div className="LcVariable">Raised</div>
                        <div className="LcValue"> {i.Raised}</div>
                      </div>
                      <div>
                        <div className="LcVariable">Ended</div>
                        <div className="LcValue"> {i.Ended} days left</div>
                      </div>
                    </div>
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
