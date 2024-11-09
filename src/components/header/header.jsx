import "./header.css";
import React from "react";
import meowsic from "../../assets/imgs/mewsic.png";
import Searcher from "../../components/shared/searcher/searcher";

const Header = ({ onSearchChange }) => {
  return (
    <header className="header">
      <div className="logo__container">
        <img
          src={meowsic}
          alt="meowsicLogo"
          className="meowsicLogo"
          onClick={() => window.location.reload()} // Agregar manejador de eventos onClick
        />
      </div>
      <div className="searcher__container">
        <Searcher onSearchChange={onSearchChange} />
      </div>
    </header>
  );
};

export default Header;
