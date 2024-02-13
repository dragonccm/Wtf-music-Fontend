import React from "react";
import "../css/mainpage.css";
import Card from "./song_card";
const Mainpage_playlist = ({ playlists }) => {
  return (
    <div className="main_page">
      {playlists.map((element) => (
        <div className="element" key={element.title}>
          <div className="element_head">
            <h1>{element.title}</h1>
            <button className="show_all">Hiện tất cả</button>
          </div>

          <div className="card_container">
            {element.list.map((playlist) => (
              <Card playlist={playlist}/>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Mainpage_playlist;
