import React from "react";
import "./songCard.css";
import PlayButton from "../playButton/playButton";

const SongCard = ({ songName, artistName, imageUrl, onPlay }) => {
  return (
    <div className="songCard">
      <img src={imageUrl} alt={`${songName} cover`} className="song-card__image" />
      <div className="song-details__songCard">
        <h3 className="song-name__songCard">{songName}</h3>
        <p className="song-artist__songCard">{artistName}</p>
        <PlayButton onClick={onPlay} />
      </div>
    </div>
  );
};

export default SongCard;
