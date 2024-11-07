import React from "react";
import "./searchFeed.css";
import QueryCardSong from "../shared/queryCard/queryCard";

const SearchFeed = () => {
  return (
    <section className="searchFeed">
      <div className="searchFeed-Head">
        <div className="BestResult">
          <QueryCardSong />
        </div>
        <div className="SimilarResults">
          <div className="similarsCards">
            <div className="similarSongImg"></div>
            <div className="similarSong-details">
              <p className="similarSongTitle">Song</p>
              <span className="similarSongArtist">Artist</span>
            </div>
          </div>
          <div className="similarsCards">
            <div className="similarSongImg"></div>
            <div className="similarSong-details">
              <p className="similarSongTitle">Song</p>
              <span className="similarSongArtist">Artist</span>
            </div>
          </div>
          <div className="similarsCards">
            <div className="similarSongImg"></div>
            <div className="similarSong-details">
              <p className="similarSongTitle">Song</p>
              <span className="similarSongArtist">Artist</span>
            </div>
          </div>
          <div className="similarsCards">
            <div className="similarSongImg"></div>
            <div className="similarSong-details">
              <p className="similarSongTitle">Song</p>
              <span className="similarSongArtist">Artist</span>
            </div>
          </div>
          <div className="similarsCards">
            <div className="similarSongImg"></div>
            <div className="similarSong-details">
              <p className="similarSongTitle">Song</p>
              <span className="similarSongArtist">Artist</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFeed;