import React from "react";
import "./JoinCommunity.css";
export const JoinCommunity = () => {
  return (
    <>
      <div className="JoinCommunityParent">
        <div className="jcTitle Flex">
          <div className="jcTitleBoxImg">
            <img src="/Donation.svg" alt="" />
          </div>
          <div className="JoinCommunity">
            Join our community and be part of a positive change in the world.
            with over :
          </div>
          <div className="jcTitleBoxImg">
            <img src="/Donation.svg" alt="" />
          </div>
        </div>

        <div className="jcEnd Flex">
          <div className="jcEndImgBox">
            <img src="/Donation.svg" alt="" />
          </div>
          <div className="joiningData">
            <div className="CommunitySize">120,859+</div>
            <div className="alreadyJoined">people already joining</div>
            <div className="iWantToJoin">Yes, I want to join community</div>
          </div>

          <div className="jcEndImgBox">
            <img src="/Donation.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
