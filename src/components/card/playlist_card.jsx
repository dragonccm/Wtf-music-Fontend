import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faShare } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";
// import SongDataContext from '../../lib/Context/SongContext';
// import React, { useContext } from 'react';
import 'reactjs-popup/dist/index.css';

// import { faCirclePlayFull } from '@fortawesome/free-solid-svg-icons'
// import { faHeartFull } from '@fortawesome/free-solid-svg-icons'
import { fetchSongPlaying } from "../../redux/slide/songPlayingSlice";
import { fetchPlayList } from '../../redux/slide/playlistSlice'
import { playlistroute } from "../../controller/playlist";
import Like_heart from "../card/like";

import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import "../../css/card.scss";
const Card = ({ playlist }) => {
    const dispatch = useDispatch();
    const currData = useSelector((state) => state.Authentication);
 
    const slicedData = playlist.slice(0, 5);
    console.log(slicedData)

    const handlePlayPlaylist = async (e, id) => {
        e.preventDefault();
        dispatch(fetchPlayList(id));
        let response = await playlistroute(id);
        if (response && response.data) {
            console.log(response.data)
            dispatch(fetchSongPlaying(response.data.song.items[0].encodeId))
            localStorage.setItem('playlistID', id)
        }
    };
    return (
        <div className="card_container">
            {slicedData.map((playlist, index) => playlist._id ?
                (
                    <div className="card_item" key={'ola' + index}>
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
                            <NavLink to={`/playlist/${playlist.encodeId}`} className="img_overlay">
                                <div className="img_overlay">
                                    <div className="img_overlay_group_btn">
                                        <Like_heart id={playlist.encodeId} type={'playlist'} />



                                        <div
                                            className="nav-link list_nav_item"
                                            onClick={(e) => handlePlayPlaylist(e, playlist.encodeId)}
                                        >
                                            
                                                <FontAwesomeIcon className="play_icon" icon={faCirclePlay} />
                                           
                                        </div>
                                        <button className="rhap_main-controls-button rhap_button-clear">
                                            <FontAwesomeIcon icon={faShare} />
                                        </button>
                                    </div>
                                </div>
                            </NavLink>
                        </div>

                        <NavLink to={`/playlist/${playlist.encodeId}`} className="playlist_name">
                            {playlist.playlistname}
                        </NavLink>
                    </div>
                ) : (
                    <div className="card_item" key={'ola' + index}>
                        <div className="img_container">
                            <img
                                src={
                                    playlist.thumbnailM
                                        ? playlist.thumbnailM
                                        : 'https://res.cloudinary.com/drupmc7qd/image/upload/v1714275641/vqsvqsxebphgymfqkgkq.jpg'
                                }
                                alt="f"
                                className="img"
                            />
                            <NavLink to={`/playlist/${playlist.encodeId}`} className="img_overlay">
                                <div className="img_overlay">
                                    <div className="img_overlay_group_btn" onClick={(e)=>e.preventDefault()}>
                                        <Like_heart id={playlist.encodeId} type={'playlist'} />

                                        <div
                                            className="nav-link list_nav_item"
                                            onClick={(e) => handlePlayPlaylist(e, playlist.encodeId)}
                                        >
                                            
                                                <FontAwesomeIcon className="play_icon" icon={faCirclePlay} />
                                            
                                        </div>
                                        <button className="rhap_main-controls-button rhap_button-clear">
                                            <FontAwesomeIcon icon={faShare} />
                                        </button>
                                    </div>
                                </div>
                            </NavLink>
                        </div>

                        <NavLink to={`/playlist/${playlist.encodeId}`} className="playlist_name">
                            {playlist.sortDescription ? playlist.sortDescription : playlist.title}
                        </NavLink>
                    </div>
                ))
            }
        </div >
    );
};
export default Card;