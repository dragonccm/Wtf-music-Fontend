import React from "react";
import "../css/Recommended.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regular } from '@fortawesome/free-regular-svg-icons'

import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
const Recommended = ({ datas,type,describe }) => {
    return (
        <>
            {/* lable */}
            <h1 className="Recommended">{type}</h1>
            <p className="Recommended_1">{describe}</p>
            {/* lable */}
            {datas.map((data, index) => (
                <div className="list_row">
                    <div className="song_img_ctn">
                        <div className="row_order">
                            <div className="number">
                                {index}
                            </div>
                            <div className="hidden_button">
                                <button className="play">
                                    <FontAwesomeIcon icon={faPlay} />
                                </button>
                            </div>
                        </div>
                        <div className="song_img">
                            <img src={data.image} alt="" />
                        </div>
                        <div className="songif">
                            <div className="songname">{data.songname}</div>
                            <div className="songartist">{data.songartist}</div>
                        </div>
                    </div>
                    <div className="root_album">{data.root_album}</div>
                    <div className="added_time">{data.addedday}</div>
                    <div className="foot">
                        <div className="liked"><FontAwesomeIcon icon={data.liked_state ? faHeart : regular} /></div>
                        <div className="time">{data.songname}</div>
                    </div>
                </div>
            ))}
            <button className="refresh">refresh</button>
        </>
    )
}
export default Recommended