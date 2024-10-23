import React from "react";
// import "./redirectButton.css";
import RedirectButtonIMG from "../../../assets/imgs/redirect.png";

const RedirectButton = ({ onClick }) => {
  return (
    <button className="playButton" onClick={onClick}>
      <img src={RedirectButtonIMG} alt="RedirectToProfile" className="playButton-img" />
    </button>
  );
};

export default RedirectButton;
