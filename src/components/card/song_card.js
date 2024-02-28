import React from "react";
import "../../css/card.css";
const Card = ({ playlist }) => {
    return (
        <div className="card" key={playlist.id}>
            <div className="img_container">
                <img src={playlist.image} alt="f" className="img" />
            </div>
            <h4 className="playlist_name">{playlist.name}</h4>
            <p className="artists">{playlist.artists_list}</p>
        </div>
    )
}
export default Card