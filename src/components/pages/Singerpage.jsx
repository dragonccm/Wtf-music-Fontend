import "../../css/Singerpage.scss";
import { faCirclePlay, faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Col3Layout from "../card/col_3_layout";
import Card from "../card/song_card";

const Singerpage = () => {
    const playlistsData = [
        {
            id: 1,
            name: `Playlist ${3 + 1}`,
            image: "https://th.bing.com/th/id/OIP.2Taaw3tCXQRTYFNqPYXOdgHaHa?rs=1&pid=ImgDetMain",
            artists_list: ["Jisso"],
        },
        {
            id: 3,
            name: `Playlist ${3 + 1}`,
            image: "https://i.redd.it/3sx2ys0arsv21.jpg",
            artists_list: ["Jisso"],
        },
        {
            id: 4,
            name: `Playlist ${3 + 1}`,
            image: "https://www.allkpop.com/upload/2021/01/content/070658/1610020733-20210107-rose.jpg",
            artists_list: ["Jisso"],
        },
        {
            id: 5,
            name: `Playlist ${3 + 1}`,
            image: "https://i2.wp.com/blackpinkupdate.com/wp-content/uploads/2019/05/1-BLACKPINK-Jennie-Instagram-Update-25-May-2019.jpg?fit=1080%2C1080&ssl=1",
            artists_list: ["Jisso"],
        },
        {
            id: 6,
            name: `Playlist ${3 + 1}`,
            image: "https://i.pinimg.com/736x/a7/a6/9d/a7a69d9337d6cd2b8b84290a7b9145ad.jpg",
            artists_list: ["Jisso"],
        },
    ]


    // song page



    const listSong = Array.from({ length: 9 }, (_, index) => ({
        img: 'https://media.baoquangninh.vn/upload/image/202307/medium/2100199_5fc049b4e26927b1f8e9720acdec299c.jpg',
        name: "Không phải gu",
        artist: 'Hiếu Thứ Hai'
    }));
    return (
        <section className="main_artists">
            <section className="main_artists_head">
                <div className="artists_avt_ctn">
                    <img src="https://media.baoquangninh.vn/upload/image/202307/medium/2100199_5fc049b4e26927b1f8e9720acdec299c.jpg" alt="f" />
                </div>
                <div className="artists_if_ctn">
                    <h1 className="artists_name">ROSÉ   <FontAwesomeIcon icon={faCirclePlay} /></h1>
                    <p className="follower">324.114 người quan tâm <FontAwesomeIcon icon={faUser} /></p>
                </div>
            </section>
            <div className="list_card">
                <h1>PlayList</h1>
                <Card playlist={playlistsData} />
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

                <Col3Layout data={listSong} />
            </div>
            <div className="list_card">
                <h1>Xuất Hiện Trong...</h1>
                <Card playlist={playlistsData} />
            </div>

            <h1 className="for_artist_lable">VỀ ROSÉ</h1>
            <section className="for_artists_ctn">
                <div className="for_artist_avt_ctn">
                    <img src="https://media.baoquangninh.vn/upload/image/202307/medium/2100199_5fc049b4e26927b1f8e9720acdec299c.jpg" alt="f" />
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