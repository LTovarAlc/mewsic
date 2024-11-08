import React from "react";
import "./queryCardSimilarSong.css";

const QueryCardSimilarSong = ({ songName, artistName, imageUrl, onClick }) => {
  return (
    <div className="similarsCards" onClick={onClick}>
      {imageUrl && <img src={imageUrl} alt="SongIMG" className="similarSongImg" />}
      <div className="similarSong-details">
        {songName && <p className="similarSongTitle">{songName}</p>}
        {artistName && <span className="similarSongArtist">{artistName}</span>}
      </div>
    </div>
  );
};

export default QueryCardSimilarSong;
