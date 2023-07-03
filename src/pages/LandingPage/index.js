import React from "react";
import "./index.scss";
import Avatar from "../../components/Avatar";
import BusinessCard from "../../components/BusinessCard";
import NavTiles from "../../components/NavTiles";
import AudioBox from "../../components/AudioBox";

function LandingPage() {
  return (
    <div className="landing-page__container">
      <div className="landing-page__left">
        <Avatar />
        <BusinessCard />
      </div>

      <div className="landing-page__right">
        <NavTiles />
        <AudioBox />
      </div>
    </div>
  );
}

export default LandingPage;
