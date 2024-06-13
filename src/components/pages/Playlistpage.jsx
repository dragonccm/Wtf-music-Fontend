import React, { useState } from "react";
import "../../css/Detailed_list.scss";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faSquarePlus, faPlay, faLink, faHeart } from "@fortawesome/free-solid-svg-icons";
// redux
import { useEffect } from "react";
import { fetchPlayList } from '../../redux/slide/playlistSlice'
import { fetchSongPlaying, update } from "../../redux/slide/songPlayingSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import SongCard2 from '../card/song_card2'
import Loading from "../sideNavigation/mascot_animation";
import Like_heart from "../card/like";
import CreatePlaylist from "../card/createPlaylist";
import Play_animation from "../card/play_animation"
import { addHisFetch } from "../../services/upDateHService";

import { playlistroute } from "../../controller/playlist";
const Playlistpage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [playlist, setPlaylist] = useState({})
  const currData = useSelector((state) => state.Authentication);
  const nowPlaylist = useSelector((state) => state.playlist);
  const user = useSelector((state) => state.Authentication.defaultUser.isAuthenticated);


  useEffect(() => {
    fecthPlaylist()
    // console.log(playlist);
  }, []);

  const fecthPlaylist = async () => {

    let response = await playlistroute(id);
    if (response.EC === '0' &&response.DT.data) {
      // console.log(response);
      setPlaylist(response.DT.data)
    } else {
      // console.log('saiiiiiiiiiiiiii')
    }
  }

  // const currData = useSelector((state) => state.playlist.playlist.data);
  if (!playlist || !playlist.song || !playlist.genres) {
    // console.error('currData is not properly formatted:', currData);
    return <div className="main_banner"><Loading /></div>;
  }


  const handleAdd = (id) => {
    let username
    if (currData) {
      username = currData.defaultUser.account.username;
    }

  }

  const handlePlayPlaylist = async () => {
    dispatch(fetchPlayList({ id }));
    localStorage.removeItem('playlistRelate')
    dispatch(fetchSongPlaying(playlist.song[0].id))
    dispatch(update(0))
    localStorage.setItem('playlistID', id)
    if (user) {
      // console.log('kifffffffffffffffffffffff');
      await addHisFetch({
        id: id,
        type: "playlist",
      })
    }
  };

  const mysong = currData.defaultUser.account.likedPlayLists
  return (
    // <></>
    <section className="detailed_list">
      <div className="list_father">
        <div className="list_head">
          <div className="list_info_ctn">
            <div className="left_head">
              <img
                src={playlist.playlist.thumbnail}
              />
              {/* {nowPlaylist &&
                playlist.encodeId === nowPlaylist.playlist.data.encodeId &&
                <Play_animation />
              } */}
            </div>
            <div className="mid_head">
              <h1 className="list_name">{playlist.playlist.playlistname}</h1>
              <div className="info">

                <div className="playlist_info_item">
                  {/* <span className="user_name">{playlist.artistsNames}</span> */}
                  {/* <span className="total_song"> {playlist.song.total} bài hát</span> */}
                  <span className="total_time"> {playlist.playlist.like > 1000 ? playlist.playlist.like / 1000 + 'k' : playlist.playlist.like} người yêu thích</span>
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
              <Like_heart id={playlist.playlist.playlistId} type={'playlist'} />


              <Popup
                trigger={
                  <button className="menu_btn playlist_btn">
                    {" "}
                    <FontAwesomeIcon icon={faEllipsis} />
                  </button>
                }
                position="top center"
                on="click"
                closeOnDocumentClick
                mouseLeaveDelay={300}
                mouseEnterDelay={0}
                contentStyle={{ padding: "0", border: "none" }}
                arrow={false}
                nested
              >
                <div className="menu-plalist">
                  <button className="menu-item" onClick={(e) => e.preventDefault()}><CreatePlaylist
                    idSongs={playlist.song.map((item) => {
                      return item.id
                    })} /></button>

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
            {playlist.song.map((data, index) => (
              <SongCard2
                data={data}
                rating={{
                  israting: false,
                  index: index
                }
                }
                onPlaylist={{
                  idPlaylist: playlist.playlist.playlistId,
                  isPlay: true
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
