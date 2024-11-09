import React from "react";
import "./searchFeed.css";
import QueryCardSong from "../shared/queryCard/queryCard";

const SearchFeed = ({ searchResults, setSelectedSong }) => {
  const { bestResult, similarSongs } = searchResults || {};

  // Verificar las propiedades de bestResult
  if (bestResult) {
    console.log('Nombre de la canción: ', bestResult.name);
    console.log('Artistas: ', bestResult.artists);
    console.log('Imágenes: ', bestResult.album.images);
  }

  return (
    <section className="searchFeed">
      <div className="searchFeed-Head">
        <div className="BestResult">
          {bestResult?.name && bestResult.artists && bestResult.artists.length > 0 && bestResult.album.images && bestResult.album.images.length > 0 && (
            <QueryCardSong
              songName={bestResult.name}
              artistName={bestResult.artists[0].name}
              imageUrl={bestResult.album.images[0].url}
              onClick={() =>
                setSelectedSong({
                  songName: bestResult.name,
                  artistName: bestResult.artists[0].name,
                  imageUrl: bestResult.album.images[0].url,
                })
              }
            />
          )}
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