import React, { useState, useRef, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Modal from "react-modal";
import { toast, ToastContainer } from "react-toastify";

import "../../css/Bottombar.scss";
import "react-h5-audio-player/lib/styles.css";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import { ReactSVG } from "react-svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { increment, decrement, update, reset } from '../../redux/slide/songPlayingSlice'
import { fetchSongPlaying, toPlay } from "../../redux/slide/songPlayingSlice";
import { ChangeBlockList } from "../../redux/slide/AuthenticationSlice";
import { fetchPlayList, banSongs, randomSongs, updatePlaylist } from '../../redux/slide/playlistSlice'
import { banSong } from "../../controller/user";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import SongCard from "../card/song_card";
import Like_heart from "../card/like";
import CreatePlaylist from "../card/createPlaylist";
import { NavLink } from "react-router-dom";
import {
  faEllipsis,
  faShuffle,
  faForwardStep,
  faBackwardStep,
  faHeadphonesSimple,
  faBan,
  faDownload,
  faLink,
  faChevronDown,
  faCompress,
  faExpand,
  faEllipsisVertical,
  faTrash,
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
import { useSelector, useDispatch } from "react-redux";
// import Play_animation from "../../components/card/play_animation"

// Modal.setAppElement("#root");
const Bottombar = () => {

  const [isFullScreen, SetIsFullScreen] = useState(false);
  const [animationActive, setAnimationActive] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [isRandom, setIsRandom] = useState(localStorage.getItem('isRandom') ? JSON.parse(localStorage.getItem('isRandom')) : false);

  const [timer, setTimer] = useState(0)
  const [outTime, setOutTime] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const countRef = useRef(null)
  const [animationPlaylistActive, setAnimationPlaylistActive] = useState(true);
  const playerRef = useRef();
  const dispatch = useDispatch();

  // const [newAuthenURL, setNewAuthenURL] = useState('authen=exp=1734102013~acl=/b54af8b0ae046b465acf2394ec845f3b*~hmac=77acaddc3484ad6920b4c71373515d06')


  const hoursOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const minutesOptions = Array.from({ length: 60 }, (_, i) => i + 1);
  const secondsOptions = Array.from({ length: 60 }, (_, i) => i + 1);
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [second, setSecond] = useState(0)
  const [isActivehours, setIsActiveHours] = useState(false)
  const [isActiveminutes, setIsActiveMinutes] = useState(false)
  const [isActivesecond, setIsActiveSecond] = useState(false)
  const handleStart = (a) => {
    setIsActive(true)
    setIsPaused(true)
    let currTime
    if (a === 'new') {
      currTime = Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(second)
      setOutTime(currTime)
    }
    if (currTime !== 0) {
      countRef.current = setInterval(() => {
        setTimer((timer) => timer + 1)
      }, 1000)
    }
  }
  useEffect(() => {
    if (Number(outTime) - Number(timer) > 0) {

      localStorage.setItem('timeout', Number(outTime) - Number(timer))
    }

    if (Number(timer) === Number(outTime)) {
      handlePause()
      setPlaying(false)
      handleReset()
      if (playerRef.current && playerRef.current.audio.current) {
        playerRef.current.audio.current.pause();
        setOutTime(0)
        localStorage.removeItem('timeout');
      }

    }
  }, [timer, outTime]);

  // useEffect(() => {
  //   if (Number(localStorage.getItem('timeout')) > 0) {
  //     console.log('Timeout : ' + Number(localStorage.getItem('timeout')))
  //     const timeout = Number(localStorage.getItem('timeout'))
  //     setOutTime(timeout)
  //     console.log(outTime)
  //     handleStart()
  //   }
  // }, [])
  const handlePause = () => {
    clearInterval(countRef.current)
    setIsPaused(false)
  }
  const handleResume = () => {
    setIsPaused(true)
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }
  const handleReset = () => {
    clearInterval(countRef.current)
    setIsActive(false)
    setIsPaused(false)
    setTimer(0)
    setOutTime(0)
    setHours(0)
    setMinutes(0)
    setSecond(0)
  }



  const handleStopTimeChange = (event) => {
    setOutTime(event.target.value);
    // clearTimeout(countdownTimeout); // Dừng hẹn giờ hiện tại
    // setStopTime(newStopTime);
  };


  const formatTime = () => {
    const getSeconds = `0${((Number(outTime) - Number(timer)) % 60)}`.slice(-2)
    const minutes = `${Math.floor((Number(outTime) - Number(timer)) / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor((Number(outTime) - Number(timer)) / 3600)}`.slice(-2)

    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }

  const handleSetHours = (e) => {
    if (parseInt(e.target.value) > 12) {
      setHours(12)
    } else {

      setHours(e.target.value)
    }
  }
  const handleSetMinutes = (e) => {
    if (parseInt(e.target.value) > 60) {
      setMinutes(60)
    } else {
      setMinutes(e.target.value)
    }
  }
  const handleSetSeconds = (e) => {
    if (parseInt(e.target.value) > 60) {
      setSecond(60)
    } else {
      setSecond(e.target.value)
    }
  }
  const handleHideTime = () => {

    if (isActivehours === true) {
      setIsActiveHours(false);
    }

    if (isActiveminutes === true) {
      setIsActiveMinutes(false);
    }
    if (isActivesecond === true) {
      setIsActiveSecond(false);
    }
  }

  //playlist
  useEffect(() => {
    if (Number(localStorage.getItem('timeout')) > 0) {
      // console.log('Timeout : ' + Number(localStorage.getItem('timeout')))
      const timeout = Number(localStorage.getItem('timeout'))
      setOutTime(timeout)
      // console.log(outTime)
      handleStart()
    }
    const fetchData = async () => {
      if (localStorage.getItem('playlistID') && isRandom !== true) {
        console.log('jajaja', localStorage.getItem('playlistID'))
        await dispatch(fetchPlayList({ id: localStorage.getItem('playlistID') }));
      }

      if (localStorage.getItem('playlistRandom') && isRandom === true) {
        console.log('kakakakakakakak');
        await dispatch(updatePlaylist());
      }
      if (localStorage.getItem('playlistRelate') && localStorage.getItem("idSongPlaying") && isRandom !== true) {
        await dispatch(fetchPlayList({ id: localStorage.getItem("idSongPlaying"), type: 'true' }));
      }
      if (localStorage.getItem('currentMusicIndex')) {
        await dispatch(update(+localStorage.getItem('currentMusicIndex')));
      }
    };

    fetchData();

  }, [])
  const dataf = useSelector((state) => state.playlist.playlist);
  const blockSong = useSelector((state) => state.Authentication.blockSong);
  // console.log(dataf)
  const handleClickNext = () => {
    if (Number(currentMusicIndex) < dataf.song.length - 1) {
      dispatch(increment())
      // console.log(currentMusicIndex);
      if (dataf && isPlaying) {
        let currentIndex = currentMusicIndex + 1;

        // Duyệt qua danh sách bài hát
        while (currentIndex < dataf.song.length) {
          // Kiểm tra ID bài hát hiện tại
          if (!blockSong.includes(dataf.song[currentIndex].id)) {
            dispatch(fetchSongPlaying(dataf.song[currentIndex].id))
            localStorage.setItem('currentMusicIndex', currentIndex-1)
            break;
          } else {
            // Nếu ID bài hát không nằm trong mảng, chuyển sang bài hát tiếp theo
            currentIndex++;
          }
        }
      
      }
      // dispatch(fetchSongPlaying(dataf.song.items[currentMusicIndex].encodeId))
    }
  }
  const handleClickPrevious = () => {
    if (currentMusicIndex > 0) {
      dispatch(decrement())
      // console.log(currentMusicIndex);
      if (dataf && isPlaying) {
        let currentIndex = currentMusicIndex - 1;

        // Duyệt qua danh sách bài hát
        while (currentIndex < dataf.song.length) {
          // Kiểm tra ID bài hát hiện tại
          if (!blockSong.includes(dataf.song[currentIndex].id)) {
            dispatch(fetchSongPlaying(dataf.song[currentIndex].id))
            localStorage.setItem('currentMusicIndex', currentIndex-1)
            break;
          } else {
            // Nếu ID bài hát không nằm trong mảng, chuyển sang bài hát tiếp theo
            currentIndex--;
          }
        }
      }
      // dispatch(fetchSongPlaying(dataf.song.items[currentMusicIndex].encodeId))
    } else {
      // console.log(currentMusicIndex);
      alert('Không có')
    }

  }
  const handleClickNow = (index) => {
    // console.log(index)
    dispatch(update(index))
  }
  const handleEnd = () => {
    // console.log('end')
    handleClickNext()
  }
  const handleRandom = () => {
    if (!isRandom) {
      setIsRandom(true)
      localStorage.setItem('isRandom', true)
      dispatch(randomSongs())

    } else {
      setIsRandom(false)
      localStorage.setItem('isRandom', false)
      if (localStorage.getItem('playlistRelate')) {
        dispatch(fetchPlayList({ id: localStorage.getItem("idSongPlaying"), type: 'true' }));
      } else {
        dispatch(fetchPlayList({ id: localStorage.getItem('playlistID') }));
      }
    }


  }
  const handleRemovePlaylist = () => {
    localStorage.removeItem('idSongPlaying');
    localStorage.removeItem('currentMusicIndex');
    localStorage.removeItem('playlistID');
    localStorage.removeItem('duration');
    localStorage.removeItem('playlistRandom');
    localStorage.removeItem('isRandom');
    setIsRandom(false)

    dispatch(reset())
  }
  // useEffect(() => {
  //   // Cập nhật giá trị mới cho dataf khi state.playlist.playlist.data thay đổi
  //   if (dataf !== undefined && dataf.song) {
  //     // const lol = dataf.song.map((item, index) => {
  //     //   return item.id
  //     // })
  //     // console.log(lol)
  //     for (let i = 0; i < dataf.song.length; i++) {
  //       if (dataf.song[i].id === songInfo.infor.id) {
  //         dispatch(update(i))
  //         break;
  //       }
  //     }
  //   }
  // }, [dataf]);

  let haha = [];
  const isPlaying = useSelector((state) => state.getSongData.isPlaying);
  const playStatus = useSelector((state) => state.getSongData.playStatus);

  const songInfo = useSelector((state) => state.getSongData.inforSong);
  const currentMusicIndex = useSelector((state) => state.getSongData.currentMusicIndex);
  useEffect(() => {
    if (playerRef.current && playerRef.current.audio.current && playStatus === true) {
      playerRef.current.audio.current.play();
    }
  }, [playStatus])
  // const [currentMusicIndex,setCurrentMusicIndex] = useState(0)
  // useEffect(() => {
  //   if (dataf && isPlaying) {
  //     dispatch(fetchSongPlaying(dataf.song.items[currentMusicIndex].encodeId))
  //     localStorage.setItem('currentMusicIndex', currentMusicIndex)
  //   }

  // }, [currentMusicIndex]);
  // xử lí lyrics
  useEffect(() => {
    if (songInfo.songInfo && songInfo.infor.lyricsString.length > 0) {
      haha = songInfo.infor.lyricsString.map((sentence) => {
        const startTime = sentence.words[0].startTime;
        const endTime = sentence.words[sentence.words.length - 1].endTime;
        const data = sentence.words.map((word) => word.data).join(" ");
        return { startTime, endTime, data };
      });
    }
    if (dataf !== undefined && dataf.song) {

      for (let i = 0; i < dataf.song.length; i++) {
        // console.log(dataf.song.items[i].encodeId,songInfo.infor.id)
        if (songInfo && songInfo.infor && dataf.song[i] && dataf.song[i].id === songInfo.infor.id) {
          dispatch(update(i))
          break;
        } else {
          dispatch(update(0))
        }
      }
    }

  }, [songInfo, dataf]);
  if (
    isPlaying &&
    songInfo !== null &&
    songInfo !== undefined &&
    songInfo.infor &&
    songInfo.infor.lyricsString && songInfo.infor.lyricsString[0] && songInfo.infor.lyricsString[0].words[0]
  ) {
    haha = songInfo.infor.lyricsString.length > 0 ? songInfo.infor.lyricsString.map((sentence) => {
      const startTime = sentence.words[0].startTime;
      const endTime = sentence.words[sentence.words.length - 1].endTime;
      const data = sentence.words.map((word) => word.data).join(" ");
      return { startTime, endTime, data };
    }) : '';

  } else {
    // console.log("BOTTOM BAR PLAYING NULLL");
  }


  // download nhạc 
  const handleDownload = async () => {
    // const audioUrl = songInfo.infor.song.includes('?') ? songInfo.infor.song.substring(0, songInfo.infor.song.indexOf('?') + 1) + newAuthenURL : songInfo.infor.song;
    const audioUrl = songInfo.infor.song;

    try {
      const response = await fetch(audioUrl);
      const blob = await response.blob();

      const reader = new FileReader();
      reader.onload = () => {
        const a = document.createElement("a");
        a.href = reader.result;
        a.download = songInfo.infor.alias + ".mp3";
        a.click();
      };

      reader.readAsDataURL(blob);
    } catch (error) {
      console.error("Lỗi khi tải xuống:", error);
    }
  };


  //cấm nhạc
  const handleBanSong = async () => {
    let response = await banSong(songInfo.infor.id);
    if (response && response.EC === "0") {
      toast.success(response.EM)
      handleClickNext()
      // dispatch(banSongs(songInfo.infor.id))
      dispatch(ChangeBlockList(response.DT))
    } else if (response && response.EC !== '0') {
      toast.error(response.EM);
    }
  }

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
    if (!modalFullIsOpen && songInfo.infor.lyricsString.length > 0) {
      setFullIsOpen(true);
      setAnimationActive(true);
      
    } else {
      setAnimationActive(false);
      setTimeout(() => {
        setFullIsOpen(false);
        setMenuIsOpen(false);
      }, 700);
    }
  }
  function openModalLyric() {
    setLyricIsOpen(true);
  }
  function openModalTime() {
    // console.log('kakakakakak')
    setTimeIsOpen(true);
  }
  function closeModalTime() {
    // console.log('kakakakakak')
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

  const [isTimeUpdated, setTimeUpdated] = useState(false);
  const [volume, setVolume] = useState(localStorage.getItem('volume') ? JSON.parse(localStorage.getItem('volume')) : 0.5);
  const [loop, setLoop] = useState(false);



  const handleTimeUpdate = (e) => {
    if (!isTimeUpdated) {
      e.target.currentTime = localStorage.getItem('duration') || 0;
      e.target.volume = localStorage.getItem('volume') || 0.9;
      e.target.loop = (JSON.parse(localStorage.getItem('loop')));
      setTimeUpdated(true);
    }
  };

  // useEffect(() => {
  //   return () => {
  //     setTimeUpdated(false);
  //   };
  // }, []);


  // console.log('=============================================================')

  const handleVolumeChange = (e) => {
    setVolume(e.target.volume);

  };
  // useEffect(() => {
  //   localStorage.setItem('volume', volume);
  // }, [volume]);


  //   karaoke
  let oldtime = null
  let oldUpdateTimeFunc;
  const handleListen = (e) => {
    // Lưu tham chiếu đến hàm updateTime hiện tại

    updateTime(e)
  };

  const handleStop = (e) => {
    // Xóa event listener cho sự kiện timeupdate
    e.target.removeEventListener('timeupdate', oldUpdateTimeFunc);
    setPlaying(false)

    dispatch(toPlay())
  };
  const handlePlay = (e) => {
    // Xóa event listener cho sự kiện timeupdate
    console.log('playyyyyyyyyyyyyyy');
    setPlaying(true)
    if (playStatus === false) {
      dispatch(toPlay())
    }
  };



  function updateTime(e) {

    const currentTime = e.target.currentTime;
    localStorage.setItem('duration', currentTime);
    setLoop(e.target.loop)
    localStorage.setItem('loop', loop);

    // Xử lý hiển thị lời bài hát theo thời gian hiện tại
    const lyricUL = document.querySelectorAll(".scroll-content li");
    if (lyricUL.length > 0) {
      for (let i = 0; i < haha.length; i++) {
        const lyric = haha[i];

        if (currentTime >= parseFloat(lyric.startTime) / 1000 && currentTime <= parseFloat(lyric.endTime) / 1000) {
          // console.log(oldtime, currentTime);
          // console.log(parseFloat(lyric.startTime) / 1000, parseFloat(lyric.endTime) / 1000);
          // console.log(lyric.data);

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
                if (lyricUL[j]) {
                  lyricUL[j].classList.remove("active");
                  lyricUL[j].classList.remove("over");
                }
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
    // isPlaying && songInfo.isLoading === false && songInfo.isError === false && (
    (isPlaying && <div className="main_bottom_bar" style={modalFullIsOpen ? { 'background': 'transparent', 'justifyContent': 'center' } : { 'background': 'var(--bg-player)', 'justifyContent': 'unset' }}>
      {!modalFullIsOpen && <div className="player_info"  >
        {isPlaying && songInfo.isLoading === false && songInfo.isError === false && <div className="player_info_ctn">
          <div className="img">
            <img src={songInfo.infor.img} alt="f" />
          </div>

          <div className="name">
            <div className="name_ctn">
              <h5>
                <NavLink
                  to={"/song/" + songInfo.infor.id}>
                  {songInfo.infor.songname}
                </NavLink>
              </h5>
              <div className="artist">
                {songInfo.infor.artistInfo.map(
                  (artist, index) => (
                    <span key={index}>
                      <NavLink
                        to={
                          "/artists/" +
                          artist.alias
                        }
                      >
                        {artist.artistsName}
                      </NavLink>
                      {index !==
                        songInfo.infor.artistInfo
                          .length -
                        1 && ", "}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="more">
              {/* {mysong ? (
                mysong.includes(songInfo.infor.id) ? (
                  <button className="rhap_main-controls-button rhap_button-clear" onClick={() => handleAdd(songInfo.infor.id)}>
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                ) : (
                  <button className="rhap_main-controls-button rhap_button-clear" onClick={() => handleAdd(songInfo.infor.id)}>
                    <FontAwesomeIcon icon={faHeartCrack} />
                  </button>
                )
              ) : (
                <NavLink to={`/login`}>
                  <button className="rhap_main-controls-button rhap_button-clear">
                    <FontAwesomeIcon icon={faHeart} />
                  </button>
                </NavLink>

              )} */}
              <Like_heart id={songInfo.infor.id} type={'song'} />


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
                      <div className="name">
                        <NavLink to={"/song/" + songInfo.infor.id}>{songInfo.infor.songname}</NavLink>
                      </div>
                      {/* <div className="artist_con">
                        {songInfo.infor.artistInfo.map((artist, index) => (
                          <span key={index}>
                            <NavLink to={"/artists/" + artist.alias}>{artist.artistsName}</NavLink>
                            {index !== songInfo.infor.artistInfo.length - 1 && ", "}
                          </span>
                        ))}
                      </div> */}
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
                            <NavLink to={"/artists/" + artist.alias}>{artist.artistsName}</NavLink>
                            {index !== songInfo.infor.artistInfo.length - 1 && ", "}
                          </span>
                        ))}
                      </div>
                    </div>
                    {songInfo.infor.album !== undefined && <div className="item">
                      <h5>Album</h5>
                      <div className="content">

                        <NavLink to="/album/">{songInfo.infor.album ? songInfo.infor.album.name : ''}</NavLink>
                      </div>
                    </div>}
                    {songInfo.infor.composers.length > 0 && <div className="item">
                      <h5>Sáng tác</h5>
                      <div className="content">
                        {<NavLink to={"/artists/" + songInfo.infor.composers && songInfo.infor.composers.length > 0 ? songInfo.infor.composers[0].alias : 'Jack-J97'} >{songInfo.infor.composers.length > 0 ? songInfo.infor.composers[0].name : 'Jack-J97'}</NavLink>}
                      </div>
                    </div>}
                    {songInfo.infor.genres.length > 0 &&
                      <div className="item">
                        <h5>Thể loại</h5>
                        <div className="content">
                        {songInfo.infor.genres.map((genres, index) => (
                          <span key={index}>
                            <NavLink to={"/hub/" + genres.genreId}>{genres.genrename}</NavLink>
                            {index !== songInfo.infor.genres.length - 1 && ", "}
                          </span>
                        ))}
                          {/* {<NavLink to={"/artists/" + songInfo.infor.genres && songInfo.infor.genres[0] && songInfo.infor.genres[0].genreId ? songInfo.infor.genres[0].genreId : ''} >{songInfo.infor.genres[0] && songInfo.infor.genres[0].genrename}</NavLink>} */}
                        </div>
                      </div>
                    }
                    <div className="item">
                      <h5>Cung cấp bởi</h5>
                      <div className="content">
                        <NavLink to="/">WTF Musics</NavLink>
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
                      <div className="Modal_lyric_title">Lời bài hát</div>
                      <div className="Modal_lyric_ctn">
                        <textarea name="" id="" rows='15' value={haha ? haha.map((sentence) => sentence.data).join("\n") : 'Không có lời bài hát'} />
                      </div>
                      <div className="Modal_lyric_btn">
                        <button onClick={closeModalLyric}>ĐÓNG</button>
                      </div>
                    </Modal>
                    <div className="item" onClick={() => handleBanSong()}>
                      <FontAwesomeIcon icon={faBan} />
                      <p>chặn</p>
                    </div>
                  </div>
                  <div className="r_click_list">

                    
                    <CreatePlaylist idSongs={[songInfo.infor.id]} />
                    <div className="r_click_list_item" onClick={openModalFull}>
                      <ReactSVG
                        beforeInjection={(svg) => {
                          svg.classList.add("icon_list_nav_item_svg");
                        }}
                        src={icon_mic}
                      />
                      Phát cùng lời bài hát
                    </div>


                    <CopyToClipboard text={"http://localhost:3000/song/" + songInfo.infor.id}>
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
        </div>}
      </div>}

      <div className="player_main">
        <AudioPlayer
          ref={playerRef}
          volume={volume}
          loop={loop}
          // autoPlay={isPlaying}
          autoPlay={playing}
          onVolumeChange={(e) => handleVolumeChange(e)}
          onListen={(e) => handleListen(e)}
          onPause={handleStop}
          onCanPlay={handleTimeUpdate}
          onPlay={handlePlay}
          showSkipControls="true"
          // src={songInfo.infor.song.includes('?') ? songInfo.infor.song.substring(0, songInfo.infor.song.indexOf('?') + 1) + newAuthenURL : songInfo.infor.song}
          src={songInfo.infor.song}
          onClickPrevious={handleClickPrevious}
          onClickNext={handleClickNext}
          onEnded={handleEnd}

          customProgressBarSection={[
            RHAP_UI.CURRENT_TIME,
            RHAP_UI.PROGRESS_BAR,
            RHAP_UI.CURRENT_LEFT_TIME,
            RHAP_UI.VOLUME,
          ]}
          layout="stacked-reverse"
          customVolumeControls={[
            <button className={isRandom === true ? "rhap_button-clear rhap_random" : "rhap_button-clear"} onClick={() => handleRandom()}>
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
        style={{ opacity: songInfo.infor.lyricsString.length > 0 ? 1 : 0.5 }}
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
            <div style={{ display: 'flex', gap: '10px' }}>
              <div className="time" onClick={() => openModalTime()}>
                <FontAwesomeIcon icon={faClock} />
              </div>
              <Popup
                trigger={
                  <div className="time">
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                  </div>
                }
                position="bottom right"
                on="click"
                closeOnDocumentClick
                mouseLeaveDelay={300}
                mouseEnterDelay={0}
                contentStyle={{ padding: "0", border: "none" }}
                arrow={false}
                nested

              >
                {close => (
                  <div className="menu-plalist">
                    {
                      <>
                        <button className="menu-item" onClick={() => { handleRemovePlaylist() }}> <FontAwesomeIcon icon={faTrash} />Xoá danh sách phát</button>
                        <button className="menu-item"><FontAwesomeIcon icon={faDownload} />Tải danh sách phát</button>
                        {/* <button className="menu-item" onClick={(e) => e.preventDefault()}>j</button> */}

                      </>
                    }


                  </div>)
                }
              </Popup>
            </div>
          </div>
          <div className="Modal_playlist_ctn">
            <div className="playlist">
              {dataf && dataf.song && dataf.song.map((item, index) => {
                return item.id === songInfo.infor.id ?
                  <div className="list_song active" key={'hahaha' + index} onClick={() => handleClickNow(index)} ref={(ref) => ref && ref.scrollIntoView({ behavior: "smooth", block: "start" })}>
                    <SongCard element={item} className={'active'} />
                  </div>
                  :
                  <div className="list_song" key={'hahaha' + index} >
                    <SongCard element={item} className={'active'} />
                  </div>

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
          {isPlaying && songInfo.isLoading === false && songInfo.isError === false && <div className="playlist_player_body">
            <div className="body">
              <div className="avt">
                <img src={songInfo.infor.img.replace('w240', 'w600')} alt="h" />
              </div>
              <div className="lyric">
                <ul className="scroll-content">

                  {haha && haha.map((sentence, index) => {
                    return <li className="item" key={'haha' + index}>{sentence.data}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>}
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
        <div className="timeout"
          onClick={() => handleHideTime()}
        >
          <h3>Chọn giờ dừng phát nhạc</h3>
          <div className='stopwatch-card'>
            {/* <input
                type="number"
                min="1"
                max="60"
                step="1"
                value={outTime}
                onChange={handleStopTimeChange}
              />
              <div className="time-picker">
                <div className="time-input">
                  <div className="control"><input className="input is-primary" type="text" value="02" />
                    <div className="time-options">
                      <div className="option">00 giờ</div>
                      <div className="option">01 giờ</div>
                      <div className="option active">02 giờ</div>
                      <div className="option">03 giờ</div><div className="option">04 giờ</div>
                      <div className="option">05 giờ</div><div className="option">06 giờ</div>
                      <div className="option">07 giờ</div><div className="option">08 giờ</div>
                      <div className="option">09 giờ</div><div className="option">10 giờ</div>
                      <div className="option">11 giờ</div><div className="option">12 giờ</div>
                    </div>
              /> */}
            <div className="time-picker" >
              <div className="time-input" onClick={() => setIsActiveHours(true)}>
                <div className="control"><input className="input is-primary" type="number"
                  min="1"
                  max="12" value={hours.toString().padStart(2, '0')} onChange={(e) => handleSetHours(e)} />
                  <div className={`time-options ${isActivehours === true ? 'active' : ''}`}>
                    {hoursOptions.map((option, index) => (
                      <div
                        key={index}
                        className={`option ${option === 0 ? 'active' : ''}`}
                        onClick={() => { setHours(option); setIsActiveHours(false) }}
                      >
                        {option.toString().padStart(2, '0')} giờ
                      </div>
                    ))}
                  </div>
                </div>
                <span className="label">giờ</span>
              </div>
              <div className="dot">:</div>
              <div className="time-input" onClick={() => setIsActiveMinutes(true)}>
                <div className="control">
                  <input className="input is-primary" type="number"
                    min="0"
                    max="60" value={minutes.toString().padStart(2, '0')} onChange={(e) => handleSetMinutes(e)} />
                  <div className={`time-options ${isActiveminutes === true ? 'active' : ''}`}>
                    {minutesOptions.map((option, index) => (
                      <div
                        key={index}
                        className={`option ${option === 0 ? 'active' : ''}`}
                        onClick={() => { setMinutes(option); setIsActiveMinutes(false) }}
                      >
                        {option.toString().padStart(2, '0')} phút
                      </div>
                    ))}
                  </div>
                </div>
                <span className="label">phút</span>

              </div>
              <div className="dot">:</div>
              <div className="time-input" onClick={() => setIsActiveSecond(true)}>
                <div className="control">
                  <input className="input is-primary" type="number"
                    min="0"
                    max="60" value={second.toString().padStart(2, '0')} onChange={(e) => handleSetSeconds(e)} />
                  <div className={`time-options ${isActivesecond === true ? 'active' : ''}`}>
                    {secondsOptions.map((option, index) => (
                      <div
                        key={index}
                        className={`option ${option === 0 ? 'active' : ''}`}
                        onClick={() => { setSecond(option); setIsActiveSecond(false) }}
                      >
                        {option.toString().padStart(2, '0')} giây
                      </div>
                    ))}
                  </div>
                </div>
                <span className="label">giây</span>

              </div>
            </div>
            <p>{formatTime()}</p>
            <div className='buttons'>
              {/* {
                  !isActive && !isPaused ?
                    <button onClick={handleStart}>Start</button>
                    : (
                      isPaused ? <button onClick={handlePause}>Pause</button> :
                        <button onClick={handleResume}>Resume</button>
                    )
                }*/}
              <button onClick={() => handleReset()} disabled={!isActive}>Reset</button>
              <button onClick={() => handleStart('new')} >Lưu</button>
            </div>
            <button onClick={closeModalTime}>Huỷ</button>

          </div>
        </div>
      </Modal>
      <ToastContainer
        style={{ fontSize: "16px" }}
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
    )
  );
};

export default Bottombar;