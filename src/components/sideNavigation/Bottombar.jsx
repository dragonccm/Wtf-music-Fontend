import React, { useState, useRef, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Modal from "react-modal";
import "reactjs-popup/dist/index.css";
import "../../css/Bottombar.scss";
import "react-h5-audio-player/lib/styles.css";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import { ReactSVG } from "react-svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faEllipsis,
  faShuffle,
  faForwardStep,
  faBackwardStep,
  faHeadphonesSimple,
  faBan,
  faDownload,
  faCirclePlus,
  faLink,
  faChevronDown,
  faCompress,
  faExpand,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart,
  faCirclePlay,
  faCirclePause,
  faClock,
} from "@fortawesome/free-regular-svg-icons";
import icon_karaoke from "../../img/karaoke-sing-svgrepo-com.svg";
import icon_playlist from "../../img/playlist-thin-svgrepo-com.svg";
import icon_mic from "../../img/karaoke-svgrepo-com.svg";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

Modal.setAppElement("#root");
const Bottombar = () => {
  const [isFullScreen, SetIsFullScreen] = useState(false);
  const [animationActive, setAnimationActive] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [animationPlaylistActive, setAnimationPlaylistActive] =
    useState(true);
  const playerRef = useRef();


  let haha = [];
  const isPlaying = useSelector((state) => state.getSongData.isPlaying);
 
  const songInfo = useSelector((state) => state.getSongData.inforSong);

// xử lí lyrics
  if (
    isPlaying &&
    songInfo !== null &&
    songInfo !== undefined &&
    songInfo.infor.lyricsString
  ) {
    haha = songInfo.infor.lyricsString.map((sentence) => {
      const startTime = sentence.words[0].startTime;
      const endTime = sentence.words[sentence.words.length - 1].endTime;
      const data = sentence.words.map((word) => word.data).join(" ");
      return { startTime, endTime, data };
    });

  } else {
    console.log("BOTTOM BAR PLAYING NULLL");
  }


  // download nhạc 
  const handleDownload = async () => {
    const audioUrl = songInfo.infor.song;

    try {
      const response = await fetch(audioUrl);
      const blob = await response.blob();

      const reader = new FileReader();
      reader.onload = () => {
        const a = document.createElement("a");
        a.href = reader.result;
        a.download = "audio.mp3";
        a.click();
      };

      reader.readAsDataURL(blob);
    } catch (error) {
      console.error("Lỗi khi tải xuống:", error);
    }
  };

  // Thay icon trong player
  const icon_play = <FontAwesomeIcon icon={faCirclePlay} />;
  const icon_next = <FontAwesomeIcon icon={faForwardStep} />;
  const icon_previous = <FontAwesomeIcon icon={faBackwardStep} />;
  const icon_pause = <FontAwesomeIcon icon={faCirclePause} />;

  const [modalMenuIsOpen, setMenuIsOpen] = React.useState(false);
  const [modalFullIsOpen, setFullIsOpen] = React.useState(false);
  const [modalLyricIsOpen, setLyricIsOpen] = React.useState(false);
  const [modalPlaylistIsOpen, setPlaylistIsOpen] = React.useState(false);

  function openModal() {
    if (modalMenuIsOpen) {
      setMenuIsOpen(false);
    } else {
      setMenuIsOpen(true);
    }
  }
  function openModalFull() {
    if (modalFullIsOpen) {
      setAnimationActive(false);
      setTimeout(() => {
        setMenuIsOpen(false);
        setFullIsOpen(false);
      }, 700);
    } else {

      setFullIsOpen(true);
      setAnimationActive(true);
      setMenuIsOpen(true);
    }
  }
  function openModalLyric() {
    setLyricIsOpen(true);
  }
  function openModalPlaylist() {
    if (modalPlaylistIsOpen) {
      setAnimationPlaylistActive(false);
      setTimeout(() => {
        setPlaylistIsOpen(false);
      }, 700);
    } else {
      setPlaylistIsOpen(true);
      setAnimationPlaylistActive(true);
    }
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }


  function closeModalLyric() {
    setLyricIsOpen(false);
  }



  const elem = document.documentElement;
  const handleOpenFullScreen = () => {
    SetIsFullScreen(true);

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
    }
  };

  const handleCloseFullScreen = () => {
    SetIsFullScreen(false);

    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
    }
  };

  const arr_playlist = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "jj",
  ];
  const [isTimeUpdated, setTimeUpdated] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [loop, setLoop] = useState(false);
  const handleTimeUpdate = (e) => {
    if (!isTimeUpdated) {
      e.target.currentTime = localStorage.getItem('duration');
      e.target.volume = localStorage.getItem('volume');
      e.target.loop = localStorage.getItem('loop');
      setTimeUpdated(true);
    }
  };

  useEffect(() => {
    return () => {
      setTimeUpdated(false);
    };
  }, []);

  useEffect(() => {
    const savedVolume = localStorage.getItem('volume');
    setVolume(savedVolume);
  }, []);


  const handleVolumeChange = (e) => {
    setVolume(e.target.volume);
    localStorage.setItem('volume', volume);

  };


  let oldtime = null
  const handleListen = (e) => {
    // Lắng nghe sự kiện timeupdate của player
    e.target.addEventListener('timeupdate', updateTime);

  };


  // ----- sử dụng setInterval ------------------
  // const handleListen = (e) => {
  //   clearInterval(intervalId);
  //   intervalId = setInterval(function () {
  //     const currentTime = e.target.currentTime;
  //     localStorage.setItem('duration', currentTime)
  //     for (let i = 0; i < haha.length; i++) {
  //       const lyric = haha[i];

  //       if (
  //         currentTime >= parseFloat(lyric.startTime) / 1000 &&
  //         currentTime <= parseFloat(lyric.endTime) / 1000
  //       ) {

  //         const lyricUL = document.querySelectorAll(".scroll-content li");
  //         if (lyricUL[i]) {

  //           lyricUL[i].classList.add("active");
  //           lyricUL[i].scrollIntoView({ behavior: "smooth", block: "center" });


  //           if (i > 0) {
  //             lyricUL[i - 1].classList.add("over");
  //             lyricUL[i - 1].classList.remove("active");
  //           }
  //           if (i > 1) {
  //             lyricUL[i - 1].classList.add("over");
  //             lyricUL[i - 1].classList.remove("active");
  //             lyricUL[i - 2].classList.remove("active");
  //             lyricUL[i - 2].classList.add("over");
  //           }

  //           // console.log(haha)
  //           break; // Dừng vòng lặp khi điều kiện đúng được thoả mãn
  //         }
  //       } else {
  //         console.log(currentTime);
  //         console.log(parseFloat(lyric.startTime) / 1000)
  //         // console.log(currentTime >= parseFloat(lyric.startTime)/100000)
  //       }
  //     }
  //   }, 500);

  // };
  const handleStop = (e) => {
    e.target.addEventListener('timeupdate', updateTime);
  }


  // Hàm callback để cập nhật lời bài hát
  function updateTime(e) {
    const currentTime = e.target.currentTime;
    localStorage.setItem('duration', currentTime);
    // console.log(currentTime);
    // setLoop(playerRef.current.audio.current.loop)
    localStorage.setItem('loop', loop);

    // Xử lý hiển thị lời bài hát theo thời gian hiện tại
    const lyricUL = document.querySelectorAll(".scroll-content li");
    if (lyricUL.length > 0) {
      for (let i = 0; i < haha.length; i++) {
        const lyric = haha[i];

        if (currentTime >= parseFloat(lyric.startTime) / 1000 && currentTime <= parseFloat(lyric.endTime) / 1000) {
          // console.log(oldtime, currentTime);
          if (lyricUL[i]) {
            lyricUL[i].classList.add("active");
            lyricUL[i].scrollIntoView({ behavior: "smooth", block: "center" });
            if (currentTime > oldtime + 1) {
              // console.log('hahahah')
              for (let j = 0; j < i; j++) {
                lyricUL[j].classList.remove("active");
                lyricUL[j].classList.add("over");
              }
            }
            else if (currentTime < oldtime + 1) {
              // console.log('hahahah')
              for (let j = i + 1; j < haha.length; j++) {
                lyricUL[j].classList.remove("active");
                lyricUL[j].classList.remove("over");
              }
            }
            if (i > 0) {
              lyricUL[i - 1].classList.add("over");
              lyricUL[i - 1].classList.remove("active");
            }
            if (i > 1) {
              lyricUL[i - 1].classList.remove("active");
              lyricUL[i - 1].classList.add("over");
              lyricUL[i - 2].classList.remove("active");
              lyricUL[i - 2].classList.add("over");
            }
            oldtime = currentTime

            break; // Dừng vòng lặp khi điều kiện được thoả mãn
          } else {
            console.log('lỗi r')
          }
        }
      }
    }
    oldtime = currentTime
  }
  return (
    isPlaying && songInfo.isLoading === false && songInfo.isError === false &&  (
      <div className="main_bottom_bar">
        <div className="player_info">
          <div className="player_info_ctn">
            <div className="img">
              <img src={songInfo.infor.img} alt="f" />
            </div>
            <div className="name">
              <div className="name_ctn">
                <h5>
                  <NavLink
                    to={"/song" + songInfo.id}>
                    {songInfo.infor.songname}
                  </NavLink>
                </h5>
                <div className="artist">
                  {songInfo.infor.artistInfo.map(
                    (artist, index) => (
                      <span key={index}>
                        <a
                          href={
                            "/artists/" +
                            artist.alias
                          }
                        >
                          {artist.name}
                        </a>
                        {index !==
                          songInfo.infor.artistInfo
                            .length -
                          1 && ","}
                      </span>
                    )
                  )}
                </div>
              </div>
              <div className="more">
                <button className="rhap_main-controls-button rhap_button-clear">
                  <FontAwesomeIcon icon={faHeart} />
                </button>

                {!modalFullIsOpen && <button onClick={openModal} className="rhap_main-controls-button rhap_button-clear">
                  <FontAwesomeIcon icon={faEllipsis} />
                </button>}
                <Modal
                  isOpen={modalMenuIsOpen}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={openModal}
                  // style={customStyles}
                  className="Modal"
                  overlayClassName="Overlay"
                  shouldCloseOnOverlayClick={true}

                >
                  {/* <button onClick={closeModal}>close</button> */}
                  <div className="r_click">
                    <div className="r_click_head">
                      <div className="r_click_head_img"><img src={songInfo.infor.img} alt="f" /></div>
                      <div className="r_click_head_info">
                        <div className="name"><a href={"/artists/" + songInfo.infor.alias}>{songInfo.infor.songname}</a></div>
                        <div className="more">
                          <div className="more_item">
                            <FontAwesomeIcon icon={faHeart} />
                            {Math.ceil(songInfo.infor.like / 1000) > 1 ? Math.ceil(songInfo.infor.like / 1000) + 'k' : songInfo.infor.like}
                          </div>
                          <div className="more_item">
                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                            {Math.ceil(songInfo.infor.listen / 1000) > 1 ? Math.ceil(songInfo.infor.listen / 1000) + 'k' : songInfo.infor.listen}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="submenu-content">
                      <div className="item">
                        <h5>Nghệ sĩ</h5>
                        <div className="content">
                          {songInfo.infor.artistInfo.map((artist, index) => (
                            <span key={index}>
                              <a href={"/artists/" + artist.alias}>{artist.name}</a>
                              {index !== songInfo.infor.artistInfo.length - 1 && ","}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="item">
                        <h5>Album</h5>
                        <div className="content">

                          <a href="/album/">{songInfo.infor.album ? songInfo.infor.album.name : ''}</a>
                        </div>
                      </div>
                      <div className="item">
                        <h5>Sáng tác</h5>
                        <div className="content">
                          {<a href={"/artists/" + songInfo.infor.composers.length>0?songInfo.infor.composers[0].alias : 'nô'} >{songInfo.infor.composers.length>0?songInfo.infor.composers[0].name:''}</a>}
                        </div>
                      </div>
                      <div className="item">
                        <h5>Thể loại</h5>
                        <div className="content">
                          {<a href={"/artists/" + songInfo.infor.genres[0].alias} >{songInfo.infor.genres[0].name}</a>}
                        </div>
                      </div>
                      <div className="item">
                        <h5>Cung cấp bởi</h5>
                        <div className="content">
                          <a href="/">Ingrooves Music Group</a>
                        </div>
                      </div>

                    </div>
                    <div className="r_click_navigation">
                      <div className="item" onClick={() => handleDownload()}>
                        <FontAwesomeIcon icon={faDownload} />
                        <p>tải xuống</p>
                      </div>
                      <div className="item" onClick={openModalLyric} >
                        <ReactSVG
                          beforeInjection={(svg) => {
                            svg.classList.add("icon_list_nav_item_svg");
                          }}
                          src={icon_karaoke}
                        />
                        <p>lời bài hát</p>
                      </div>
                      <Modal
                        isOpen={modalLyricIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModalLyric}
                        // style={customStyles}
                        className="Modal_lyric"
                        overlayClassName="Overlay_lyric"
                        shouldCloseOnOverlayClick={true}

                      >
                        <div className="Modal_lyric_title">haha</div>
                        <div className="Modal_lyric_ctn">
                          <textarea name="" id="" rows='15' value={haha.map((sentence) => sentence.data).join("\n")} />
                        </div>
                        <div className="Modal_lyric_btn">
                          <button onClick={closeModalLyric}>Đóng</button>
                        </div>
                      </Modal>
                      <div className="item">
                        <FontAwesomeIcon icon={faBan} />
                        <p>chặn</p>
                      </div>
                    </div>
                    <div className="r_click_list">
                      <div className="r_click_list_item add-playlist">
                        <FontAwesomeIcon icon={faCirclePlus} />
                        Thêm vào playlist
                        <div className="playlist-content">
                          <div className="item">
                            <ReactSVG
                              beforeInjection={(svg) => {
                                svg.classList.add("icon_list_nav_item_svg");
                              }}
                              src={icon_playlist}
                            />
                            <span>Playlist 1</span>
                          </div>
                          <div className="item">
                            <ReactSVG
                              beforeInjection={(svg) => {
                                svg.classList.add("icon_list_nav_item_svg");
                              }}
                              src={icon_playlist}
                            />
                            <span>Playlist 1</span>
                          </div>
                          <div className="item">
                            <ReactSVG
                              beforeInjection={(svg) => {
                                svg.classList.add("icon_list_nav_item_svg");
                              }}
                              src={icon_playlist}
                            />
                            <span>Playlist 1</span>
                          </div>
                        </div>
                      </div>
                      <div className="r_click_list_item" onClick={openModalFull}>
                        <ReactSVG
                          beforeInjection={(svg) => {
                            svg.classList.add("icon_list_nav_item_svg");
                          }}
                          src={icon_mic}
                        />
                        Phát cùng lời bài hát
                      </div>
                      <Modal
                        isOpen={modalFullIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={openModalFull}
                        // style={customStyles}
                        className="Modal_playlist"
                        overlayClassName={animationActive ? "Overlay_full" : "Overlay_full active"}
                        shouldCloseOnOverlayClick={false}

                      >
                        {/* <button onClick={closeModal}>close</button> */}
                        <div className="playlist_player">
                          <div className="playlist_player_bg">
                            <img src="https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/8/0/e/b80e5777c7eec332c882bf79bd692056.jpg" alt="g" />

                          </div>
                          <div className="playlist_player_header">
                            {isFullScreen ? (
                              <button onClick={handleCloseFullScreen} className="header_btn">
                                <FontAwesomeIcon icon={faCompress} />
                              </button>
                            ) : (
                              <button onClick={handleOpenFullScreen} className="header_btn">
                                <FontAwesomeIcon icon={faExpand} />
                              </button>
                            )}
                            <button onClick={openModalFull} className="close_btn header_btn"><FontAwesomeIcon icon={faChevronDown} /></button>



                          </div>
                          <div className="playlist_player_body">
                            <div className="body">
                              <div className="avt">
                                <img src={songInfo.infor.img.replace('w240', 'w480')} alt="h" />
                              </div>
                              <div className="lyric">
                                <ul className="scroll-content">

                                  {haha.map((sentence,index) => {
                                    return <li className="item" key={'haha'+index}>{sentence.data}</li>;
                                  })}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Modal>

                      <CopyToClipboard text="Fuck you!">
                        <div className="r_click_list_item">
                          <FontAwesomeIcon
                            icon={faLink}
                          />
                          Sao chép link
                        </div>
                      </CopyToClipboard>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
        <div className="player_main">
          <AudioPlayer
            ref={playerRef}
            volume={volume}
            loop={loop}
            autoPlay = {isPlaying}
            onVolumeChange={handleVolumeChange}
            onListen={handleListen}
            onPause={handleStop}
            onCanPlay={handleTimeUpdate}
            showSkipControls="true"
            src={songInfo.infor.song}

            customProgressBarSection={[
              RHAP_UI.CURRENT_TIME,
              RHAP_UI.PROGRESS_BAR,
              RHAP_UI.CURRENT_LEFT_TIME,
              RHAP_UI.VOLUME,
            ]}
            layout="stacked-reverse"
            customVolumeControls={[
              <button className="rhap_button-clear">
                <FontAwesomeIcon icon={faShuffle} />
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
            <button
              className="rhap_button-clear rhap_main-controls-button btn_more"
              onClick={openModalFull}
            >
              <ReactSVG
                beforeInjection={(svg) => {
                  svg.classList.add("icon_list_nav_item_svg");
                }}
                src={icon_karaoke}
              />
            </button>
            {/* <button className="rhap_button-clear rhap_main-controls-button btn_more" onClick={handlePIP}>
            <FontAwesomeIcon icon={faWindowRestore} />
          </button> */}
          </div>
          <button
            className="rhap_button-clear rhap_main-controls-button btn_more playlist_btn"
            onClick={openModalPlaylist}
          >
            <ReactSVG
              beforeInjection={(svg) => {
                svg.classList.add("icon_list_nav_item_svg");
              }}
              src={icon_playlist}
            />
          </button>
          <Modal
            isOpen={modalPlaylistIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={openModalPlaylist}
            // style={customStyles}
            className="Modal_playlist"
            overlayClassName={
              animationPlaylistActive
                ? "Overlay_playlist"
                : "Overlay_playlist active"
            }
            shouldCloseOnOverlayClick={true}
          >
            <div className="Modal_playlist_header">
              <h3>Danh sách phát</h3>
              <div className="time">
                <FontAwesomeIcon icon={faClock} />
              </div>
            </div>
            <div className="Modal_playlist_ctn">
              <div className="playlist">
                {arr_playlist.map((item, index) => {
                  if (index === 4) {
                    return (
                      <div
                        className="item active"
                        key={"oik" + index}
                      >
                        <div className="img">
                          <img
                            src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/4/5/4/3/4543a3bc0d30b933ea9baf87df054241.jpg"
                            alt="avt"
                          />
                          <div className="img_overlay">
                            <div className="img_overlay_group_btn">
                              <div className="nav-link list_nav_item">
                                <FontAwesomeIcon
                                  icon={
                                    faPlay
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <div className="name">
                            <span>TETVOVEN</span>
                          </div>
                          <div className="artist">
                            <span>
                              Wxrdie, Andree Right
                              Hand
                            </span>
                          </div>
                        </div>
                        <div className="love">
                          <FontAwesomeIcon
                            icon={faHeart}
                          />
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div
                        className="item"
                        key={"oik" + index}
                      >
                        <div className="img">
                          <img
                            src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/4/5/4/3/4543a3bc0d30b933ea9baf87df054241.jpg"
                            alt="avt"
                          />
                          <div className="img_overlay">
                            <div className="img_overlay_group_btn">
                              <div className="nav-link list_nav_item">
                                <FontAwesomeIcon
                                  icon={
                                    faPlay
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <div className="name">
                            <span>TETVOVEN</span>
                          </div>
                          <div className="artist">
                            <span>
                              Wxrdie, Andree Right
                              Hand
                            </span>
                          </div>
                        </div>
                        <div className="love">
                          <FontAwesomeIcon
                            icon={faHeart}
                          />
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            {/* <div className="Modal_playlist_btn">
            <button onClick={openModalPlaylist}>Đóng</button>
          </div> */}
          </Modal>
        </div>
      </div>
    )
  );
};

export default Bottombar;