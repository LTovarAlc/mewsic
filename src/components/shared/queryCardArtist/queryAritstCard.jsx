import React from "react";
import "./queryArtistCard.css";

const QueryArtistCard = ({ artistName, followers, imageUrl }) => {
  return (
    <div className="QueryArtistCard">
      <img className="artist-card__image" src={imageUrl} alt={artistName} />
      <div className="artist-details__artistCard">
        <h3 className="artist-name__artistCard">{artistName}</h3>
        <p className="artist-listeners__artistCard">{followers.toLocaleString()} seguidores</p>
      </div>
    </div>
  );
};

export default QueryArtistCard;
