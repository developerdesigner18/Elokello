import React from "react";
import "./StartFundraiser.css";
const startData = [
  {
    title: "Start your fundraiser",
    description:
      "It'll take only 2 minutes. Just tell us a few details about you and the ones you are raising funds for.",
    image: "/start.svg",
  },
  {
    title: "Share your fundraiser",
    description:
      "All you need to do is share the fundraiser with your friends and family. In no time, support will start pouring in.",
    image: "/share.svg",
  },
  {
    title: "Withdraw Funds",
    description:
      "The funds raised can be withdrawn without any hassle directly to your bank account.",
    image: "/withdraw.svg",
  },
];
const StartFundraiser = () => {
  return (
    <>
      <div className="StartFundraiserPage">
        <div className="StartFundraiserTitle">
          Start a Fundraiser in three simple steps
        </div>
        <div className="manu">
          <div className="startComponent row">
            <div className="col-lg-3 col-md-4 col-sm-9">
              <div className="startData">
                {startData.map((i) => {
                  return (
                    <>
                      <div className="startInfo Flex">
                        <div className="startImg">
                          <img src={i.image} alt="" />
                        </div>
                        <div className="startDescription">
                          <div className="titleOfStart">{i.title}</div>
                          <div className="descriptionOfStart">
                            {i.description}
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="mobile col-lg-3 col-md-4 col-sm-12">
              <img src="/mobile.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartFundraiser;
