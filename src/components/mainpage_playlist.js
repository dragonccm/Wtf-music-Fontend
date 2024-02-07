import React from "react"
import "../css/mainpage.css"

import "../css/Bottombar.css"
const Mainpage_playlist = (props) => {
    const playlists = Array.from({ length: 5 }, (_, index) => ({
        id: index,
        name: `Playlist ${index + 1}`,
        image: "../../img/_e1a54268-fb6e-4c76-98a4-8a32aef31266.jpg",
        artists_list: ["Jisso, Jisso, Jisso, Jisso, Jisso"],
    }));
    const element = Array.from({ length: 5 }, (_, index) => ({
        title: 'title',
        list: playlists,
    }));
    return (
        <div className="main_page">
            {element.map((element) => (

                <div className="element">
                    <div className="element_head">
                        <h1>{element.title}</h1>
                        <button className="show_all">
                            Hiện tất cả
                        </button>
                    </div>

                    <div className="card_container">

                        {element.list.map((playlist) => (
                            <div className="card">
                                <div className="img_container">
                                    <img src={playlist.image} alt="" className="img" />
                                </div>
                                <h4 className="playlist_name">
                                    {playlist.name}
                                </h4>
                                <p className="artists">
                                    {
                                        playlist.artists_list
                                    }
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            ))}

            <div className="element">
                <div className="element_head">
                    <h1>title</h1>
                    <button className="show_all">
                        Hiện tất cả
                    </button>
                </div>

                <div className="card_container">

                    {playlists.map((playlist) => (
                        <div className="card">
                            <div className="img_container">
                                <img src="../../img/_e1a54268-fb6e-4c76-98a4-8a32aef31266.jpg" alt="" className="img" />
                            </div>
                            <h4 className="playlist_name">
                                solo
                            </h4>
                            <p className="artists">
                                MIYEON, BLACKPINK, LE SSERAFIM và nhiều hơn nữa
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
export default Mainpage_playlist