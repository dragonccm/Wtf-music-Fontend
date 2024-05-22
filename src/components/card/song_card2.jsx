import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faHeart, faMusic } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import { faHeart as regular } from "@fortawesome/free-regular-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { fetchSongPlaying, update } from "../../redux/slide/songPlayingSlice";
import { fetchPlayList } from '../../redux/slide/playlistSlice'

import '../../css/song_card2.scss';
import Play_animation from "./play_animation"

const SongCard2 = ({ data, rating, onPlaylist }) => {
    const dispatch = useDispatch();
    const idPlaylistNow = useSelector((state) => state.playlist.playlist.data.encodeId);
    const handlePlaying = (e, id) => {
        if (onPlaylist.isPlay) {
            console.log(idPlaylistNow)
            console.log(onPlaylist.idPlaylist)
            if (idPlaylistNow !== onPlaylist.idPlaylist) {
                dispatch(fetchPlayList(onPlaylist.idPlaylist));
                dispatch(update(rating.index))
                localStorage.setItem('playlistID', onPlaylist.idPlaylist)
            }

        }
        e.preventDefault();
        dispatch(fetchSongPlaying(id));
    }
    const songInfo = useSelector((state) => state.getSongData.inforSong);

    return (
        <div className="song_card2">
            <div className="song_img_ctn">
                {rating.israting ?
                    <div className="row_order">
                        <div className="number">{rating.index + 1}</div>
                    </div>
                    :
                    <div className="icon_start"><FontAwesomeIcon icon={faMusic} /></div>
                }

                <div className="song_img">
                    <img src={data.thumbnailM} alt="f" />
                    {data.encodeId === songInfo.infor.id ?
                        <Play_animation />
                        :

                        <div className="img_overlay">
                            <div className="img_overlay_group_btn">
                                <NavLink to={data.encodeId} onClick={(e) => handlePlaying(e, data.encodeId ? data.encodeId : data.id)} className="nav-link list_nav_item">
                                    <FontAwesomeIcon icon={faPlay} />
                                </NavLink>
                            </div>
                        </div>
                    }
                </div>
                <div className="songif">
                    <div className="songname">
                        <NavLink
                            to={"/song/" + data.encodeId}>
                            {data.title}
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
            <div className="foot_r">
                <div className="liked">
                    <FontAwesomeIcon icon={data.liked_state ? faHeart : regular} />
                </div>
                <div className="time">{String(Math.floor(data.duration / 60)).padStart(2, "0") + ':' + String(data.duration % 60).padStart(2, "0")}</div>
            </div>
        </div>
    )
}
export default SongCard2