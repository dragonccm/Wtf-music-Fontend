import { useDispatch } from "react-redux";
import { fetchSongPlaying } from "../../redux/slide/songPlayingSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay,faHeart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import { faHeart as regular } from "@fortawesome/free-regular-svg-icons";

import '../../css/song_card2.scss';

const SongCard2 = ({ data,rating }) => {
    const dispatch = useDispatch();
    const handlePlaying = (e, id) => {
        e.preventDefault();
        dispatch(fetchSongPlaying(id));
    }
    console.log(data)
    return (
        <div className="song_card2">
            <div className="song_img_ctn">
                <div className="row_order">
                    <div className="number">{rating.index + 1}</div>

                </div>
                <div className="song_img">
                    <img src={data.thumbnailM} alt="f" />
                    <div className="img_overlay">
                        <NavLink
                            to={'/' + data.encodeId}
                            onClick={(e) => handlePlaying(e, data.encodeId)}
                            className="nav-link list_nav_item"
                        >
                            <FontAwesomeIcon icon={faPlay} />
                        </NavLink>
                    </div>
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