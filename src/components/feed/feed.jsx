import "./feed.css";
import TopArtists from "../feed/sections/topArtists/topArtists";
import Trends from "../feed/sections/trends/trends";

const Feed = ({ setSelectedSong }) => {
  return (
    <section className="feed">
      <Trends setSelectedSong={setSelectedSong} />
      <TopArtists/>
    </section>
  );
};

export default Feed;
