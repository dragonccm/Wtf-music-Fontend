import React from "react";
import "../../css/Detailed_list.scss";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regular } from '@fortawesome/free-regular-svg-icons'

import { faPlay } from '@fortawesome/free-solid-svg-icons'
const Playlistpage = () => {


    const Recommendeds = Array.from({ length: 5 }, (_, index) => ({
        id: index,
        name: `Playlist ${index + 1}`,
        image: "https://th.bing.com/th/id/OIP.XusXZvUJb2jQFc8QvjBnIwHaL2?rs=1&pid=ImgDetMain",
        category: "playlist",
        songartist: "jisoo",
        songname: "Flower",
        addedday: "11 thg 11, 2021",
        liked_state: false,
        songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
        total: "3:00",
        root_album: "Solo"
    }));
    const My_list = Array.from({ length: 10 }, (_, index) => ({
        id: index,
        name: `Playlist ${index + 1}`,
        image: "https://th.bing.com/th/id/OIP.XusXZvUJb2jQFc8QvjBnIwHaL2?rs=1&pid=ImgDetMain",
        category: "playlist",
        songartist: "jisoo",
        songname: "Flower",
        addedday: "11 thg 11, 2021",
        liked_state: false,
        songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
        total: "3:00",
        root_album: "Solo"
    }));



    return (
        <section className="detailed_list">
            <div className="list_father">
                <div className="list_head">
                    <div className="list_info_ctn">
                        <div className="left_head">
                            <img src="https://i.pinimg.com/originals/3a/f1/e7/3af1e70ef7617658aeb52141f47f51b0.jpg" alt="f" />
                        </div>
                        <div className="mid_head">
                            <p>PlayList</p>
                            <h1 className="list_name">MyList</h1>
                            <p className="info">
                                <div className="small_avt">
                                    <img src="https://i.pinimg.com/originals/3a/f1/e7/3af1e70ef7617658aeb52141f47f51b0.jpg" alt="" />
                                </div>
                                <div className="user_name">long</div>
                                .
                                <div className="total_song">41 bài hát,</div>
                                <div className="total_time">2 giờ 15 phút</div>
                            </p>
                        </div>
                    </div>
                    <section className="description">
                        <p>Top 100 Nhạc Pop Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Pop Âu Mỹ, được Zing MP3 tự động tổng hợp dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy trong 30 ngày gần nhất và được cập nhật liên tục.</p>
                    </section>
                    <div className="control">
                        <button className="play_random">
                            <FontAwesomeIcon icon={faCirclePlay} />
                            Phát Ngẫu Nhiên
                        </button>
                        <div className="child_btn_gr">
                            <button className="play_random">
                                <FontAwesomeIcon icon={regular} />
                            </button>
                            <Popup trigger={<button className="menu_btn">  <FontAwesomeIcon icon={faEllipsis} /></button>} position="left top"
                                nested
                                closeOnDocumentClick
                                mouseLeaveDelay={300}
                                mouseEnterDelay={0}
                                contentStyle={{ padding: '0', border: 'none' }}
                                arrow={false}>
                                <div className="menu">
                                    <button className="menu-item"> item 1</button>
                                    <button className="menu-item"> item 2</button>
                                    <button className="menu-item"> item 3</button>
                                </div>
                            </Popup>
                        </div>
                    </div>
                </div>

                <div className="list_body">

                    <div className="list">
                        {My_list.map((data, index) => (
                            <div className="list_row">
                                <div className="song_img_ctn">
                                    <div className="row_order">
                                        <div className="number">
                                            {index}
                                        </div>
                                        <div className="hidden_button">
                                            <button className="play">
                                                <FontAwesomeIcon icon={faPlay} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="song_img">
                                        <img src={data.image} alt="f" />
                                    </div>
                                    <div className="songif">
                                        <div className="songname">{data.songname}</div>
                                        <div className="songartist">{data.songartist}</div>
                                    </div>
                                </div>
                                <div className="root_album">{data.root_album}</div>
                                <div className="foot">
                                    <div className="liked"><FontAwesomeIcon icon={data.liked_state ? faHeart : regular} /></div>
                                    <div className="time">{data.songname}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    )

}
export default Playlistpage