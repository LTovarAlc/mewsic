import React from "react";
import "./queryCard.css"

const QueryCardSong = () => {
    return(
        <div className="QueryCardSong">
            {/* <img src="" alt="SongIMG" className="QueryCard-SongIMG" /> */}
            <div className="img"></div>
            <p className="QueryCard-SongName">Song Title</p>
            <span className="QueryCard-SongName-artist">Artist</span>
        </div>
    )
}

export default QueryCardSong