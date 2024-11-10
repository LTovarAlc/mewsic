import React from "react";
import "./searchFeed.css";
import QueryCardSong from "../shared/queryCard/queryCard";
import QueryCardSimilarSong from "../shared/queryCardSimilarSong/queryCardSimilarSong";
import QueryArtistSection from "./sections/queryArtistSection/queryArtistSection";

const SearchFeed = ({ searchResults, setSelectedSong }) => {
  const { bestResult, similarSongs, similarArtists } = searchResults || {};

  return (
    <section className="searchFeed">
      <div className="searchFeed-Head">
        <div className="BestResult">
          <h2>Mejor Resultado</h2>
          {bestResult?.name && bestResult.artists && bestResult.album.images && (
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
          {similarSongs &&
            similarSongs.map((song, index) => (
              song.album?.images?.[0] && song.artists?.[0] && (
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
      {/* Pasamos `similarArtists` a QueryArtistSection */}
      <QueryArtistSection similarArtists={similarArtists} />
    </section>
  );
};

export default SearchFeed;
