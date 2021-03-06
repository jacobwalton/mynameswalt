import videoSource from "../../assets/RoyaltyFreeVHS.mp4";
import "./background-video.css";

const BackgroundVideo = () => {
  return (
    <div className="container">
      <video autoPlay="autoplay" loop="loop" muted className="backgroundVideo">
        <source src={videoSource} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
