import React from "react";
import "../../css/artistList.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus,faShuffle } from "@fortawesome/free-solid-svg-icons";


const ArtistList = ({ data }) => {
    
    return (
        <div className="artist_list">
            {data.map((element,index) => (
                <div className="artist_item" key={index}>
                    <div className="img_container">
                        <img src={element.avt} alt="" />
                        <a href={`/artists/${element.alias}`} class="img_overlay">
                            <div class="img_overlay_group_btn">
                                <button class="rhap_main-controls-button rhap_button-clear">
                                <FontAwesomeIcon icon={faShuffle} />
                                </button>
                            </div>
                        </a>
                    </div>
                    <div className="artist_info">
                        <a href={`/artists/${element.alias}`} className="name">{element.artistsName}</a>
                        <p className="total_fl"> {element.totalFollow > 1000 ? ((element.totalFollow / 1000).toFixed(1)) + 'k' : element.totalFollow} quan tâm</p>
                        {/* <button className="btn-follow"><FontAwesomeIcon icon={faUserPlus} /> Quan tâm</button> */}

                    </div>

                </div>
            ))}
        </div>
    )
}
export default ArtistList;



