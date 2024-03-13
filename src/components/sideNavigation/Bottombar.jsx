import React, { useEffect, useState, useContext } from "react";
import { getSongData } from "../../services/SongService";
import SongDataContext from "../../lib/Context/SongContext";
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
  const [currentSong, SetSong] = useState([])
  const { songData } = useContext(SongDataContext)

  useEffect(() => {
    async function fetchData() {
      const response = await getSongData("Z7I9OC70");
      const viprotrack = {
        artistsNames: response.artistsNames,
        songname: response.songname,
        img: response.img,
        song: response.song,
        lyricsString: response.lyricsString,
      }
      // console.table("BOTTOM BAR FIRST FETCH", viprotrack)
      SetSong(viprotrack)
    }
    fetchData()
  }, [])

  useEffect(() => {
    async function fetchData() {
      const response = await getSongData(songData ? songData : "");
      const viprotrack = {
        artistsNames: response.artistsNames,
        songname: response.songname,
        img: response.img,
        song: response.song,
        lyricsString: response.lyricsString,
      }
      // console.table("BOTTOM BAR ", viprotrack)
      SetSong(viprotrack)
    }
    fetchData()
    console.table(currentSong, songData)
  }, [songData])


  const icon_play = <FontAwesomeIcon icon={faCirclePlay} />;
  const icon_next = <FontAwesomeIcon icon={faForwardStep} />;
  const icon_previous = <FontAwesomeIcon icon={faBackwardStep} />
  const icon_pause = <FontAwesomeIcon icon={faCirclePause} />
  return (
    <div className="main_bottom_bar">
      <div className="player_info">
        <div className="player_info_ctn">
          <div className="img">
            <img src={currentSong.img} alt="f" />

          </div>
          <div className="name">
            <div className="name_ctn">
              <h5>{currentSong.songname}</h5>
              <div className="artist">
                {currentSong.artistsNames}
                <a href="/"></a>
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
          src={currentSong.song}
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