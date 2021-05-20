import "./music.css";
import albums from "../../util/data";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

const Music = () => {
  return (
    <div id="music" className="musicContainer">
      {albums.map((item, key) => {
        return (
          <div className="musicCards" key={item.id}>
            <img
              onMouseOver={(e) => (e.currentTarget.src = item.altArtwork)}
              onMouseOut={(e) => (e.currentTarget.src = item.artwork)}
              onClick={() => window.open(item.smartUrl, "_blank")}
              className="artwork"
              src={item.artwork}
              alt={item.albumName}
            />
            <div className="albumName">
              {item.albumName} <em>{item.type}</em>
            </div>

            <div className="albumDesc">
              <p>Produced by: {item.producedBy}</p>
              <p>Released: {item.releaseDate}</p>
              <a className="albumLink" href={item.smartUrl} target="_blank">
                Listen Now <OpenInNewIcon style={{ marginBottom: "-5" }} />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Music;
