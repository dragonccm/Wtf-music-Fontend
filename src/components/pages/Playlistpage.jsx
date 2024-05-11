import React, { useState } from "react";
import "../../css/Detailed_list.scss";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faSquarePlus, faPlay, faLink, faHeart } from "@fortawesome/free-solid-svg-icons";
// redux
import { useEffect } from "react";
import { fetchPlayList } from '../../redux/slide/playlistSlice'
import { fetchSongPlaying,update } from "../../redux/slide/songPlayingSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import SongCard2 from '../card/song_card2'
import Loading from "../sideNavigation/mascot_animation";
import Like_heart from "../card/like";

import { playlistroute } from "../../controller/playlist";
const Playlistpage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [playlist, setPlaylist] = useState([])
  const currData = useSelector((state) => state.Authentication);

  useEffect(() => {
    // dispatch(fetchPlayList(id));
    fecthPlaylist()
  }, []);
  const fecthPlaylist = async () => {

    let response = await playlistroute(id);
    if (response && response.data) {
      console.log(response.data)
      setPlaylist(response.data)
    }
  }

  // const currData = useSelector((state) => state.playlist.playlist.data);
  if (!playlist || !playlist.song || !Array.isArray(playlist.song.items)) {
    // console.error('currData is not properly formatted:', currData);
    return <div className="main_banner"><Loading /></div>;
  }


  const handleAdd = (id) => {
    let username
    if (currData) {
      username = currData.defaultUser.account.username;
    }
  
  }

  const handlePlayPlaylist = () => {
    dispatch(fetchPlayList(id));
    dispatch(fetchSongPlaying(playlist.song.items[0].encodeId))
    dispatch(update(0))
    localStorage.setItem('playlistID', id)
  };

  const mysong = currData.defaultUser.account.likedPlayLists
  return (
    <section className="detailed_list">
      <div className="list_father">
        <div className="list_head">
          <div className="list_info_ctn">
            <div className="left_head">
              <img
                src={playlist.thumbnailM}
                alt="f"
              />
            </div>
            <div className="mid_head">
              <h1 className="list_name">{playlist.title}</h1>
              <div className="info">

                <div className="playlist_info_item">
                  <span className="user_name">{playlist.artistsNames}</span>
                  <span className="total_song"> {playlist.song.total} bài hát</span>
                  <span className="total_time"> {playlist.like > 1000 ? playlist.like / 1000 + 'k' : playlist.like} người yêu thích</span>
                </div>
              </div>
            </div>
          </div>

          <div className="control">
            <button className="play_random" onClick={() => handlePlayPlaylist()} >
              <FontAwesomeIcon icon={faPlay} />
              <span>Phát Ngẫu Nhiên</span>
            </button>
            <div className="child_btn_gr">
            <Like_heart id={playlist.encodeId} type={'playlist'} />


              <Popup
                trigger={
                  <button className="menu_btn playlist_btn">
                    {" "}
                    <FontAwesomeIcon icon={faEllipsis} />
                  </button>
                }
                position="top center"
                on="hover"
                closeOnDocumentClick
                mouseLeaveDelay={300}
                mouseEnterDelay={0}
                contentStyle={{ padding: "0", border: "none" }}
                arrow={false}
              >
                <div className="menu-plalist">
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
              {playlist.sortDescription}
            </span>
          </section>
          <div className="list">
            {playlist.song.items.map((data, index) => (
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
