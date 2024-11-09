import React from "react";
import "./searchFeed.css";
import QueryCardSong from "../shared/queryCard/queryCard";
import QueryCardSimilarSong from "../shared/queryCardSimilarSong/queryCardSimilarSong";

const SearchFeed = ({ searchResults, setSelectedSong }) => {
  const { bestResult, similarSongs } = searchResults || {};

  return (
    <section className="searchFeed">
      <div className="searchFeed-Head">
        <div className="BestResult">
          <h2>Mejor Resultado</h2>
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
          <h2>Canciones</h2>
          {similarSongs && similarSongs.slice(0, 4).map((song, index) => (
            song.album && song.album.images && song.album.images.length > 0 && song.artists && song.artists.length > 0 && (
              <QueryCardSimilarSong
                key={index}
                songName={song.name}
                artistName={song.artists[0].name}
                imageUrl={song.album.images[0].url}
                onClick={() =>
                  setSelectedSong({
                    songName: song.name,
                    artistName: song.artists[0].name,
                    imageUrl: song.album.images[0].url,
                  })
                }
              />
            )
          ))}
        </div> 
      </div>
    </section>
  );
};

export default SearchFeed;
