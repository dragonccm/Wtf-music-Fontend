import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faShare, faTrash } from "@fortawesome/free-solid-svg-icons";

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
import { deleteplaylistService } from "../../services/deleteMyPlaylist"
import React, { useState,useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";

import "../../css/card.scss";
const Card = ({ playlist, isOw }) => {
    const dispatch = useDispatch();
    const currData = useSelector((state) => state.Authentication);
    const playlistNow = useSelector((state) => state.playlist.playlist);
    const slicedData = playlist.slice(0, 5);
    
    const handlePlayPlaylist = async (e, id) => {
        e.preventDefault();
        dispatch(fetchPlayList(id));
        let response = await playlistroute(id);
        if (response && response.DT.data) {
            console.log(response.DT.data)
            dispatch(fetchSongPlaying(response.DT.data.playlist.songid[0]))
            localStorage.setItem('playlistID', id)
        }
    };
    const handledelete = async (e, id) => {
        e.preventDefault();
        const response = await deleteplaylistService({ playlistId: id });
        if (response && response.EC === '0') {
            toast.success('Xóa thành công');
            // Remove the deleted playlist from the playlist array
            const updatedPlaylist = playlist.filter(item => item.playlistId !== id);
            dispatch(fetchPlayList([...updatedPlaylist])); // Update the state with the new playlist array
        } else {
            toast.error('Xóa thất bại');
        }
    };
    return (
        <div className="card_container">
            {slicedData.map((playlist, index) => playlist && playlist._id ?
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
                                            <button className="rhap_main-controls-button rhap_button-clear" onClick={(e)=>handledelete(e, playlist.playlistId)}>
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

                        <NavLink to={`/playlist/${playlist.playlistId}`} className="playlist_name">
                            {playlist.playlistname}
                        </NavLink>
                    </div>
                ) : (
                    <div className="card_item" key={'ola' + index}>
                        <div className="img_container">
                            <img
                                src={
                                    playlist && playlist.thumbnailM
                                        ? playlist.thumbnailM
                                        : 'https://res.cloudinary.com/drupmc7qd/image/upload/v1714275641/vqsvqsxebphgymfqkgkq.jpg'
                                }
                                alt="f"
                                className="img"
                            />
                            <NavLink to={`/playlist/${playlist.playlistId}`} className="img_overlay">
                                <div className="img_overlay">
                                    <div className="img_overlay_group_btn" onClick={(e) => e.preventDefault()}>
                                        <Like_heart id={playlist.playlistId} type={'playlist'} />

                                        <div
                                            className="nav-link list_nav_item"
                                            onClick={(e) => handlePlayPlaylist(e, playlist.playlistId)}
                                        >

                                            <FontAwesomeIcon className="play_icon" icon={faCirclePlay} />

                                        </div>
                                        {isOw === "you" ? (
                                            <button className="rhap_main-controls-button rhap_button-clear" onClick={(e)=>handledelete(e, playlist.playlistId)}>
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

                        <NavLink to={`/playlist/${playlist.playlistId}`} className="playlist_name">
                            {playlist.sortDescription ? playlist.sortDescription : playlist.title}
                        </NavLink>
                    </div>
                ))
            }
        </div >
    );
};
export default Card;