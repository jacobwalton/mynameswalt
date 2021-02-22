import React from "react";
import "./landing.css";

const landing = () => {
  return (
    <div className="landingContainer">
      <h2 className="header">walt</h2>
      <div>
        <a
          href="https://www.twitter.com/mynameswalt"
          target="_blank"
          className="socialLink"
        >
          twitter
        </a>
        <br />
        <a
          href="https://www.instagram.com/mynameswalt"
          target="_blank"
          className="socialLink"
        >
          instagram
        </a>
      </div>
    </div>
  );
};

export default landing;
