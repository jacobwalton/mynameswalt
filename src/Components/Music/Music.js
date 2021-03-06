import React from "react";
import "./music.css";
import albums from "../../util/data";
// console.log(albums[0].albumName);

const Music = () => {
  return (
    <div className="musicContainer">
      <img
        className="artwork"
        src={albums[0].artwork}
        alt={albums[0].albumName}
      />
      <div className="albumName">{albums[0].albumName}</div>

      <div className="albumDesc">
        <p>Produced by: {albums[0].producedBy}</p>
        <p>Released: {albums[0].releaseDate}</p>
        <a className="albumLink" href={albums[0].smartUrl}>
          Listen Now
        </a>
      </div>
    </div>
  );
};

export default Music;
