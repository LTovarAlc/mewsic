import React, { useState, useEffect } from "react";
import { getSpotifyToken, searchSpotify } from "../../../services/spotifyService";
import "./searcher.css";

const Searcher = () => {
  const [searchQuery, setSearchQuery] = useState("");  // Estado para el input de búsqueda
  const [token, setToken] = useState("");  // Estado para almacenar el token de Spotify

  // Obtener el token de Spotify al cargar el componente
  useEffect(() => {
    const fetchToken = async () => {
      const token = await getSpotifyToken();
      setToken(token);
    };
    fetchToken();
  }, []);

  // Ejecutar la búsqueda cada vez que el usuario cambia el input
  useEffect(() => {
    if (searchQuery.length > 0) {
      performSearch(searchQuery);
    }
  }, [searchQuery]);

  // Función para realizar la búsqueda en Spotify
  const performSearch = async (query) => {
    if (token) {
      const data = await searchSpotify(query, token);

      // Resultado principal: el primer artista que coincide con la búsqueda
      const mainResult = data.artists.items[0];

      // Resultados relacionados: las primeras 15 canciones relacionadas con el artista o su participación
      const relatedResults = data.tracks.items;

      console.log("Resultado principal:", mainResult);
      console.log("Resultados relacionados:", relatedResults);
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
        onChange={(e) => setSearchQuery(e.target.value)}  // Actualizar el estado al cambiar el input
      />
    </div>
  );
};

export default Searcher;
