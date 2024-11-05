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
      const encodedQuery = encodeURIComponent(query);
      const artistResponse = await fetch(
          `https://api.spotify.com/v1/search?q=${encodedQuery}&type=artist&limit=1`,
          {
              headers: {
                  Authorization: `Bearer ${token}`,
              },
          }
      );
      const artistData = await artistResponse.json();
      
      let bestResult = null;
      let similarSongs = [];
      let similarArtists = [];

      // Verificar si se encontró un artista que coincida
      if (artistData.artists && artistData.artists.items.length > 0) {
          bestResult = artistData.artists.items[0];
          
          // Obtener canciones del mejor resultado (artista)
          const tracksResponse = await fetch(
              `https://api.spotify.com/v1/artists/${bestResult.id}/top-tracks?market=US`,
              {
                  headers: {
                      Authorization: `Bearer ${token}`,
                  },
              }
          );
          const tracksData = await tracksResponse.json();

          if (tracksData.tracks) {
              similarSongs = tracksData.tracks.slice(0, 10); // Tomar las primeras 10 canciones
          }

          // Obtener artistas relacionados
          const relatedArtistsResponse = await fetch(
              `https://api.spotify.com/v1/artists/${bestResult.id}/related-artists`,
              {
                  headers: {
                      Authorization: `Bearer ${token}`,
                  },
              }
          );
          const relatedArtistsData = await relatedArtistsResponse.json();

          if (relatedArtistsData.artists) {
              similarArtists = relatedArtistsData.artists.slice(0, 5); // Tomar los primeros 5 artistas relacionados
          }
      }

      return { bestResult, similarSongs, similarArtists };
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
    // console.log("Respuesta de artistas populares de Spotify:", data);

    if (data.artists) {
      return data.artists.slice(0, 5); // Retorna los 5 artistas principales
    } else {
      // console.error("No se encontraron artistas populares:", data);
      return [];
    }
  } catch (error) {
    // console.error("Error al obtener artistas populares:", error);
    return [];
  }
};
