import React from "react";
import Navbar from "../../Helpers/Navbar";
import { DoSomething } from "./DoSomething/DoSomething";
import { JustMinute } from "./JustMinute/JustMinute";
import { LiveCampaign } from "./LiveCampaign/LiveCampaign";
import { JoinCommunity } from "./JoinCommunity/JoinCommunity";
import Footer from "../../Helpers/Footer";
export default function LandingPage() {
  return (
    <>
      <Navbar />
      <DoSomething />
      <JustMinute />
      <LiveCampaign />
      <JoinCommunity />
      <Footer />
    </>
  );
}
