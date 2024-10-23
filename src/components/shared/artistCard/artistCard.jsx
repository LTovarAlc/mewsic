import React from "react";
import "./artistCard.css";
import RedirectButton from "../redirectButton/redirectButton";

const ArtistCard = ({ artistName, imageUrl, monthlyListeners, onRedirect }) => {
  return (
    <div className="artistCard">
      <img src={imageUrl} alt={`${artistName} cover`} className="artist-card__image" />
      <div className="artist-details__artistCard">
        <h3 className="artist-name__artistCard">{artistName}</h3>
        <p className="artist-listeners__artistCard">
          {monthlyListeners.toLocaleString()} Seguidores {/* Aquí formateamos el número */}
        </p>
        <RedirectButton onClick={onRedirect} />
      </div>
    </div>
  );
};

export default ArtistCard;
