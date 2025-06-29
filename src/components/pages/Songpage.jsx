import "../../css/Songpage.scss";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "reactjs-popup/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay,faHeart } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchSongPlaying } from "../../redux/slide/songPlayingSlice";
import Loading from "../sideNavigation/mascot_animation";
import Card from "../card/playlist_card";
import Like_heart from "../card/like";
import Col3Layout from "../card/col_3_layout";
import Comments from "../card/comment/comments";
import {
    reportComment,

} from "../../services/restcomment_service";
import { getComment } from '../../controller/restcomment.controller'
import { songPage } from "../../controller/song";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setUserPlaylist } from "../../redux/slide/InforUserSlice";
import { userPLayList } from "../../controller/MyPlaylist";
import { adSongToPl } from '../../redux/slide/adSongToPlaylistSlice';
import { createPl } from '../../redux/slide/createplaylistSlice';
import CreatePlaylist from "../card/createPlaylist";

const Songpage = () => {
    const dispatch = useDispatch();

    const { id } = useParams();
    const [dataSong, setDataSong] = useState({});
    const blockSong = useSelector((state) => state.Authentication.blockSong);
    const [isBlocked, setIsBlocked] = useState(true);
    const [loading, setLoading] = useState(false);
    const isAuthentication = useSelector((state) => state.Authentication.defaultUser);
    const [playlistName, setPlaylistName] = useState('');
    const [clickedButtons, setClickedButtons] = useState([]);

    const currData = useSelector((state) => state.inforUser);
    const userPlaylist = useSelector((state) => state.inforUser.userPlaylist);

    useEffect(() => {
        const fetchPlaylist = async () => {
            const response = await userPLayList();
            if (response.EC === "0") {
                dispatch(setUserPlaylist(response.DT));
            }
        };
        fetchPlaylist();
    }, [dispatch]);

    useEffect(() => {
        console.log('hahah');

        const getComments = async (id) => {
            await getComment(id,1);
        };
        getComments(id);
    }, [loading]);

    useEffect(() => {
        console.log('đã đổiiiiiiiiiiiiiiiii');

        if (dataSong && dataSong.DT && blockSong.includes(dataSong.DT.song.id)) {
            // console.log(`ID ${dataSong.id} có nằm trong mảng.`);
            setIsBlocked(true)
        } else {
            // console.log(`ID ${dataSong.id} không nằm trong mảng.`);
            setIsBlocked(false)

        }
    }, [dataSong, blockSong])
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchSongPage(id);
            setDataSong(response);
        };

        fetchData();
        const getComments = async (id) => {
            const response = await getComment(id,1);
        };
        getComments(id);
    }, [id]);

    const fetchSongPage = async (id) => {
        try {
            const response = await songPage(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    };

    const dataf = useSelector((state) => state.playlist.playlist);

    if (!dataSong) {
        return (
            <div>
                <Loading />
            </div>
        );
    }

    const handlePlaying = (e, id) => {
        e.preventDefault();
        const song = dataf.song.find((item) => item.id === id);
        if (song) {
            console.log(`ID ${id} trùng với một bài hát trong playlist.`);
        } else {
            console.log(`ID ${id} không trùng với bất kỳ bài hát nào trong playlist.`);
        }
        dispatch(fetchSongPlaying(id));
    };


   

    return (
        Object.keys(dataSong).length !== 0 &&
        <section className="songpage_main">
            <div className="songpage_list_head">
                <div className="songpage_left_head">
                    {dataSong.DT && dataSong.DT.song && <img src={dataSong.DT.song.thumbnail} alt="f" />}
                </div>

                <div className="songpage_mid_head">
                    <h5>Bài hát</h5>
                    <h1 className="songpage_list_name">
                        {dataSong.DT && dataSong.DT.song && dataSong.DT.song.songname}
                    </h1>
                    <p className="songpage_info">
                        <div className="songpage_user_name">

                            {dataSong.DT.song.artistInfo.map((artist, index) => (
                                <span key={index}>
                                    <NavLink to={"/artists/" + artist.alias}>{artist.artistsName}</NavLink>
                                    {index !== dataSong.DT.song.artistInfo.length - 1 && ", "}
                                </span>
                            ))}
                        </div>
                        •
                        <div className="songpage_total_song">
                            {dataSong.DT.song.like > 1000
                                ? Math.ceil(dataSong.DT.song.like / 1000) + "k"
                                : dataSong.DT.song.like}{" "}
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        •
                        <div className="songpage_total_time">
                            {dataSong.DT && dataSong.DT.song && (String(
                                Math.floor(dataSong.DT.song.duration / 60)
                            ).padStart(2, "0") +
                                ":" +
                                String(dataSong.DT.song.duration % 60).padStart(
                                    2,
                                    "0"
                                ))}
                        </div>
                    </p>
                </div>
            </div>

            <div className="song_body">
                <div className="song_control">
                    {!isBlocked && <button
                        className="play_random"
                        onClick={(e) => handlePlaying(e, id)}
                    >
                        <FontAwesomeIcon icon={faCirclePlay} />
                    </button>}
                    <Like_heart id={id} type={"song"} />
                    {/* <button className="menu_btn" onClick={handleShowPlaylistModal}>
                        <FontAwesomeIcon icon={faCirclePlus} />
                    </button> */}
                    <CreatePlaylist idSongs={[dataSong.DT.song.id]} />
                  
                </div>

                <div className="r_element">
                    <div className="r_element_item">
                        <h1>Bài hát liên quan </h1>
                        {dataSong.DT && dataSong.DT.songRelated && <Col3Layout data={dataSong.DT.songRelated} />}
                    </div>

                    <div className="r_element_item">
                        <h1>Playlist liên quan</h1>
                        {dataSong.DT && dataSong.DT.playlistRelated && <Card playlist={dataSong.DT.playlistRelated} />}
                    </div>
                </div>
            </div>

            <div className="p-5 mt-5 song_user-rating">
                <Comments
                    commentsUrl="http://localhost:3004/comments"
                    currentUser={isAuthentication.account}
                    id={id}
                />

                {/* <div
                    style={{
                        width: "100%",
                        maxWidth: "100%",
                    }}
                    className="d-flex flex-column form_rating"
                >
                    <h2
                        className="text-center fw-bold pb-5"
                        style={{ fontSize: "x-large" }}
                    >
                        Bình luận ({comments.length})
                    </h2>

                    <div className="pb-5 d-flex flex-column user_reviews">
                        {comments.map((comment) => (
                            <div
                                className="d-flex mb-5 user-item"
                                key={comment._id}
                            >
                                <img
                                    className="bg-light cmt_avt"
                                    src={
                                        comment.userAvt
                                            ? comment.userAvt
                                            : "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
                                    }
                                ></img>
                                <div className="w-100 reviews">
                                    <div className="inf_user_reviews">
                                        <h4>{comment.userName}</h4>
                                        <span>{comment.content}</span>
                                    </div>
                                    <div className="d-flex">
                                        <div className="d-flex align-items-center">
                                            <span className="date_reviews">
                                                {new Date(
                                                    comment.createdAt
                                                ).toLocaleString("en-US", {
                                                    day: "numeric",
                                                    month: "numeric",
                                                    year: "numeric",
                                                    hour: "numeric",
                                                    minute: "numeric",
                                                    second: "numeric",
                                                })}
                                            </span>

                                            {comment.isOwnComment !== true ? (
                                                <button
                                                    className="btn btn-custom btn-custom-other"
                                                    onClick={() =>
                                                        handleReport(
                                                            comment._id
                                                        )
                                                    }
                                                >
                                                    !
                                                </button>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <form className="w-100" onSubmit={(event) => handleSubmitComment(event)}>
                        <div className="d-flex align-items-center justify-content-between handle_rating">
                            <img
                                className="bg-light"
                                src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
                            ></img>
                            <textarea
                                name="opinion"
                                placeholder="Để lại bình luận của bạn..."
                                onKeyDown={() => handleKeyDown}
                            ></textarea>
                            <div className="ms-3 btn-group">
                                <button className="btn submit">Gửi</button>
                            </div>
                        </div>
                    </form>
                </div> */}
            </div>
            
        </section>
    );
};

export default Songpage;
