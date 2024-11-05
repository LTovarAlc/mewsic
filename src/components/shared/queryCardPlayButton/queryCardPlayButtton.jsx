import React from "react";
import "./queryCardPlayButton.css";
import PlayButtonImg from "../../../assets/imgs/tocar.png";

const QueryCardPlayButton = ({ onClick }) => {
  return (
    <button className="QueryPlayButton" onClick={onClick}>
      <img src={PlayButtonImg} alt="Play" className="QueryPlayButton-img" />
    </button>
  );
};

export default QueryCardPlayButton;
