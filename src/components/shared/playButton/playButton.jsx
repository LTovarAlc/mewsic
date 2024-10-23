import React from "react";
import "./playButton.css";
import PlayButtonImg from "../../../assets/imgs/tocar.png";

const PlayButton = ({ onClick }) => {
  return (
    <button className="playButton" onClick={onClick}>
      <img src={PlayButtonImg} alt="Play" className="playButton-img" />
    </button>
  );
};

export default PlayButton;
