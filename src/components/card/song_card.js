import React from "react";
import "../../css/card.scss";
const Card = ({ playlist }) => {
    return (
        <div className="card" key={playlist.id}>
            <div className="img_container">
                <img src={playlist.image  ? playlist.image :"https://th.bing.com/th/id/OIP.VN5-mmYDuXiXga_x-EvswQHaHa?rs=1&pid=ImgDetMain" } alt="f" className="img" />
            </div>
            <h4 className="playlist_name">{playlist.name}</h4>
            <p className="artists">{playlist.artists_list}</p>
        </div>
    )
}
export default Card