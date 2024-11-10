import React from "react";
import "./queryCard.css";
import PlayIMG from "../../../assets/imgs/tocar.png"

const QueryCardSong = ({ songName, artistName, imageUrl, onClick }) => {
  return (
    <div className="QueryCardSong" onClick={onClick}>
      {imageUrl && (
        <img src={imageUrl} alt="SongIMG" className="QueryCard-SongIMG" />
      )}
      <div className="QueryCardSong-options">
        <div className="QueryCard-info">
          {songName && <p className="QueryCard-SongName">{songName}</p>}
          {artistName && (
            <span className="QueryCard-SongName-artist">{artistName}</span>
          )}
        </div>
        <button className="QueryCardPlayButton">
          <img src={PlayIMG} alt="Play" className="QueryCardPlayButton-img" onClick={onClick} />
        </button>
      </div>
    </div>
  );
};

export default QueryCardSong;
