import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faRankingStar } from '@fortawesome/free-solid-svg-icons'
import { faIcons } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'


import "../css/RightSidebar.css"
const RightSidebar = () => {
    // const playlists = Array.from({ length: 20 }, (_, index) => ({
    //     id: index,
    //     name: `Playlist ${index + 1}`,
    //     image: "../../img/_e1a54268-fb6e-4c76-98a4-8a32aef31266.jpg",
    //     category: "playlist",
    // }));
    return (
        <div className="rightsidebar">
            <div className="rs_top_bar">
                <a href="/"><img className="logo" src='../../img/logo3 (1).png' alt="f"/></a>
            </div>
            <div className="rs_bottom_bar">
                <div className="list_nav">
                    <a href="/home" className="list_nav_item active">
                        <div className="icon_list_nav_item">
                        <FontAwesomeIcon icon={faHouse} />
                        </div>
                        <span>Trang chủ</span>
                    </a>
                    <a href="/top100" className="list_nav_item">
                        <div className="icon_list_nav_item">
                        <FontAwesomeIcon icon={faRankingStar} />
                        </div>
                        <span>Bảng xếp hạng</span>
                    </a>
                    <a href='/category' className="list_nav_item">
                        <div className="icon_list_nav_item">
                        <FontAwesomeIcon icon={faIcons} />
                        </div>
                        <span>Chủ đề & thể loại</span>
                    </a>
                    <a href="/listcard" className="list_nav_item">
                        <div className="icon_list_nav_item">
                        <FontAwesomeIcon icon={faStar} />
                        </div>
                        <span>Top 100</span>
                    </a>

                </div>
            </div>
        </div>
    )
}
export default RightSidebar