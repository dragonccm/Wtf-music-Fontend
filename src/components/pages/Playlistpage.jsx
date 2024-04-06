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
import SongCard2 from '../card/song_card2'

import { fetchSongPlaying } from "../../redux/slide/songPlayingSlice";
const Playlistpage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlayList(id));
  }, [dispatch]);

  const currData = useSelector((state) => state.playlist.playlist.data);
  console.log(currData)
  if (!currData || !currData.song || !Array.isArray(currData.song.items)) {
    // console.error('currData is not properly formatted:', currData);
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
  const handlePlaying = (e, id) => {
    e.preventDefault();
    dispatch(fetchSongPlaying(id));
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
                
                <div className="playlist_info_item">
                  <span className="user_name">{currData.artistsNames}</span>
                  <span className="total_song"> {currData.song.total} bài hát</span>
                  <span className="total_time"> {currData.like>1000?currData.like/1000+'k':currData.like} người yêu thích</span>
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
              <button className="favourite playlist_btn">
                <FontAwesomeIcon icon={regular} />
              </button>
              <Popup
                trigger={
                  <button className="menu_btn playlist_btn">
                    {" "}
                    <FontAwesomeIcon icon={faEllipsis} />
                  </button>
                }
                position="top center"
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
        </div>

        <div className="list_body">
          <section className="description">
            <p>Lời tựa</p>
            <span>
              {currData.sortDescription}
            </span>
          </section>
          <div className="list">
            {currData.song.items.map((data, index) => (
              <SongCard2
                data={data}
                rating={{
                  israting: true,
                  index: index
                }
                }
              />
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
