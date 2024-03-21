import React from "react";
import "../../css/Detailed_list.scss";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { NavLink } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faSquarePlus, faPlay, faLink, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regular } from "@fortawesome/free-regular-svg-icons";
// redux
import { useEffect } from "react";
import { fetchPlayList } from '../../redux/slide/playlistSlice'
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';


const Playlistpage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlayList(id));
  }, [dispatch]);

  const currData = useSelector((state) => state.playlist.playlist.data);
  console.log(currData)
  if (!currData || !currData.song || !Array.isArray(currData.song.items)) {
    console.error('currData is not properly formatted:', currData);
    return <div className="main_banner">Loading...</div>;
  }
  function handledata(data) {
    return data.song.items.map((con) => ({
      id: con.encodeId,
      name: con.title,
      image: con.thumbnailM,
      category: "playlist",
      songartist: con.artistsNames,
      songname: con.title,
      addedday: "11 thg 11, 2021",
      liked_state: false,
      songdata:
        "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
      total: "3:00",
      root_album: "Solo",
    }));;
  }


  return (
    <section className="detailed_list">
      <div className="list_father">
        <div className="list_head">
          <div className="list_info_ctn">
            <div className="left_head">
              <img
                src={currData.thumbnailM}
                alt="f"
              />
            </div>
            <div className="mid_head">
              <h1 className="list_name">{currData.title}</h1>
              <div className="info">
                <div className="small_avt">
                  <img
                    src={currData.thumbnail}
                    alt="playlist-img"
                  />
                </div>
                <div className="playlist_info_item">
                  <span className="user_name">{currData.artistsNames}</span>
                  <span className="total_song">, {currData.song.items.lenght} bài hát</span>
                  <span className="total_time">, 2 giờ 15 phút</span>
                </div>
              </div>
            </div>
          </div>

          <div className="control">
            <button className="play_random">
              <FontAwesomeIcon icon={faPlay} />
              <span>Phát Ngẫu Nhiên</span>
            </button>
            <div className="child_btn_gr">
              <button className="favourite">
                <FontAwesomeIcon icon={regular} />
              </button>
              <Popup
                trigger={
                  <button className="menu_btn">
                    {" "}
                    <FontAwesomeIcon icon={faEllipsis} />
                  </button>
                }
                position="bottom center"
                nested
                closeOnDocumentClick
                mouseLeaveDelay={300}
                mouseEnterDelay={0}
                contentStyle={{ padding: "0", border: "none" }}
                arrow={false}
              >
                <div className="menu">
                  <button className="menu-item"><FontAwesomeIcon icon={faSquarePlus} /> Thêm Vào PlayList</button>
                  <button className="menu-item"><FontAwesomeIcon icon={faLink} /> Sao Chép Link</button>
                  <button className="menu-item"><FontAwesomeIcon icon={faPlay} /> Phát Tất Cả</button>
                </div>
              </Popup>
            </div>
          </div>
          <div className="total_like">999K người yêu thích</div>
        </div>

        <div className="list_body">
          <section className="description">
            <p>Lời tựa</p>
            <span>
              {currData.sortDescription}
            </span>
          </section>
          <div className="list">
            {handledata(currData).map((data, index) => (
              <div className="list_row">
                <div className="song_img_ctn">
                  <div className="row_order">
                    <div className="number">{index + 1}</div>
                    <div className="hidden_button">
                      <NavLink
                        to="/songpage"
                        className="nav-link list_nav_item play"
                      >
                        <FontAwesomeIcon icon={faPlay} />
                      </NavLink>
                    </div>
                  </div>
                  <div className="song_img">
                    <img src={data.image} alt="f" />
                  </div>
                  <div className="songif">
                    <div className="songname">{data.songname}</div>
                    <div className="songartist">{data.songartist}</div>
                  </div>
                </div>
                <div className="root_album">{data.root_album}</div>
                <div className="foot">
                  <div className="liked">
                    <FontAwesomeIcon
                      icon={data.liked_state ? faHeart : regular}
                    />
                  </div>
                  <div className="time">{data.songname}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*<div className="recommen">
                <div className="recommen_list">
                    <Card playlist={data} />
                </div>
                <div className="recommen_list">
                    <Card playlist={data} />
                </div>
            </div>
 */}
    </section>
  );
};
export default Playlistpage;
