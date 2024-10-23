// spotifyService.js

// Obtener el token de autenticación de Spotify
export const getSpotifyToken = async () => {
    const client_id = "fb0cc79b977248a580554177c7f894df"; // Client ID
    const client_secret = "128276d87c184b3d9ce616b1b8fa71fe"; // Client Secret
  
    try {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic " + btoa(client_id + ":" + client_secret),
        },
        body: "grant_type=client_credentials",
      });
  
      const data = await response.json();
      return data.access_token;
    } catch (error) {
      console.error("Error al obtener el token de Spotify:", error);
      return null;
    }
  };
  
  // Obtener canciones en tendencia
  export const getTrendingTracks = async (token) => {
    try {
      const response = await fetch(
        "https://api.spotify.com/v1/playlists/37i9dQZEVXbLRQDuF5jeBp/tracks",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      const data = await response.json();
  
      if (data.items) {
        return data.items.slice(0, 10); // Retorna las primeras 10 canciones solo si existen elementos
      } else {
        console.error("No se encontraron canciones en tendencia:", data);
        return [];
      }
    } catch (error) {
      console.error("Error al obtener canciones en tendencia:", error);
      return [];
    }
  };
  
  // Función para buscar en Spotify (artistas, canciones, álbumes)
  export const searchSpotify = async (query, token) => {
    try {
      const encodedQuery = encodeURIComponent(query); // Codifica la consulta para evitar problemas con caracteres especiales
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${encodedQuery}&type=track,artist,album&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      const data = await response.json();
      console.log("Respuesta de búsqueda de Spotify:", data);
  
      if (data.tracks || data.artists || data.albums) {
        return data; // Retorna todos los datos de búsqueda (tracks, artistas, álbumes)
      } else {
        console.error("No se encontraron resultados de búsqueda:", data);
        return null;
      }
    } catch (error) {
      console.error("Error al buscar en Spotify:", error);
      return null;
    }
  };
  
  // Obtener los artistas más populares
  export const getTopArtists = async (token) => {
    try {
      const response = await fetch(
        "https://api.spotify.com/v1/artists?ids=3TVXtAsR1Inumwj472S9r4,6eUKZXaKkcviH0Ku9w2n3V,66CXWjxzNUsdJxJ2JdwvnR,1uNFoZAHBGtllmzznpCI3s,1Xyo4u8uXC1ZmMpatF05PJ", // IDs de artistas populares como Drake, Ed Sheeran, Ariana Grande, Justin Bieber, The Weeknd
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      const data = await response.json();
      console.log("Respuesta de artistas populares de Spotify:", data);
  
      if (data.artists) {
        return data.artists.slice(0, 5); // Retorna los 5 artistas principales
      } else {
        console.error("No se encontraron artistas populares:", data);
        return [];
      }
    } catch (error) {
      console.error("Error al obtener artistas populares:", error);
      return [];
    }
  };
  