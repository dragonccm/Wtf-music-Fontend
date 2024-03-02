import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';
import "../../css/Bottombar.scss";
import { createRoot } from 'react-dom/client';

const Bottombar = (props) => {
  return (
    <div className="main_bottom_bar">
      <div className="bottom_bar">
        <div className="left">
          <div className="info_img">
            <img src="https://lh3.googleusercontent.com/03WLPin15fkpkLMayBhp4E1YyOJRtcwOL8r2albpcYfmva2vqNbr4RM8q8zk5pGhu9PHdWHk60d2haTOPdgghaUxpDFO4ROPSg=w1600-rj" alt="f" className="song_avt" />
          </div>
          <div className="info">
            <h3>Flower</h3>
            <p>JISOO</p>
          </div>
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="center">
          <div id="music-player"></div>
        </div>
        <div className="right">
          <p>một cái gì đó tao sẽ làm </p>
        </div>
      </div>
    </div>
  );
};

createRoot(document.getElementById('root')).render(
  <ReactJkMusicPlayer
  musicSrc={'https://a128-zmp3.zmdcdn.me/12fb41f934c32cb856933163a2bad73b?authen=exp=1709544563~acl=/12fb41f934c32cb856933163a2bad73b/*~hmac=6c44dee6746a3411964ab49ec3e055da'}
  />
);

export default Bottombar;