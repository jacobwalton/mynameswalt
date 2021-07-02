import "./header.css";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="home">
      <div className="backgroundWords">
        <h2>
          <Link>walt's not here</Link>
        </h2>
        <br />
        <h2>
          <Link>walt's not here</Link>
        </h2>
        <br />
        <h2>
          <Link>walt's not here</Link>
        </h2>
        <br />
        <h2>
          <Link>walt's not here</Link>
        </h2>
        <br />
        <h2>
          <Link>walt's not here</Link>
        </h2>
        <br />
        <h2>
          <Link>walt's not here</Link>
        </h2>
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
            href="https://www.twitter.com/waltsnothere"
            target="_blank"
          >
            twitter
            <OpenInNewIcon style={{ marginBottom: "-5", marginLeft: "5" }} />
          </a>
          <a
            className="link"
            href="https://www.instagram.com/waltsnothere"
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
