import React from "react";
import "./header.css";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

const Header = () => {
  return (
    <div className="headerContainer">
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
          <OpenInNewIcon style={{ marginBottom: "-5", marginLeft: "5" }} />
        </a>
        <a
          role="textbox"
          aria-multiline="true"
          className="link"
          href="https://www.instagram.com/mynameswalt"
          target="_blank"
        >
          instagram
          <OpenInNewIcon style={{ marginBottom: "-5", marginLeft: "5" }} />
        </a>
      </div>
    </div>
  );
};

export default Header;
