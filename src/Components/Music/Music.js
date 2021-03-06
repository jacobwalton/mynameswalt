import React, { useState } from "react";
import "./music.css";
import albums from "../../util/data";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

const Music = () => {
  return (
    <div className="musicContainer">
      {albums.map((item, index) => {
        return (
          <div className="musicCards">
            <img
              onMouseOver={(e) => (e.currentTarget.src = item.altArtwork)}
              onMouseOut={(e) => (e.currentTarget.src = item.artwork)}
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
      {/* <div className="musicContainer">
        
        <img
          onMouseOver={(e) => (e.currentTarget.src = albums[0].altArtwork)}
          onMouseOut={(e) => (e.currentTarget.src = albums[0].artwork)}
          className="artwork"
          src={albums[0].artwork}
          alt={albums[0].albumName}
        />
        <div className="albumName">{albums[0].albumName}</div>

        <div className="albumDesc">
          <p>Produced by: {albums[0].producedBy}</p>
          <p>Released: {albums[0].releaseDate}</p>
          <a className="albumLink" href={albums[0].smartUrl} target="_blank">
            Listen Now <OpenInNewIcon style={{ marginBottom: "-5" }} />
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Music;
