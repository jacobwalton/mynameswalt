import React from "react";
import "./landing.css";

const landing = () => {
  return (
    <div className="landingContainer">
      <h2 className="header">WALT</h2>
      <div className="linkContainer">
        <a
          role="textbox"
          aria-multiline="true"
          className="link"
          href="/music"
          target="_blank"
        >
          music
        </a>
        <a
          role="textbox"
          aria-multiline="true"
          className="link"
          href="/merch"
          target="_blank"
        >
          merch
        </a>
        <a
          role="textbox"
          aria-multiline="true"
          className="link"
          href="https://www.twitter.com/mynameswalt"
          target="_blank"
        >
          twitter
        </a>
        <a
          role="textbox"
          aria-multiline="true"
          className="link"
          href="https://www.instagram.com/mynameswalt"
          target="_blank"
        >
          instagram
        </a>
      </div>
    </div>
  );
};

export default landing;
