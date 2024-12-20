// spotifyService.js

// Function to get the Spotify authentication token
export const getSpotifyToken = async () => {
  const client_id = "fb0cc79b977248a580554177c7f894df"; // Client ID for Spotify
  const client_secret = "128276d87c184b3d9ce616b1b8fa71fe"; // Client Secret for Spotify

  try {
    // Request to Spotify's API to get the authentication token using client credentials
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", // Define the content type
        Authorization: "Basic " + btoa(client_id + ":" + client_secret), // Encode the client ID and secret for Basic Authentication
      },
      body: "grant_type=client_credentials", // Body of the request to indicate the grant type
    });

    // Parse the response JSON and return the access token
    const data = await response.json();
    return data.access_token;
  } catch (error) {
    // Log any error that occurs during the request
    console.error("Error getting Spotify token:", error);
    return null; // Return null if there is an error
  }
};

// Function to get trending tracks from Spotify
export const getTrendingTracks = async (token) => {
  try {
    // Request to get the top tracks from a specific Spotify playlist (in this case, a trending playlist)
    const response = await fetch(
      "https://api.spotify.com/v1/playlists/37i9dQZEVXbLRQDuF5jeBp/tracks",
      {
        headers: {
          Authorization: `Bearer ${token}`, // Use the access token for authorization
        },
      }
    );

    // Parse the response data
    const data = await response.json();

    // Check if there are tracks and return the first 10 tracks if they exist
    if (data.items) {
      return data.items.slice(0, 10); // Return the first 10 tracks
    } else {
      console.error("No trending songs found:", data);
      return []; // Return an empty array if no songs are found
    }
  } catch (error) {
    // Log any error that occurs during the request
    console.error("Error getting trending songs:", error);
    return []; // Return an empty array if there is an error
  }
};

// Function to search Spotify for artists, songs, and albums
export const searchSpotify = async (query, token) => {
  try {
    const encodedQuery = encodeURIComponent(query);

    // Búsqueda del mejor resultado
    const trackResponse = await fetch(
      `https://api.spotify.com/v1/search?q=${encodedQuery}&type=track&limit=1`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const trackData = await trackResponse.json();

    let bestResult = null;
    let similarSongs = [];
    let similarArtists = [];

    if (trackData.tracks && trackData.tracks.items.length > 0) {
      bestResult = trackData.tracks.items[0];

      // Obtener canciones similares del mismo artista
      const artistTracksResponse = await fetch(
        `https://api.spotify.com/v1/artists/${bestResult.artists[0].id}/top-tracks?market=US`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const artistTracksData = await artistTracksResponse.json();

      if (artistTracksData.tracks) {
        similarSongs = artistTracksData.tracks.slice(0, 4);
      }

      // Obtener artistas relacionados
      const relatedArtistsResponse = await fetch(
        `https://api.spotify.com/v1/artists/${bestResult.artists[0].id}/related-artists`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const relatedArtistsData = await relatedArtistsResponse.json();

      if (relatedArtistsData.artists) {
        similarArtists = relatedArtistsData.artists.slice(0, 5);
      }
    }

    return { bestResult, similarSongs, similarArtists };
  } catch (error) {
    console.error("Error searching on Spotify:", error);
    return null;
  }
};

// Function to get the top artists on Spotify
export const getTopArtists = async (token) => {
  try {
    // Request to get specific popular artists by their Spotify IDs
    const response = await fetch(
      "https://api.spotify.com/v1/artists?ids=3TVXtAsR1Inumwj472S9r4,6eUKZXaKkcviH0Ku9w2n3V,66CXWjxzNUsdJxJ2JdwvnR,1uNFoZAHBGtllmzznpCI3s,1Xyo4u8uXC1ZmMpatF05PJ", // IDs of popular artists like Drake, Ed Sheeran, Ariana Grande, etc.
      {
        headers: {
          Authorization: `Bearer ${token}`, // Use the access token for authorization
        },
      }
    );

    // Parse the response data
    const data = await response.json();

    // If the artists data exists, return the first 5 artists
    if (data.artists) {
      return data.artists.slice(0, 5); // Return the top 5 artists
    } else {
      return []; // Return an empty array if no artists are found
    }
  } catch (error) {
    // Log any error that occurs during the request
    return []; // Return an empty array if there is an error
  }
};
