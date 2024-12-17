import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faMusic, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, {  useState,useEffect } from "react";
import { fetchSongPlaying, update, toPlay } from "../../redux/slide/songPlayingSlice";
import { fetchPlayList, randomSongs } from '../../redux/slide/playlistSlice'
import { removeUserBlocked } from '../../redux/slide/InforUserSlice'
import { ChangeBlockList} from "../../redux/slide/AuthenticationSlice";

import Like_heart from "./like";
import {reomoveBlockList} from "../../controller/MyPlaylist"
import '../../css/song_card2.scss';
import Play_animation from "./play_animation"

const SongCard2 = ({ data, rank, rating, onPlaylist, size, block }) => {

    const dispatch = useDispatch();
    const Playlist = useSelector((state) => state.playlist.playlist.playlist);
    const blockSong = useSelector((state) => state.Authentication.blockSong);
    const [isBlocked, setIsBlocked] = useState(true)
    const idPlaylistNow = Playlist && Playlist.playlistId

    useEffect(() => {
        console.log('đã đổiiiiiiiiiiiiiiiii');
        
        if (blockSong.includes(data.id)) {
            // console.log(`ID ${data.id} có nằm trong mảng.`);
            setIsBlocked(true)
          } else {
            // console.log(`ID ${data.id} không nằm trong mảng.`);
            setIsBlocked(false)

          }
    },[blockSong])

    const handlePlaying = async (e, id) => {
        e.preventDefault();
        if (songInfo.infor.id === id) {
            dispatch(toPlay());
        } else {
            if (onPlaylist && onPlaylist.isPlay) {
                console.log(idPlaylistNow)
                console.log(onPlaylist.idPlaylist)
                // kiểm tra bài hát này có thuộc playlist hiện tại đang dc phát k,
                // nếu k thì get playlist mới của bài hát đó
                if (idPlaylistNow !== onPlaylist.idPlaylist) {
                    await dispatch(fetchPlayList({ id: onPlaylist.idPlaylist }));
                    if (JSON.parse(localStorage.getItem('isRandom'))) {
                        await dispatch(randomSongs())
                    }
                    dispatch(update(rating.index))
                    console.log('ahhahahahahahah');
                    localStorage.setItem('playlistID', onPlaylist.idPlaylist)
                    localStorage.removeItem('playlistRelate')
                }

            }
            dispatch(fetchSongPlaying(id));
        }
    }
    const handleUnBlock = (id) => {
        const unblock = async () => {
            console.log('lolo');
            const response = await reomoveBlockList(id);
            if (response.EC === '0') {
                dispatch(removeUserBlocked(id))
                dispatch(ChangeBlockList(response.DT))
            }
        }
        unblock()
        
    }
    const songInfo = useSelector((state) => state.getSongData.inforSong);
    const playing = useSelector((state) => state.getSongData.playStatus);
    return (
        <div className={size ? "song_card2 mini" : "song_card2"}>
            <div className="song_img_ctn">
                {rating.israting ?
                    <div className="row_order">
                        <div className="number">{rating.index + 1}</div>
                        {rank &&
                            <div className="go_to">
                                {rank.index2 - rank.index1 > 0 ?
                                    (<><FontAwesomeIcon className="upup" icon={faCaretUp} /> <span>{rank.index2 - rank.index1}</span></>)
                                    :
                                    rank.index1 - rank.index2 > 0 ?
                                        (<><FontAwesomeIcon className="downdown" icon={faCaretDown} /> <span>{rank.index1 - rank.index2}</span></>)
                                        :
                                        (<span>--</span>)
                                }
                            </div>}

                    </div>
                    :
                    <div className="icon_start"><FontAwesomeIcon icon={faMusic} /></div>
                }

                <div className="song_img">
                    <img src={data.thumbnail} alt="f" />
                    {songInfo.infor && songInfo.infor.id && data.id === songInfo.infor.id && playing ?
                        <Play_animation />
                        :

                        <div className="img_overlay">
                            <div className="img_overlay_group_btn">
                               {!isBlocked && <NavLink to={data.id} onClick={(e) => handlePlaying(e, data.id)} className="nav-link list_nav_item">
                                    <FontAwesomeIcon icon={faPlay} />
                                </NavLink>}
                            </div>
                        </div>
                    }
                </div>
                <div className="songif">
                    <div className="songname">
                        <NavLink
                            to={"/song/" + data.id}>
                            {data.songname}
                        </NavLink>
                    </div>
                    <div className="songartist">
                        {data.artists && data.artists.map(
                            (artist, index) => (
                                <span key={index}>
                                    <NavLink
                                        to={
                                            "/artists/" +
                                            artist.alias
                                        }
                                    >
                                        {artist.name}
                                    </NavLink>
                                    {index !==
                                        data.artists
                                            .length -
                                        1 && ","}
                                </span>
                            )
                        )}
                    </div>
                </div>
            </div>
            <div className="root_album"></div>
            {/* <div className="added_time">{data.addedday}</div> */}
            {!block ?
                <div className="foot_r">
                    {!size && <Like_heart id={data.id} type={'song'} />}
                    <div className="time">{String(Math.floor(data.duration / 60)).padStart(2, "0") + ':' + String(Math.round(data.duration) % 60).padStart(2, "0")}</div>
                </div>
                :
                <button className='block_btn' onClick={()=>handleUnBlock(data.id)}>Bỏ chặn</button>
            }
        </div>
    )
}
export default SongCard2