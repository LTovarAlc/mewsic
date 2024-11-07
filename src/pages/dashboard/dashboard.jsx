import React, { useState } from "react";
import "./dashboard.css";
import Player from "../../components/player/player";
import Feed from "../../components/feed/feed";
import SearchFeed from "../../components/searchFeed/searchFeed";

const Dashboard = ({ isSearching }) => {  // Recibe la prop isSearching directamente desde App
  const [selectedSong, setSelectedSong] = useState({
    songName: "SONG TITLE",
    artistName: "Artist",
    imageUrl: null,
  });

  return (
    <div className="dashboard">
      <div className="player__container">
        <Player song={selectedSong} />
      </div>
      <div className="feed__container">
        {/* Renderiza SearchFeed o Feed basado en isSearching */}
        {isSearching ? (
          <SearchFeed setSelectedSong={setSelectedSong} />
        ) : (
          <Feed setSelectedSong={setSelectedSong} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;