import "../../css/Songpage.scss";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faShare } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import {
    faHeart,
    faSquarePlus,
    faPlay,
    faLink,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { fetchPlayList } from '../../redux/slide/playlistSlice'
import { fetchPageSong } from "../../redux/slide/songPageSlice";
import { useSelector, useDispatch } from "react-redux";
import { fetchSongPlaying } from "../../redux/slide/songPlayingSlice";
// import ListCard from "../card/ListCard";
import Loading from "../sideNavigation/mascot_animation";
import Card from "../card/playlist_card";
import CreatePlaylist from "../card/createPlaylist";
import Like_heart from "../card/like";
import Col3Layout from "../card/col_3_layout";
import {
    reportComment,
    createComment,
    getComment,
} from "../../services/restcomment_service";
import { songPage } from "../../controller/song";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Songpage = () => {
    const dispatch = useDispatch();

    const { id } = useParams();
    const [data, setData] = useState({});

    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmitComment = async (event) => {
        setLoading(true);
        event.preventDefault();
        const newComment = event.target.opinion.value;
        if (newComment) {
            await createComment({ comments: newComment, id });
            setLoading(false);

            event.target.opinion.value = "";
        }
    };

    const handleKeyDown = (event) => {
        event.preventDefault();
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            handleSubmitComment(event);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchSongPage(id);
            setData(response);
        };

        fetchData();
        const getComments = async (id) => {
            const response = await getComment(id);
            setComments(response.DT);
        };
        getComments(id);
    }, []);

    useEffect(() => {
        const getComments = async (id) => {
            const response = await getComment(id);
            setComments(response.DT);
        };
        getComments(id);
    }, [loading]);
    const fetchSongPage = async (id) => {
        try {
            const response = await songPage(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    };
    const dataf = useSelector((state) => state.playlist.playlist);

    if (!data.DT) {
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
        const res = await reportComment(id);
        if (res.EC === "0") {
            toast.success(res.EM);
        } else if (res.EC === "2") {
            toast.warning(res.EM);
        }
    };
    return (
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
                            {data.DT.song.artists[0].name}
                        </div>

                        <div className="songpage_total_song">
                            {data.DT.song.like > 1000
                                ? data.DT.song.like / 1000 + "k"
                                : data.DT.song.like}{" "}
                            người yêu thích
                        </div>
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
                    <button
                        className="play_random"
                        onClick={(e) => handlePlaying(e, id)}
                    >
                        <FontAwesomeIcon icon={faCirclePlay} />
                    </button>
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
                <div
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
                                                    className="btn btn-custom"
                                                    // onClick={() =>
                                                    //     handleOpenReport()
                                                    // }
                                                >
                                                    ...
                                                </button>
                                            ) : (
                                                // <button
                                                //     className="btn btn-custom"
                                                //     onClick={() =>
                                                //         handleReport(
                                                //             comment._id
                                                //         )
                                                //     }
                                                // >
                                                //     Báo cáo
                                                // </button>
                                                ""
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <form className="w-100" onSubmit={handleSubmitComment}>
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
                            <div class="ms-3 btn-group">
                                <button class="btn submit">Gửi</button>
                            </div>
                        </div>
                    </form>
                </div>
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
