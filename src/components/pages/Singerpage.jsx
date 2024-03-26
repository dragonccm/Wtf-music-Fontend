import "../../css/Singerpage.scss";
import { faCirclePlay, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Col3Layout from "../card/col_3_layout";
import Card from "../card/song_card";

import { useEffect, useState } from "react";
import { fetchgArtist } from '../../redux/slide/artistSlice'
import { useSelector, useDispatch } from "react-redux";
const Singerpage = () => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(fetchgArtist()).then(() => setLoading(false));
    }, [dispatch]);

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
                <h1>Cùng Nghệ Sĩ</h1>
                <div className="radio-inputs">
                    <label>
                        <input className="radio-input " type="radio" name="engine" />
                        <span className="radio-tile ">
                            <span className="radio-icon">
                                Tất cả
                            </span>
                        </span>
                    </label>

                    <label>
                        <input className="radio-input " type="radio" name="engine" />
                        <span className="radio-tile ">
                            <span className="radio-icon">
                                Việt Nam
                            </span>
                        </span>
                    </label>

                    <label>
                        <input className="radio-input " type="radio" name="engine" />
                        <span className="radio-tile ">
                            <span className="radio-icon">
                                Quốc tế
                            </span>
                        </span>
                    </label>
                </div>

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
                    <p className="for_artist_name">Park Chae-young (Hangul: 박채영; Hanja: 朴彩英;
                        Hán-Việt: Phác Thái Anh sinh ngày 11 tháng 2 năm 1997
                        tên tiếng Anh là Roseanne Park), thường được biết đến
                        với nghệ danh Rosé là một nữ ca sĩ, thần tượng người
                        New Zealand gốc Hàn Quốc. Cô là thành viên nhóm
                        nhạc nữ Hàn Quốc BLACKPINK do công ty YG
                        Entertainment thành lập và quản lý</p>
                    <p className="follower">324.114 người quan tâm</p>
                </div>
            </section>
        </section>
    );
}

export default Singerpage;