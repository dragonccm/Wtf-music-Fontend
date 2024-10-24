import "../../../css/Singerpage.scss";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "../../sideNavigation/mascot_animation";
import Col3Layout from "../../card/col_3_layout";
import Card from "../../card/playlist_card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchgArtist } from "../../../redux/slide/artistSlice";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import ArtistList from "../../card/artistList"
const Singerpage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(fetchgArtist(id)).then(() => setLoading(false));
    }, [dispatch, id]);

    const currData = useSelector((state) => state.Artist.Artist.DT);
    if (loading) {
        return (
            <div>
                <Loading />
            </div>
        );
    }

    return (


        <section className="main_artists">
            <div className="artist-hero">
                <div className="blur-container">
                    <div class="blur" style={{ backgroundImage: `url(${currData.avt})` }}></div>
                    <div class="bg-alpha"></div>
                </div>
                <section className="main_artists_head">
                    <div className="artists_avt_ctn">
                        <img src={currData.avt} alt="f" />
                    </div>
                    <div className="artists_if_ctn">
                        <h1 className="artists_name">{currData.artistsName}</h1>
                        <div className="group_follow">
                            <p className="follower">
                                {currData.totalFollow
                                    ? currData.totalFollow.toLocaleString()
                                    : ""}{" "} người quan tâm{" "}

                            </p>
                            <button className="btn-follow"><FontAwesomeIcon icon={faUserPlus} /> Quan tâm</button>
                        </div>
                    </div>
                </section>
            </div>
            <div className="for_you">
                <div style={{ marginTop: '20px' }} className="d-flex justify-content-between align-items-baseline">
                    <h1 style={{ marginBottom: '10px' }} className="catego_title">Bài Hát Nổi Bật</h1>
                    <NavLink to={`bai-hat`} className="playlist_name" style={{ width: 'auto' }}>
                        Xem tất cả
                    </NavLink>
                </div>
                {currData && currData.songListId && currData.songListId[0] &&
                    <Col3Layout
                        data={currData.songListId}
                        rowSize={3}
                        col={2}
                        isDuration={true}
                    />}
                {/* <div className="carr_ctn">
                            {currData.songListId && currData.songListId.map((item) => (
                                <NavLink className="carr" key={item._id} to={"/song/" + item.id}>
                                        <div className="carr_img">
                                            <img src={item.thumbnail} alt="f" />
                                        </div>
                                        <p className="carr_songname">
                                            {item.songname}
                                        </p>
            
                                </NavLink>
                            ))}
                        </div> */}
            </div>
            {currData.playListId && currData.playListId.length > 0 && <div className="list_card">
                <div style={{ marginTop: '20px' }} className="d-flex justify-content-between align-items-baseline">

                    <h1>Album</h1>
                    <NavLink to={`playlist`} className="playlist_name" style={{ width: 'auto' }}>
                        Xem tất cả
                    </NavLink>
                </div>
                <Card playlist={currData.playListId} />
            </div>}
            {currData.playlistJoin && currData.playlistJoin.length > 0 && <div className="list_card">
                <h1>Xuất hiện trong</h1>
                <Card playlist={currData.playlistJoin} />
            </div>}
            <div className="list_card">

                <h1>Bạn có thể thích</h1>
                <ArtistList data={currData.relatedArtists} />
            </div>
            <h1 className="for_artist_lable">VỀ {currData.artistsName}</h1>
            <section className="for_artists_ctn">
                <div className="for_artist_avt_ctn">
                    <img src={currData.avt} alt="f" />
                </div>
                <div className="for_artist_if_ctn">
                    <p className="for_artist_name" dangerouslySetInnerHTML={currData.biography ? { __html: currData.biography.replace(/<br>/g, "<br/>") } : ''}></p>
                    {/* <span className="for_artist_name">
                                {currData.biography
                                    ? currData.biography.replace(/<br>/g, "\n")
                                    : ""}
                            </span> */}
                    <div className="follower">
                        <p >
                            {currData.totalFollow
                                ? currData.totalFollow.toLocaleString()
                                : ""}{" "}

                        </p>
                        <p>Người quan tâm</p>
                    </div>
                </div>
            </section>
        </section>


    );
};

export default Singerpage;
