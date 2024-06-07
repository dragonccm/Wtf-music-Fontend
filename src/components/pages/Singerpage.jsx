import "../../css/Singerpage.scss";
import { faCirclePlay, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "../sideNavigation/mascot_animation";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchgArtist } from "../../redux/slide/artistSlice";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
const Singerpage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(fetchgArtist(id)).then(() => setLoading(false));
    }, [dispatch, id]);

    const currData = useSelector((state) => state.Artist.Artist);
    if (loading) {
        return (
            <div>
                <Loading />
            </div>
        );
    }

    return (
        <section className="main_artists">
            <section className="main_artists_head">
                <div className="artists_avt_ctn">
                    <img src={currData.avt} alt="f" />
                </div>
                <div className="artists_if_ctn">
                    <h1 className="artists_name">{currData.artistsName}</h1>
                    <p className="follower">
                        {currData.totalFollow} người quan tâm{" "}
                        <FontAwesomeIcon icon={faUser} />
                    </p>
                </div>
            </section>
            <div className="for_you">
                <h1>Bài Hát Nổi Bật</h1>
                <div className="carr_ctn">
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
                </div>
            </div>
            <h1 className="for_artist_lable">VỀ {currData.artistsName}</h1>
            <section className="for_artists_ctn">
                <div className="for_artist_avt_ctn">
                    <img src={currData.avt} alt="f" />
                </div>
                <div className="for_artist_if_ctn">
                    {/* <p className="for_artist_name" dangerouslySetInnerHTML={currData.biography ? { __html: currData.biography.replace(/<br>/g, "<br/>") }:''}></p> */}
                    <p className="for_artist_name">
                        {currData.biography
                            ? currData.biography.replace(/<br>/g, "\n")
                            : ""}
                    </p>
                    <p className="follower">
                        {currData.totalFollow
                            ? currData.totalFollow.toLocaleString()
                            : ""}{" "}
                        người quan tâm
                    </p>
                </div>
            </section>
        </section>
    );
};

export default Singerpage;
