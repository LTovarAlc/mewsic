import React from "react";
import "./searchFeed.css"
import QueryCardSong from "../shared/queryCard/queryCard";

const SearchFeed = () => {
    return(
        <section className="searchFeed">
            <div className="searchFeed-Head">
                <div className="BestResult">
                    <QueryCardSong/>
                </div>
                <div className="SimilarResults">
                    Similares
                </div>
            </div>
        </section>
    )
}

export default SearchFeed