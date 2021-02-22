import React from "react";
import videoSource from "../../assets/RoyaltyFreeVHS.mp4";
import "./background-video.css";

const BackgroundVideo = () => {
  return (
    <div>
      <video autoPlay="autoplay" loop="loop" muted className="backgroundVideo">
        <source src={videoSource} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
