import "../../css/Singerpage.scss";
import { faCirclePlay, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Col3Layout from "../card/col_3_layout";
import Card from "../card/playlist_card";

import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { fetchgArtist } from '../../redux/slide/artistSlice'
import { useSelector, useDispatch } from "react-redux";
const Singerpage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(fetchgArtist(id)).then(() => setLoading(false));
    }, [dispatch, id]);

    const currData = useSelector((state) => state.Artist.Artist);
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <section className="main_artists">
            <section className="main_artists_head">
                <div className="artists_avt_ctn">
                    <img src={currData.img} alt="f" />
                </div>
                <div className="artists_if_ctn">
                    <h1 className="artists_name">{currData.name} <FontAwesomeIcon icon={faCirclePlay} /></h1>
                    <p className="follower">{currData.totalFollow} người quan tâm <FontAwesomeIcon icon={faUser} /></p>
                </div>
            </section>
            <div className="list_card">
                <h1>PlayList</h1>
                <Card playlist={currData.playlist} />
            </div>
            <div className="for_you">
                <h1>Bài Hát Nổi Bật</h1>
               

                <Col3Layout data={currData.songFavorite} />
            </div>
            <div className="list_card">
                <h1>Xuất Hiện Trong...</h1>
                <Card playlist={currData.playlist} />
            </div>

            <h1 className="for_artist_lable">VỀ {currData.name}</h1>
            <section className="for_artists_ctn">
                <div className="for_artist_avt_ctn">
                    <img src={currData.img} alt="f" />
                </div>
                <div className="for_artist_if_ctn">
                <p className="for_artist_name" dangerouslySetInnerHTML={{__html: currData.biography.replace(/<br>/g, "<br/>")}}></p>
                    <p className="follower">{currData.totalFollow.toLocaleString()} người quan tâm</p>
                </div>
            </section>
        </section>
    );
}

export default Singerpage;