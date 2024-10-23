import React, { useState, useEffect } from "react";
import "./trends.css";
import SongCard from "../../../shared/songCard/songCard";
import { getSpotifyToken, getTrendingTracks } from "../../../../services/spotifyService";

const Trends = ({ setSelectedSong }) => {
  const [songs, setSongs] = useState([]);

  const fetchTrendingSongs = async () => {
    try {
      const token = await getSpotifyToken();
      const tracks = await getTrendingTracks(token);
      setSongs(tracks);
    } catch (error) {
      console.error('Error fetching songs:', error);
    }
  };

  useEffect(() => {
    fetchTrendingSongs();
  }, []);

  return (
    <section className="trends-container">
      <div className="trends">
        <h2>Tendencias</h2>
        <div className="trend-songs__container">
          {songs.map((song, index) => (
            <SongCard
              key={index}
              songName={song.track.name}
              artistName={song.track.artists[0].name}
              imageUrl={song.track.album.images[0].url}
              onPlay={() => setSelectedSong({
                songName: song.track.name,
                artistName: song.track.artists[0].name,
                imageUrl: song.track.album.images[0].url
              })}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trends;
