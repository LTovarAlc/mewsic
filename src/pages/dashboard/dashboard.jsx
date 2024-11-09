import React, { useState } from "react";
import "./dashboard.css";
import Player from "../../components/player/player";
import Feed from "../../components/feed/feed";
import SearchFeed from "../../components/searchFeed/searchFeed";

const Dashboard = ({ isSearching, searchResults }) => {
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
        {isSearching ? (
          <SearchFeed setSelectedSong={setSelectedSong} searchResults={searchResults} />
        ) : (
          <Feed setSelectedSong={setSelectedSong} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
