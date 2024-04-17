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
import Play_animation from "../../components/card/play_animation"

Modal.setAppElement("#root");
const Bottombar = () => {
  const [isFullScreen, SetIsFullScreen] = useState(false);
  const [animationActive, setAnimationActive] = useState(true);
  const [playing, setPlaying] = useState(false);

  const [timer, setTimer] = useState(0)
  const [outTime, setOutTime] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const countRef = useRef(null)
  const [animationPlaylistActive, setAnimationPlaylistActive] = useState(true);
  const playerRef = useRef();
  const handleStart = () => {
    setIsActive(true)
    setIsPaused(true)
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }
  useEffect(() => {
    console.log(timer);
    console.log(outTime);
    if (timer === Number(outTime)) {
      handlePause()
      setPlaying(false)
      if (playerRef.current && playerRef.current.audio.current) {
        playerRef.current.audio.current.pause();
      }

    }
  }, [timer, outTime]);
  const handlePause = () => {
    clearInterval(countRef.current)
    setIsPaused(false)
  }
  const handleResume = () => {
    setIsPaused(true)
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
      console.log(timer + 1)
    }, 1000)
  }
  const handleReset = () => {
    clearInterval(countRef.current)
    setIsActive(false)
    setIsPaused(false)
    setTimer(0)
  }
  const getSeconds = `0${(timer % 60)}`.slice(-2)

  const minutes = `${Math.floor(timer / 60)}`
  const getMinutes = `0${minutes % 60}`.slice(-2)

  const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
  const formatTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }
  const handleStopTimeChange = (event) => {
    setOutTime(event.target.value);
    console.log(outTime);
    // clearTimeout(countdownTimeout); // Dừng hẹn giờ hiện tại
    // setStopTime(newStopTime);
  };



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
  const [modalTimeIsOpen, setTimeIsOpen] = React.useState(false);
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
        setFullIsOpen(false);
        setMenuIsOpen(false);

      }, 700);
    } else {

      setFullIsOpen(true);
      setAnimationActive(true);
    }
  }
  function openModalLyric() {
    setLyricIsOpen(true);
  }
  function openModalTime() {
    console.log('kakakakakak')
    setTimeIsOpen(true);
  }
  function closeModalTime() {
    console.log('kakakakakak')
    setTimeIsOpen(false);
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


  //full màn hình
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

  // danh sách playlist 
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
      // e.target.loop = localStorage.getItem('loop');
      setTimeUpdated(true);
    }
  };

  useEffect(() => {
    return () => {
      setTimeUpdated(false);
    };
  }, []);

  useEffect(() => {
    const savedVolume = localStorage.getItem('volume') ? localStorage.getItem('volume') : '50';
    setVolume(savedVolume);
    setLoop(localStorage.getItem('loop') ? JSON.parse(localStorage.getItem('loop')) : false)
  }, []);


  const handleVolumeChange = (e) => {
    setVolume(e.target.volume);
    localStorage.setItem('volume', volume);

  };

  //   karaoke
  let oldtime = null
  const handleListen = (e) => {
    // Lắng nghe sự kiện timeupdate của player
    e.target.addEventListener('timeupdate', updateTime);


  };
  const handleStop = (e) => {
    e.target.addEventListener('timeupdate', updateTime);
  }


  // Hàm callback để cập nhật lời bài hát
  function updateTime(e) {
    const currentTime = e.target.currentTime;
    localStorage.setItem('duration', currentTime);
    // console.log(currentTime);
    setLoop(e.target.loop)
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
    isPlaying && songInfo.isLoading === false && songInfo.isError === false && (
      <div className="main_bottom_bar" style={modalFullIsOpen ? { 'background': 'transparent', 'justify-content': 'center' } : { 'background': 'var(--bg-player)', 'justify-content': 'unset' }}>
        {!modalFullIsOpen && <div className="player_info"  >
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

                <button onClick={openModal} className="rhap_main-controls-button rhap_button-clear">
                  <FontAwesomeIcon icon={faEllipsis} />
                </button>
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
                          {<a href={"/artists/" + songInfo.infor.composers.length > 0 ? songInfo.infor.composers[0].alias : 'nô'} >{songInfo.infor.composers.length > 0 ? songInfo.infor.composers[0].name : ''}</a>}
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
        </div>}

        <div className="player_main">
          <AudioPlayer
            ref={playerRef}
            volume={volume}
            loop={loop}
            // autoPlay={isPlaying}
            autoPlay={playing}
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
        {!modalFullIsOpen && <div className="player_more">
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
              <div className="time" onClick={() => openModalTime()}>
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
                          <div className="img_overlay active">
                            <div className="img_overlay_group_btn">
                              <div className="nav-link list_nav_item ">
                                {/* <FontAwesomeIcon
                                  icon={
                                    faPlay
                                  }
                                /> */}
                                <Play_animation />
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
        </div>}
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

                    {haha.map((sentence, index) => {
                      return <li className="item" key={'haha' + index}>{sentence.data}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Modal>

        <Modal
          isOpen={modalTimeIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={openModalFull}
          // style={customStyles}
          className="Modal_time"
          overlayClassName="Overlay_time"
          shouldCloseOnOverlayClick={false}

        >
          <div className="timeout">
            haha
            <button onClick={closeModalTime}>close</button>
            <div className='stopwatch-card'>
              <input
                type="number"
                min="1"
                max="60"
                step="1"
                value={outTime}
                onChange={handleStopTimeChange}
              />
              <div class="time-picker">
                <div class="time-input">
                  <div class="control"><input class="input is-primary" type="text" value="02" />
                  <div class="time-options">
                    <div class="option">00 giờ</div>
                    <div class="option">01 giờ</div>
                    <div class="option active">02 giờ</div>
                    <div class="option">03 giờ</div><div class="option">04 giờ</div>
                    <div class="option">05 giờ</div><div class="option">06 giờ</div>
                    <div class="option">07 giờ</div><div class="option">08 giờ</div>
                    <div class="option">09 giờ</div><div class="option">10 giờ</div>
                    <div class="option">11 giờ</div><div class="option">12 giờ</div>
                  </div>
                  </div>
                  <span class="label">giờ</span>
                </div>
                <div class="dot">:</div>
                <div class="time-input">
                  <div class="control"><input class="input is-primary" type="text" value="00" />
                  </div><span class="label">phút</span>
                  <div class="time-options"><div class="option active">00 phút</div>
                    <div class="option">05 phút</div>
                    <div class="option">10 phút</div><div class="option">15 phút</div>
                    <div class="option">20 phút</div><div class="option">25 phút</div>
                    <div class="option">30 phút</div><div class="option">35 phút</div>
                    <div class="option">40 phút</div><div class="option">45 phút</div>
                    <div class="option">50 phút</div><div class="option">55 phút</div>
                  </div>
                </div>
              </div>
              <div className='buttons'>
                {
                  !isActive && !isPaused ?
                    <button onClick={handleStart}>Start</button>
                    : (
                      isPaused ? <button onClick={handlePause}>Pause</button> :
                        <button onClick={handleResume}>Resume</button>
                    )
                }
                <button onClick={handleReset} disabled={!isActive}>Reset</button>
                <button onClick={handleStart} >OK</button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    )
  );
};

export default Bottombar;