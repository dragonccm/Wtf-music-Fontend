import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import "../css/RightSidebar.css"
const RightSidebar = () => {
    const playlists = Array.from({ length: 20 }, (_, index) => ({
        id: index,
        name: `Playlist ${index + 1}`,
        image: "../../img/_e1a54268-fb6e-4c76-98a4-8a32aef31266.jpg",
        category: "playlist",
      }));
    return (
        <div className="rightsidebar">
            <div className="rs_top_bar">
                <a href="/"><FontAwesomeIcon icon={faHouse} />  Home</a>
                <a href="/"><FontAwesomeIcon icon={faMagnifyingGlass} />  Search</a>
            </div>
            <div className="rs_bottom_bar">
                <div className="bottom_ctrl">
                    <div className="bottom_ctrl_top">
                        <button className="btn library"><FontAwesomeIcon icon={faBarsStaggered} /> Your Library</button>
                        <div>
                            <button className="btn plush"><FontAwesomeIcon icon={faPlus} /></button>
                            <button className="btn show_more"><FontAwesomeIcon icon={faArrowRight} /></button>
                        </div>
                    </div>
                    <div className="bottom_ctrl_bot">
                        <button className="btn_l PlayLists">PlayLists</button>
                        <button className="btn_l Artists">Artists</button>
                        <button className="btn_l Albums">Albums</button>
                    </div>
                </div>
                <div className="bottom_list">
                    {playlists.map((playlist) => (
                        <button className="playlist" key={playlist.id}>
                            <div className="img">
                                <img src={playlist.image} alt="" />
                            </div>
                            <div className="info">
                                <h3 className="name">{playlist.name}</h3>
                                <div className="category">{playlist.category}</div>
                            </div>
                        </button>
                    ))}
                    <button className="song">
                        <div className="img">
                            <img src="../../img/_e1a54268-fb6e-4c76-98a4-8a32aef31266.jpg" alt="" />
                        </div>
                        <div className="info">
                            <h3 className="name">FLOWERS</h3>
                            <div className="category">playlist</div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default RightSidebar