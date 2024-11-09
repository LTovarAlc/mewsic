import React, { useState, useEffect } from "react";
import { getSpotifyToken, searchSpotify } from "../../../services/spotifyService";
import "./searcher.css";

const Searcher = ({ onSearchChange }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getSpotifyToken();
      setToken(token);
    };
    fetchToken();
  }, []);

  useEffect(() => {
    if (token && searchQuery.length > 0) {
      performSearch(searchQuery);
      onSearchChange(true, searchQuery); // Cambia a búsqueda activa cuando hay texto y token está listo
    } else if (searchQuery.length === 0) {
      onSearchChange(false, searchQuery); // Cambia a búsqueda inactiva cuando el campo está vacío
    }
  }, [searchQuery, token]); // Depende de searchQuery y token

  const performSearch = async (query) => {
    if (token) {
      const data = await searchSpotify(query, token);

      onSearchChange(true, {
        bestResult: data.bestResult,
        similarSongs: data.similarSongs,
        similarArtists: data.similarArtists,
      });
    }
  };

  return (
    <div className="searcher-container">
      <input
        placeholder="Type a song, artist, album..."
        type="text"
        name="text"
        className="input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default Searcher;
