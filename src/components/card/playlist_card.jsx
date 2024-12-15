import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faShare, faTrash } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";
// import SongDataContext from '../../lib/Context/SongContext';
// import React, { useContext } from 'react';
import 'reactjs-popup/dist/index.css';

// import { faCirclePlayFull } from '@fortawesome/free-solid-svg-icons'
// import { faHeartFull } from '@fortawesome/free-solid-svg-icons'
import { fetchSongPlaying } from "../../redux/slide/songPlayingSlice";
import { fetchPlayList} from '../../redux/slide/playlistSlice'
import { userPLayList } from '../../controller/MyPlaylist'
import { setUserPlaylist } from "../../redux/slide/InforUserSlice";


import { playlistroute } from "../../controller/playlist";
import Like_heart from "../card/like";
import { deleteplaylist } from "../../controller/MyPlaylist"
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import "../../css/list_card.scss";
import "../../css/card.scss";
const Card = ({ playlist, isOw, limit,isDes }) => {
    const dispatch = useDispatch();
    const currData = useSelector((state) => state.Authentication);
    // const playlistNow = useSelector((state) => state.playlist.playlist);
    const slicedData = limit ? playlist : playlist.slice(0, 5);

    const handlePlayPlaylist = async (e, id) => {
        e.preventDefault();
        console.log('cossssssssssssssssssssss',id);
        
        dispatch(fetchPlayList({id}));
        let response = await playlistroute(id);
        if (response && response.DT && response.DT.playlist && response.DT.playlist.songid.length > 0) {
            console.log(response.DT)
            dispatch(fetchSongPlaying(response.DT.playlist.songid[0]))
            localStorage.setItem('playlistID', id)
        }
    };
    const handledelete = async (e, id) => {
        e.preventDefault();
        const response = await deleteplaylist({ playlistId: id });
        if (response && response.EC === '0') {
            toast.success('Xóa thành công');
            const fetchPlaylist = async () => {
                const response = await userPLayList();
                if (response.EC === "0") {
                  dispatch(setUserPlaylist(response.DT));
                }
              };
              fetchPlaylist();
        } else {
            toast.error('Xóa thất bại');
        }
    };
    if (playlist.length === 0) {
        return <h1>Không có dữ liệu</h1>;
    }
    return (
        <div className="card_container">
            {slicedData.map((playlist, index) => playlist && playlist._id &&
                (
                    <div className="card_item" key={'ola' + index}>
                        <div className="card_wrap">
                            <div className="img_container">
                                <img
                                    src={
                                        playlist.thumbnail
                                            ? playlist.thumbnail
                                            : currData.defaultUser.account.avt
                                    }
                                    alt="f"
                                    className="img"
                                />
                                <NavLink to={`/playlist/${playlist.playlistId}`} className="img_overlay">
                                    <div className="img_overlay">
                                        <div className="img_overlay_group_btn">
                                            <Like_heart id={playlist.playlistId} type={'playlist'} />



                                            <div
                                                className="nav-link list_nav_item"
                                                onClick={(e) => handlePlayPlaylist(e, playlist.playlistId)}
                                            >

                                                <FontAwesomeIcon className="play_icon" icon={faCirclePlay} />

                                            </div>
                                            {isOw === "you" ? (
                                                <button className="rhap_main-controls-button rhap_button-clear" onClick={(e) => handledelete(e, playlist.playlistId)}>
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </button>
                                            ) :
                                                (
                                                    <button className="rhap_main-controls-button rhap_button-clear">
                                                        <FontAwesomeIcon icon={faShare} />
                                                    </button>
                                                )
                                            }

                                        </div>
                                    </div>
                                </NavLink>
                            </div>

                        {isDes ?
                            <span className="playlist_description">{playlist.description}</span>
                            :
                            <NavLink to={`/playlist/${playlist.playlistId}`} className="playlist_name">
                                {playlist.playlistname}
                            </NavLink>}
                        </div>
                    </div>
                )
                )
            }
        </div >
    );
};
export default Card;