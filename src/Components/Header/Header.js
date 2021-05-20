import "./header.css";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div>
      <div className="headerContainer">
        <a href="/" style={{ textDecoration: "none" }}>
          <h2 id="home" className="header">
            <Link activeClass="active" to="home" spy={true} smooth={true}>
              WALT
            </Link>
          </h2>
        </a>
        <div className="linkContainer">
          <Link className="link" to="music" spy={true} smooth={true}>
            music
          </Link>

          <a
            className="link"
            href="https://www.twitter.com/mynameswalt"
            target="_blank"
          >
            twitter
            <OpenInNewIcon style={{ marginBottom: "-5", marginLeft: "5" }} />
          </a>
          <a
            className="link"
            href="https://www.instagram.com/mynameswalt"
            target="_blank"
          >
            instagram
            <OpenInNewIcon style={{ marginBottom: "-5", marginLeft: "5" }} />
          </a>
        </div>
      </div>
      <div className="backgroundWords">
        <h1>walt's not here</h1>
        <br />
      </div>
    </div>
  );
};

export default Header;
