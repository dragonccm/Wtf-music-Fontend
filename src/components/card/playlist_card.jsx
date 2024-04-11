import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
// import SongDataContext from '../../lib/Context/SongContext';
// import React, { useContext } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

// import { faCirclePlayFull } from '@fortawesome/free-solid-svg-icons'
// import { faHeartFull } from '@fortawesome/free-solid-svg-icons'
import { postPlayList } from '../../redux/slide/createPlayList'
import { useSelector, useDispatch } from "react-redux";
import "../../css/card.scss";
const Card = ({ playlist }) => {
    const dispatch = useDispatch();

    const currData = useSelector((state) => state);
    const handleAdd = (id) => {
        dispatch(postPlayList({
            playlistname: "BETA",
            genresid: [
                "sds"
            ],
            artistsId: '',
            thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/b/8/5/8/b8584bc83639545a57be947b1cbd35f2.jpg",
            description: 'thuwr',
            songid: [
                id
            ]
        }
        ));
    }

    const slicedData = playlist.slice(0, 5);

    return (
        <div className="card_container">
            {slicedData.map((playlist, index) => (
                <div className="card_item" key={'ola' + index}>
                    <div className="img_container">
                        <img
                            src={
                                playlist.thumbnailM
                                    ? playlist.thumbnailM
                                    : "data:image/jpeg;base64,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"
                            }
                            alt="f"
                            className="img"
                        />
                        <div className="img_overlay">
                            <div className="img_overlay_group_btn">
                                <Popup trigger={<FontAwesomeIcon icon={faHeart} />} position="left top"
                                    nested
                                    closeOnDocumentClick
                                    mouseLeaveDelay={300}
                                    mouseEnterDelay={0}
                                    contentStyle={{ padding: '0', border: 'none' }}
                                    arrow={false}>
                                    <div className="menu">
                                        <button className="menu-item"> item 1</button>
                                        <button className="menu-item"> item 2</button>
                                        <button className="menu-item"> item 3</button>
                                    </div>
                                </Popup>
                                {/* <button
                                    onClick={() => handleChangeData(item)}
                                >
                                    <FontAwesomeIcon className="play_icon" icon={faCirclePlay} />
                                </button> */}
                                <NavLink
                                    to={`/playlist/${playlist.encodeId}`}
                                    className="nav-link list_nav_item"
                                >
                                    <FontAwesomeIcon className="play_icon" icon={faCirclePlay} />
                                </NavLink>
                                <FontAwesomeIcon icon={faShare} />
                            </div>
                        </div>
                    </div>

                    <a href="/songpage" className="playlist_name">
                        {playlist.sortDescription ? playlist.sortDescription : playlist.title}
                    </a>
                </div>
            ))}
        </div>
    );
};
export default Card;