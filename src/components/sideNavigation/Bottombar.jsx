import React, { useEffect, useState } from "react";
import "../../css/Bottombar.scss";
import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import { ReactSVG } from "react-svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faShuffle, faForwardStep, faBackwardStep } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faCirclePlay, faCirclePause, faWindowRestore } from "@fortawesome/free-regular-svg-icons";
import icon_karaoke from "../../img/karaoke-sing-svgrepo-com.svg";
import icon_playlist from "../../img/playlist-thin-svgrepo-com.svg"

const Bottombar = () => {
  const icon_play = <FontAwesomeIcon icon={faCirclePlay} />;
  const icon_next = <FontAwesomeIcon icon={faForwardStep} />;
  const icon_previous = <FontAwesomeIcon icon={faBackwardStep} />
  const icon_pause = <FontAwesomeIcon icon={faCirclePause} />
  return (
    <div className="main_bottom_bar">
      <div className="player_info">
        <div className="player_info_ctn">
          <div className="img">
            <img src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/4/5/4/3/4543a3bc0d30b933ea9baf87df054241.jpg" alt="" />

          </div>
          <div className="name">
            <div className="name_ctn">
              <h5>TETTOVENT</h5>
              <div className="artist">
                Wxrdie, Andree Right Hand, Machiot
                <a href=""></a>
              </div>
            </div>
            <div className="more">
              <button className="rhap_main-controls-button rhap_button-clear">
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <button className="rhap_main-controls-button rhap_button-clear">
              <FontAwesomeIcon icon={faEllipsis} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="player_main">
        <AudioPlayer
          showSkipControls='true'
          autoPlay
          src="https://a128-z3.zmdcdn.me/12fb41f934c32cb856933163a2bad73b?authen=exp=1710404434~acl=/12fb41f934c32cb856933163a2bad73b/*~hmac=c599ade140021055087e3cc8bdd87e64"
          onPlay={e => console.log("onPlay")}
          customProgressBarSection={
            [
              RHAP_UI.CURRENT_TIME,
              RHAP_UI.PROGRESS_BAR,
              RHAP_UI.CURRENT_LEFT_TIME,
              RHAP_UI.VOLUME,
            ]
          }
          layout="stacked-reverse"
          customVolumeControls={[
            <button className="rhap_button-clear"><FontAwesomeIcon icon={faShuffle} />
            </button>,
          ]}
          customIcons={{
            play: icon_play,
            next: icon_next,
            previous: icon_previous,
            pause: icon_pause,
          }}
        // other props here
        />
      </div>
      <div className="player_more">
        <div className="player_more_1">
        <button className="rhap_button-clear rhap_main-controls-button btn_more">
          <ReactSVG
            beforeInjection={(svg) => {
              svg.classList.add("icon_list_nav_item_svg");
            }}
            src={icon_karaoke}
          />
        </button>
        <button className="rhap_button-clear rhap_main-controls-button btn_more">
          <FontAwesomeIcon icon={faWindowRestore} />
        </button>
        </div>
        <button className="rhap_button-clear rhap_main-controls-button btn_more">
          <ReactSVG
            beforeInjection={(svg) => {
              svg.classList.add("icon_list_nav_item_svg");
            }}
            src={icon_playlist}
          />
        </button>
      </div>
    </div>
  );
};


export default Bottombar;