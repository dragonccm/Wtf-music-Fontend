import React, { useEffect, useState } from "react";
import { getSongData } from "../../services/SongService";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Modal from 'react-modal';
import 'reactjs-popup/dist/index.css';
import "../../css/Bottombar.scss";
import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import { ReactSVG } from "react-svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faEllipsis, faShuffle, faForwardStep, faBackwardStep, faHeadphonesSimple, faBan, faDownload, faCirclePlus, faLink, faChevronDown, faCompress, faExpand } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faCirclePlay, faCirclePause, faClock } from "@fortawesome/free-regular-svg-icons";
import icon_karaoke from "../../img/karaoke-sing-svgrepo-com.svg";
import icon_playlist from "../../img/playlist-thin-svgrepo-com.svg"
import icon_mic from "../../img/karaoke-svgrepo-com.svg"
Modal.setAppElement('#root');
const Bottombar = () => {
  const [currentSong, SetSong] = useState([])
  const [isFullScreen, SetIsFullScreen] = useState(false)
  const [animationActive, setAnimationActive] = useState(true);
  const [animationPlaylistActive, setAnimationPlaylistActive] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const response = await getSongData("Z7I9OC70");
      const viprotrack = {
        artistsNames: response.artistsNames,
        songname: response.songname,
        imge: response.img,
        song: response.song,
        lyricsString: response.lyricsString,
      }

      SetSong(viprotrack)
    }
    fetchData()
  }, [])



  const icon_play = <FontAwesomeIcon icon={faCirclePlay} />;
  const icon_next = <FontAwesomeIcon icon={faForwardStep} />;
  const icon_previous = <FontAwesomeIcon icon={faBackwardStep} />
  const icon_pause = <FontAwesomeIcon icon={faCirclePause} />


  const [modalMenuIsOpen, setMenuIsOpen] = React.useState(false);
  const [modalFullIsOpen, setFullIsOpen] = React.useState(false);
  const [modalLyricIsOpen, setLyricIsOpen] = React.useState(false);
  const [modalPlaylistIsOpen, setPlaylistIsOpen] = React.useState(false);

  function openModal() {
    setMenuIsOpen(true);
  }
  function openModalFull() {
    setFullIsOpen(true);
    setAnimationActive(true);
    setMenuIsOpen(true);

  }
  function openModalLyric() {
    setLyricIsOpen(true)
  }
  function openModalPlaylist() {
    if (modalPlaylistIsOpen) {
      setAnimationPlaylistActive(false);
      setTimeout(() => {
        setPlaylistIsOpen(false)
      }, 700)

    } else {
      setPlaylistIsOpen(true)
      setAnimationPlaylistActive(true)
    }
  }


  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setMenuIsOpen(false);
  }
  function closeModalLyric() {
    setLyricIsOpen(false);
  }

  function closeModalFull() {
    setAnimationActive(false);
    setTimeout(() => {
      setMenuIsOpen(false)
      setFullIsOpen(false);
    }, 700)
  }

  const elem = document.documentElement;
  const handleOpenFullScreen = () => {
    SetIsFullScreen(true);

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
  }

  const handleCloseFullScreen = () => {
    SetIsFullScreen(false);

    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  }

  const arr_playlist = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 'jj']

  return (
    <div className="main_bottom_bar">
      <div className="player_info">
        <div className="player_info_ctn">
          <div className="img">
            <img src={currentSong.imge} alt="f" />
          </div>
          <div className="name">
            <div className="name_ctn">
              <h5>{currentSong.songname}</h5>
              <div className="artist">
                {currentSong.artistsNames}
                <a href="/">three some</a>
              </div>
            </div>
            <div className="more">
              <button className="rhap_main-controls-button rhap_button-clear">
                <FontAwesomeIcon icon={faHeart} />
              </button>
              {/* <Popup
                trigger={
                  <button className="rhap_main-controls-button rhap_button-clear">
                    <FontAwesomeIcon icon={faEllipsis} />
                  </button>
                }
                position="top right"
                nested
                closeOnDocumentClick
                mouseLeaveDelay={300}
                mouseEnterDelay={0}
                contentStyle={{ padding: "0", border: "none", width: "285px", top: '1000px', left: '1334px' }}
                arrow={false}>

                <div className="r_click">
                  <div className="r_click_head">
                    <div className="r_click_head_img"><img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/4/5/4/3/4543a3bc0d30b933ea9baf87df054241.jpg" alt="" /></div>
                    <div className="r_click_head_info">
                      <div className="name">Tettovent</div>
                      <div className="more">
                        <div className="more_item">
                          <FontAwesomeIcon icon={faHeart} />
                          4K
                        </div>
                        <div className="more_item">
                          <FontAwesomeIcon icon={faHeadphonesSimple} />
                          318K
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="submenu-content">
                    <div className="item">
                      <h5>Nghệ sĩ</h5>
                      <div className="content">
                        <a href="">Wxrdie, </a>
                        <a href="">Andree right Hand, </a>
                        <a href="">Machiot, </a>
                      </div>
                    </div>
                    <div className="item">
                      <h5>Albuml</h5>
                      <div className="content">
                        <a href="">TETVOVENT (Single)</a>
                      </div>
                    </div>
                    <div className="item">
                      <h5>Sáng tác</h5>
                      <div className="content">
                        <a href="">Đỗ Minh Nghĩa</a>
                      </div>
                    </div>
                    <div className="item">
                      <h5>Thể loại</h5>
                      <div className="content">
                        <a href="">Việt Nam</a>
                      </div>
                    </div>
                    <div className="item">
                      <h5>Cung cấp bởi</h5>
                      <div className="content">
                        <a href="">Ingrooves Music Group</a>
                      </div>
                    </div>

                  </div>
                  <div className="r_click_navigation">
                    <div className="item">
                      <FontAwesomeIcon icon={faDownload} />
                      <p>tải xuống</p>
                    </div>
                    <div className="item">
                      <ReactSVG
                        beforeInjection={(svg) => {
                          svg.classList.add("icon_list_nav_item_svg");
                        }}
                        src={icon_karaoke}
                      />
                      <p>lời bài hát</p>
                    </div>
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
                    <div className="r_click_list_item">
                      <ReactSVG
                        beforeInjection={(svg) => {
                          svg.classList.add("icon_list_nav_item_svg");
                        }}
                        src={icon_mic}
                      />
                      Phát cùng lời bài hát
                    </div>
                    <div>
      <button onClick={openModal}>Open Modal</button>
    
    </div>
                      <CopyToClipboard text="Fuck you!">
                    <div className="r_click_list_item">
                        <FontAwesomeIcon icon={faLink} />
                        Sao chép link
                    </div>
                      </CopyToClipboard>


                  </div>

                </div>

              </Popup> */}
              <button onClick={openModal} className="rhap_main-controls-button rhap_button-clear">
                <FontAwesomeIcon icon={faEllipsis} />
              </button>
              <Modal
                isOpen={modalMenuIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                // style={customStyles}
                className="Modal"
                overlayClassName="Overlay"
                shouldCloseOnOverlayClick={true}

              >
                {/* <button onClick={closeModal}>close</button> */}
                <div className="r_click">
                  <div className="r_click_head">
                    <div className="r_click_head_img"><img src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/4/5/4/3/4543a3bc0d30b933ea9baf87df054241.jpg" alt="f" /></div>
                    <div className="r_click_head_info">
                      <div className="name">Tettovent</div>
                      <div className="more">
                        <div className="more_item">
                          <FontAwesomeIcon icon={faHeart} />
                          4K
                        </div>
                        <div className="more_item">
                          <FontAwesomeIcon icon={faHeadphonesSimple} />
                          318K
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="submenu-content">
                    <div className="item">
                      <h5>Nghệ sĩ</h5>
                      <div className="content">
                        <a href="/">Wxrdie, </a>
                        <a href="/">Andree right Hand, </a>
                        <a href="/">Machiot, </a>
                      </div>
                    </div>
                    <div className="item">
                      <h5>Albuml</h5>
                      <div className="content">
                        <a href="/">TETVOVENT (Single)</a>
                      </div>
                    </div>
                    <div className="item">
                      <h5>Sáng tác</h5>
                      <div className="content">
                        <a href="/">Đỗ Minh Nghĩa</a>
                      </div>
                    </div>
                    <div className="item">
                      <h5>Thể loại</h5>
                      <div className="content">
                        <a href="/">Việt Nam</a>
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
                    <div className="item">
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
                        <textarea name="" id="" rows='15'>
                          Chăn mền tôi đắp
                          Vẫn còn vương vấn cũ
                          Sau làn da thắm
                          Vết thương chưa dứt đủ
                          Thế nên mình đến lúc này
                          Biết đâu là quá ngây dại
                          Những lời yêu dấu
                          Thốt ra ru êm tôi
                          Cung đàn anh tấu
                          Khẽ lay tim bồi hồi
                          Tôi thấy quên ngày tháng nhạt nhoà
                          Và tôi đã mơ chuyện của chúng ta
                          Nhiều lần bên nhau lúc hẹn hò
                          Còn vài niềm riêng
                          Bối rối đầy gượng gạo
                          Tự dày vò không ngơi bao đêm thâu
                          Giờ tôi muốn anh hiểu hết tâm tình
                          Để lòng tôi lắng yên
                          Mình à sao đôi ta
                          Lại chẳng xuất phát đi chung
                          Một chuyến ga đời
                          Đã lỡ viết trước
                          Câu chuyện yêu không vui
                          Thứ lỗi cho tôi
                          Không thể đợi lúc gặp người
                          Đành hẹn nơi khác nhé
                          Đừng buồn ôi yêu thương ơi
                          Vì mình mang đến cho tôi
                          Hạnh phúc thật nhiều
                          Sẽ dõi ánh mắt trông theo từ xa
                          Mong sao tháng năm
                          Mang tôi đi khỏi
                          Nỗi khắc khoải tiếc thương
                          Khi bỏ lỡ danh phận
                          Sau lời từ khước
                          Tôi về như lúc trước
                          Không còn chung bước
                          Chỉ có thêm đôi vết xước
                          In vào hình hài cuộc đời
                          Nhiều khi tôi không thể nói
                          Điều này đúng hay sai
                          Tôi lại gai góc giấu đi ưu tư
                          Để ngăn mình bật khóc
                          Những chuyện đã qua
                          Sao phải giữ trong lòng chi nữa
                          Chắc tôi khiến cho chính tôi
                          Cứ thêm đớn đau đấy thôi
                          Mình à sao đôi ta
                          Lại chẳng xuất phát đi chung
                          Một chuyến ga đời
                          Đã lỡ viết trước
                          Câu chuyện yêu không vui
                          Thứ lỗi cho tôi
                          Không thể đợi lúc gặp người
                          Đành hẹn nơi khác nhé
                          Đừng buồn ôi yêu thương ơi
                          Vì mình mang đến cho tôi
                          Hạnh phúc thật nhiều
                          Sẽ dõi ánh mắt trông theo từ xa
                          Mong sao tháng năm mang tôi đi khỏi
                          Nỗi khắc khoải tiếc thương
                          Khi bỏ lỡ danh phận
                          Mình à sao đôi ta
                          Lại chẳng xuất phát đi chung
                          Một chuyến ga đời
                          Đã lỡ viết trước
                          Câu chuyện yêu không vui
                          Thứ lỗi cho tôi
                          Không thể đợi lúc gặp người
                          Đành hẹn nơi khác nhé
                          Đừng buồn ôi yêu thương ơi
                          Vì mình mang đến cho tôi
                          Hạnh phúc thật nhiều
                          Sẽ dõi ánh mắt trông theo từ xa
                          Mong sao tháng năm mang tôi đi khỏi
                          Nỗi khắc khoải tiếc thương
                          Khi bỏ lỡ danh phận
                        </textarea>
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
                      onRequestClose={closeModalFull}
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
                          <button onClick={closeModalFull} className="close_btn header_btn"><FontAwesomeIcon icon={faChevronDown} /></button>



                        </div>
                        <div className="playlist_player_body">
                          <div className="body">
                            <div className="avt">
                              <img src="https://photo-resize-zmp3.zmdcdn.me/w480_r1x1_jpeg/cover/4/5/4/3/4543a3bc0d30b933ea9baf87df054241.jpg" alt="h" />
                            </div>
                            <div className="lyric">
                              <ul className="scroll-content">
                                <li className="item over">Có thằng bạn lên Hà Nội bôn ba</li>
                                <li className="item over">Hai hôm đã cưỡi SH *** hiểu đâu ra</li>
                                <li className="item active">Nó muốn nghe tao thả mấy câu ca</li>
                                <li className="item">Nó muốn nghe tao rót</li>
                                <li className="item">Mấy con flow ra</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Modal>

                    <CopyToClipboard text="Fuck you!">
                      <div className="r_click_list_item">
                        <FontAwesomeIcon icon={faLink} />
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
          showSkipControls='true'
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
          <button className="rhap_button-clear rhap_main-controls-button btn_more" onClick={openModalFull}>
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
        <button className="rhap_button-clear rhap_main-controls-button btn_more playlist_btn" onClick={openModalPlaylist}>
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
          overlayClassName={animationPlaylistActive ? "Overlay_playlist" : "Overlay_playlist active"}
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
                    <div className="item active" key={'oik' + index}>
                      <div className="img">
                        <img src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/4/5/4/3/4543a3bc0d30b933ea9baf87df054241.jpg" alt="avt" />
                        <div className="img_overlay">
                          <div className="img_overlay_group_btn">
                            <div className="nav-link list_nav_item">
                              <FontAwesomeIcon icon={faPlay} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content">
                        <div className="name">
                          <span>TETVOVEN</span>
                        </div>
                        <div className="artist">
                          <span>Wxrdie, Andree Right Hand</span>
                        </div>
                      </div>
                      <div className="love">
                        <FontAwesomeIcon icon={faHeart} />
                      </div>
                    </div>
                  )
                } else {
                  return (
                    <div className="item" key={'oik' + index}>
                      <div className="img">
                        <img src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/4/5/4/3/4543a3bc0d30b933ea9baf87df054241.jpg" alt="avt" />
                        <div className="img_overlay">
                          <div className="img_overlay_group_btn">
                            <div className="nav-link list_nav_item">
                              <FontAwesomeIcon icon={faPlay} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="content">
                        <div className="name">
                          <span>TETVOVEN</span>
                        </div>
                        <div className="artist">
                          <span>Wxrdie, Andree Right Hand</span>
                        </div>
                      </div>
                      <div className="love">
                        <FontAwesomeIcon icon={faHeart} />
                      </div>
                    </div>
                  )
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
  );
};


export default Bottombar;