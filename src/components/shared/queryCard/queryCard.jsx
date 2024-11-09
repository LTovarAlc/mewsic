import React from "react";
import "./queryCard.css";
import QueryCardPlayButton from "../queryCardPlayButton/queryCardPlayButtton";

const QueryCardSong = ({ songName, artistName, imageUrl, onClick }) => {
  console.log("Props en QueryCardSong: ", { songName, artistName, imageUrl }); // Añadir log para depuración

  return (
    <div className="QueryCardSong" onClick={onClick}>
      {imageUrl && <img src={imageUrl} alt="SongIMG" className="QueryCard-SongIMG" />}
      {songName && <p className="QueryCard-SongName">{songName}</p>}
      {artistName && <span className="QueryCard-SongName-artist">{artistName}</span>}
      <QueryCardPlayButton />
    </div>
  );
};

export default QueryCardSong;
