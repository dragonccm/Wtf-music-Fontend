import React from "react";
import "../css/mainpage.css";
import "../css/Bottombar.css";

const Mainpage_playlist = ({ playlists }) => {
  const element = Array.from({ length: 5 }, (_, index) => ({
    title: 'title',
    list: playlists,
  }));

  return (
    <div className="main_page">
      {element.map((element) => (
        <div className="element" key={element.title}>
          <div className="element_head">
            <h1>{element.title}</h1>
            <button className="show_all">Hiện tất cả</button>
          </div>

          <div className="card_container">
            {element.list.map((playlist) => (
              <div className="card" key={playlist.id}>
                <div className="img_container">
                  <img src={playlist.image} alt="" className="img" />
                </div>
                <h4 className="playlist_name">{playlist.name}</h4>
                <p className="artists">{playlist.artists_list}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mainpage_playlist;
