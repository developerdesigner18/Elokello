import React from "react";
import Navbar from "../../Helpers/Navbar";
import ShortStoryAboutUs from "./ShortStoryAboutUs/ShortStoryAboutUs";
import StartFundraiser from "./StartFundraiser/StartFundraiser";
import OurVolunteers from "./OurVolunteers/OurVolunteers";
import Footer from "../../Helpers/Footer";
const AboutUs = () => {
  return (
    <>
      <Navbar />
      <ShortStoryAboutUs />
      <StartFundraiser />
      {/* <OurVolunteers />
      <Footer /> */}
    </>
  );
};

export default AboutUs;
