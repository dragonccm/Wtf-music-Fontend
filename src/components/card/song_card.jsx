import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlayFull } from '@fortawesome/free-solid-svg-icons'
import { faHeartFull } from '@fortawesome/free-solid-svg-icons'
import "../../css/card.scss";
const Card = ({ playlist }) => {
    return (
        <div className="card" key={playlist.id}>
            
            <div className="img_container">
                    <img src={playlist.image ? playlist.image : "https://th.bing.com/th/id/OIP.VN5-mmYDuXiXga_x-EvswQHaHa?rs=1&pid=ImgDetMain"} alt="f" className="img" />
                    <div className="img_overlay">
                        <div className="img_overlay_group_btn">
                            <FontAwesomeIcon icon={faHeart} />
                            <a href="/songpage"><FontAwesomeIcon className="play_icon" icon={faCirclePlay} /></a>
                            <FontAwesomeIcon icon={faShare} />
                        </div>
                    </div>
            </div>
            
            <p className="playlist_name">{playlist.name}</p>
        </div>
    )
}
export default Card