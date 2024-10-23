import "./player.css";
import PlayIMG from "../../assets/imgs/tocar.png";
import NextIMG from "../../assets/imgs/siguiente-pista.png";
import MeowLogo from "../../assets/imgs/LOGOmeowsic.png";

const Player = ({ song }) => {
  return (
    <div className="Player">
      <div className="song__details">
        <img src={song.imageUrl || MeowLogo} alt="MeowsicLogo" className="meowsicLogoPlayer song-thumbnail__player" />
        <span className="song-name">{song.songName}</span>
        <span className="song-artist-name">{song.artistName}</span>
      </div>
      <div className="song__status">
        <div className="status__buttons">
          <button className="player-lateral__buttons"><img src={NextIMG} className="back-song-button__icon"/></button>
          <button className="player__buttons"><img src={PlayIMG} className="play-button__icon"/></button>
          <button className="player-lateral__buttons"><img src={NextIMG} className="next-song-button__icon"/></button>
        </div>
        <div className="status__bar"></div>
      </div>
      {/* <div className="ecualizer"></div> */}
    </div>
  );
};

export default Player;
