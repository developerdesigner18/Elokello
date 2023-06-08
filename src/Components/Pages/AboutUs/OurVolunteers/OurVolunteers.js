import React from "react";
import "./OurVolunteers.css";
const VolunteersData = [
  { name: "Smith Vora", image: "/smith.svg" },
  { name: "Krusty Gel", image: "/Krusty.svg" },
  { name: "Molly Manusha", image: "/Molly.svg" },
];
const OurVolunteers = () => {
  return (
    <>
      <div>
        <div className="volunteersTitle">Our Volunteers</div>
        <div className="aboutVolunteers">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>

        <div className="volunteerCardRow row">
          {VolunteersData.map((i) => {
            return (
              <>
                <div className="volunteerCard col-lg-3 col-md-5 col-sm-12">
                  <div className="volunteerImgCover">
                    <img className="volunteerImg" src={i.image} alt="" />
                  </div>
                  <div className="volunteerData  ">
                    <div className="aboutVolunteer">
                      <div className="volunteerName">{i.name}</div>
                      <div className="volunteerContact">
                        <img src="/facebook.svg" alt="" />
                        <img src="/tweeter.svg" alt="" />
                        <img src="/google.svg" alt="" />
                      </div>
                    </div>

                    <div className="volunteerLink">
                      <img src="/detailsArrow.svg" alt="" />
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

export default OurVolunteers;
