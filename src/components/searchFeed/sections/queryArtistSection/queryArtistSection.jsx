import React from "react";
import "./queryArtistSection.css";
import QueryArtistCard from "../../../shared/queryCardArtist/queryAritstCard";

const QueryArtistSection = ({ similarArtists }) => {
  return (
    <section className="QueryArtistSection">
      <h2>Similares al artista</h2>
      <div className="QueryArtistCards-container">
        {similarArtists &&
          similarArtists.map((artist, index) => (
            <QueryArtistCard
              key={index}
              artistName={artist.name}
              followers={artist.followers.total}
              imageUrl={artist.images?.[0]?.url || ""}
            />
          ))}
      </div>
    </section>
  );
};

export default QueryArtistSection;
