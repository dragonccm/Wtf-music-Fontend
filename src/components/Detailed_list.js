import React from "react";
import "../css/Detailed_list.css";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regular } from '@fortawesome/free-regular-svg-icons'

import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'

import Recommended from './Recommended'
const Detailed_list = () => {


    const Recommendeds = Array.from({ length: 5 }, (_, index) => ({
        id: index,
        name: `Playlist ${index + 1}`,
        image: "../../img/_e1a54268-fb6e-4c76-98a4-8a32aef31266.jpg",
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
        image: "../../img/_e1a54268-fb6e-4c76-98a4-8a32aef31266.jpg",
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
        <section>
            <div className="list_head">

                <div className="left_head">
                    <img src="../../img/_e1a54268-fb6e-4c76-98a4-8a32aef31266.jpg" alt="" />
                </div>

                <div className="mid_head">
                    <p>PlayList</p>
                    <h1 className="list_name">MyList</h1>
                    <p className="info">
                        <div className="small_avt">
                            <img src="../../img/_e1a54268-fb6e-4c76-98a4-8a32aef31266.jpg" alt="" />
                        </div>
                        <div className="user_name">long</div>
                        .
                        <div className="total_song">41 bài hát,</div>
                        <div className="total_time">2 giờ 15 phút</div>
                    </p>
                </div>

            </div>

            <div className="list_body">

                <div className="control">
                    <button className="play_random">
                        <FontAwesomeIcon icon={faCirclePlay} />
                    </button>
                    <Popup trigger={<button className="menu_btn">  <FontAwesomeIcon icon={faEllipsis} /></button>} position="left top"
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


                <div className="list">
                    {/* lable */}
                    <div className="list_lable">
                        <div className="lable1">
                            <div>#</div>
                            <div>Tiêu Đề</div>
                        </div>
                        <div className="lable2">
                            Album
                        </div>
                        <div className="lable3">
                            Ngày Thêm
                        </div>
                        <div className="lable4">
                            <FontAwesomeIcon icon={faClock} />
                        </div>
                    </div>
                    {/* lable */}

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
                                    <img src={data.image} alt="" />
                                </div>
                                <div className="songif">
                                    <div className="songname">{data.songname}</div>
                                    <div className="songartist">{data.songartist}</div>
                                </div>
                            </div>
                            <div className="root_album">{data.root_album}</div>
                            <div className="added_time">{data.addedday}</div>
                            <div className="foot">
                                <div className="liked"><FontAwesomeIcon icon={data.liked_state ? faHeart : regular} /></div>
                                <div className="time">{data.songname}</div>
                            </div>
                        </div>
                    ))}


                    {/* lable */}
                    <h1 className="Recommended">Recommended</h1>
                    <p className="Recommended_1">Based on what's in this playlist</p>
                    {/* lable */}



                    {/* Recommended */}

                    <Recommended datas={Recommendeds}/>
                    {/* Recommended */}

                    
                </div>
            </div>

        </section>
    )

}
export default Detailed_list