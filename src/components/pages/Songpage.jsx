import React from "react";
import "../../css/Songpage.scss";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import ListCard from '../card/ListCard'

import Recommended from '../card/Recommended'
const Songpage = ({ data }) => {

    const hasRecommendedData = data && Array.isArray(data.Recommended);
    return (
        <section className="songpage_main">
            <div className="songpage_list_head">

                <div className="songpage_left_head">
                    <img src={data.avt} alt="f" />
                </div>

                <div className="songpage_mid_head">
                    <p>PlayList</p>
                    <h1 className="songpage_list_name">{data.songname}</h1>
                    <p className="songpage_info">
                        <div className="songpage_small_avt">
                            <img src={data.small} alt="f" />
                        </div>
                        <div className="songpage_user_name">{data.ar}</div>
                        .
                        <div className="songpage_total_song">41 bài hát,</div>
                        <div className="songpage_total_time">2 giờ 15 phút</div>
                    </p>
                </div>
            </div>


            <div className="song_body">
                <div className="song_control">
                    <button className="play_random">
                        <FontAwesomeIcon icon={faCirclePlay} />
                    </button>
                    <button className="like_btn">
                        <FontAwesomeIcon icon={faHeart} />
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

                {hasRecommendedData && (
                    <>
                        <Recommended datas={data.Recommended} type={"Recommended"} describe={'Based on this song'} maxItemsToShow="5" />
                        <Recommended datas={data.Recommended} type={"Popular"} describe={'Rap Việt'} maxItemsToShow="5" />
                    </>
                )}
            </div>
        </section>
    )
}

export default Songpage;