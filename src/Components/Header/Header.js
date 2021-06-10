import "./header.css";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="home">
      <div className="backgroundWords">
        <marquee>
          <Link activeClass="active" to="home" spy={true} smooth={true}>
            walt's not here
          </Link>
        </marquee>
        <br />
        <marquee>
          <Link activeClass="active" to="home" spy={true} smooth={true}>
            walt's not here
          </Link>
        </marquee>
        <br />
        <marquee>
          <Link activeClass="active" to="home" spy={true} smooth={true}>
            walt's not here
          </Link>
        </marquee>
        <br />
        <marquee>
          <Link activeClass="active" to="home" spy={true} smooth={true}>
            walt's not here
          </Link>
        </marquee>
        <br />
        <marquee>
          <Link activeClass="active" to="home" spy={true} smooth={true}>
            walt's not here
          </Link>
        </marquee>
        <br />
        <marquee>
          <Link activeClass="active" to="home" spy={true} smooth={true}>
            walt's not here
          </Link>
        </marquee>
      </div>
      <div className="headerContainer">
        <h2 className="header">
          <Link activeClass="active" to="home" spy={true} smooth={true}>
            WALT
          </Link>
        </h2>

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
    </div>
  );
};

export default Header;
