import React, { useState } from "react";
import "./dashboard.css";
import Player from "../../components/player/player";
import Feed from "../../components/feed/feed";

const Dashboard = () => {
  const [selectedSong, setSelectedSong] = useState({
    songName: "SONG TITLE",
    artistName: "Artist",
    imageUrl: null
  });

  return (
    <div className="dashboard">
      <div className="player__container">
        <Player song={selectedSong} />
      </div>
      <div className="feed__container">
        <Feed setSelectedSong={setSelectedSong} />
      </div>
    </div>
  );
};

export default Dashboard
