import "../../css/Songpage.scss";
import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import { NavLink } from "react-router-dom";
import "reactjs-popup/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faShare, faLink, faEllipsis,faHeart } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchSongPlaying } from "../../redux/slide/songPlayingSlice";
import Loading from "../sideNavigation/mascot_animation";
import Card from "../card/playlist_card";
import CreatePlaylist from "../card/createPlaylist";
import Like_heart from "../card/like";
import Col3Layout from "../card/col_3_layout";
import Comments from "../card/comment/comments";
import {
    reportComment,
    createComment,

} from "../../services/restcomment_service";
import { getComment } from '../../controller/restcomment.controller'
import { songPage } from "../../controller/song";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Songpage = () => {
    const dispatch = useDispatch();

    const { id } = useParams();
    const [data, setData] = useState({});
    const blockSong = useSelector((state) => state.Authentication.blockSong);
    const [isBlocked, setIsBlocked] = useState(true)
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    const isAuthentication = useSelector((state) => state.Authentication.defaultUser);






    useEffect(() => {
        console.log('hahah');

        const getComments = async (id) => {
            const response = await getComment(id);

        };
        getComments(id);
    }, [loading]);
    useEffect(() => {
        console.log('đã đổiiiiiiiiiiiiiiiii');

        if (data && data.DT && blockSong.includes(data.DT.song.id)) {
            // console.log(`ID ${data.id} có nằm trong mảng.`);
            setIsBlocked(true)
        } else {
            // console.log(`ID ${data.id} không nằm trong mảng.`);
            setIsBlocked(false)

        }
    }, [data, blockSong])
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchSongPage(id);
            setData(response);
        };

        fetchData();
        const getComments = async (id) => {
            const response = await getComment(id);
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

    if (!data) {
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
            console.log(
                `ID ${id} không trùng với bất kỳ bài hát nào trong playlist.`
            );
        }
        dispatch(fetchSongPlaying(id));
    };
    const handleReport = async (id) => {
        const res = await reportComment(id, isAuthentication.account.id);
        if (res.EC === "0") {
            toast.success(res.EM);
        } else if (res.EC === "2") {
            toast.warning(res.EM);
        }
    };

    return (
        Object.keys(data).length !== 0 &&
        <section className="songpage_main">
            <div className="songpage_list_head">
                <div className="songpage_left_head">
                    <img src={data.DT.song.thumbnail} alt="f" />
                </div>

                <div className="songpage_mid_head">
                    <h5>Bài hát</h5>
                    <h1 className="songpage_list_name">
                        {data.DT.song.songname}
                    </h1>
                    <p className="songpage_info">
                        <div className="songpage_user_name">

                            {data.DT.song.artistInfo.map((artist, index) => (
                                <span key={index}>
                                    <NavLink to={"/artists/" + artist.alias}>{artist.artistsName}</NavLink>
                                    {index !== data.DT.song.artistInfo.length - 1 && ", "}
                                </span>
                            ))}
                        </div>
                        •
                        <div className="songpage_total_song">
                            {data.DT.song.like > 1000
                                ? Math.ceil(data.DT.song.like / 1000) + "k"
                                : data.DT.song.like}{" "}
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        •
                        <div className="songpage_total_time">
                            {String(
                                Math.floor(data.DT.song.duration / 60)
                            ).padStart(2, "0") +
                                ":" +
                                String(data.DT.song.duration % 60).padStart(
                                    2,
                                    "0"
                                )}
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
                    <Popup
                        trigger={
                            <button className="menu_btn">
                                {" "}
                                <FontAwesomeIcon icon={faEllipsis} />
                            </button>
                        }
                        position="right top"
                        nested
                        closeOnDocumentClick
                        mouseLeaveDelay={300}
                        mouseEnterDelay={0}
                        contentStyle={{ padding: "0", border: "none" }}
                        arrow={false}
                    >
                        <div className="menu-plalist">
                            <button
                                className="menu-item"
                                onClick={(e) => e.preventDefault()}
                            >
                                <CreatePlaylist idSongs={[id]} />
                            </button>
                            <button className="menu-item">
                                <FontAwesomeIcon icon={faLink} /> Sao Chép Link
                            </button>
                            <button className="menu-item">
                                <FontAwesomeIcon icon={faShare} /> Chia Sẽ
                            </button>
                        </div>
                    </Popup>
                </div>

                <div className="r_element">
                    <div className="r_element_item">
                        <h1>Bài hát liên quan </h1>
                        <Col3Layout data={data.DT.songRelated} />
                    </div>

                    <div className="r_element_item">
                        <h1>Playlist liên quan</h1>
                        <Card playlist={data.DT.playlistRelated} />
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
            <ToastContainer
                style={{ fontSize: "16px" }}
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </section>
    );
};

export default Songpage;
