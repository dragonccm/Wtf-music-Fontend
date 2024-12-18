import React, { useState } from "react";
import "../../css/Detailed_list.scss";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import moment from 'moment';
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faShare, faLink, faPlay,faTrash} from "@fortawesome/free-solid-svg-icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
// redux
import { useEffect } from "react";
import { fetchPlayList, randomSongs } from '../../redux/slide/playlistSlice'
import { setUserPlaylist } from "../../redux/slide/InforUserSlice";

import { fetchSongPlaying, update } from "../../redux/slide/songPlayingSlice";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import SongCard2 from '../card/song_card2'
import ArtistList from "../card/artistList"
import Loading from "../sideNavigation/mascot_animation";
import Like_heart from "../card/like";
import CreatePlaylist from "../card/createPlaylist";
import Play_animation from "../card/play_animation"
import Card from "../card/playlist_card"
import { addHisFetch } from "../../services/upDateHService";

import { playlistroute } from "../../controller/playlist";
import { deleteplaylist } from "../../controller/MyPlaylist"
import { userPLayList } from '../../controller/MyPlaylist'
const Playlistpage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
    if (response.EC === '0' && response.DT) {
      console.log(response);
      setPlaylist(response.DT)
    } else {
      // console.log('saiiiiiiiiiiiiii')
    }
  }

  // const currData = useSelector((state) => state.playlist.playlist.data);
  if (!playlist || !playlist.song) {
    // console.error('currData is not properly formatted:', currData);
    return <div className="main_banner"><Loading /></div>;
  }


  const handlePlayPlaylist = async () => {
     dispatch(fetchPlayList({ id }));
    localStorage.removeItem('playlistRelate')
    if (JSON.parse(localStorage.getItem('isRandom'))) {
       dispatch(randomSongs())
      console.log('jaaaaaaaaaaaaaaaaa');
    }
    dispatch(fetchSongPlaying(playlist.song[0].id))
    dispatch(update(0))
    localStorage.setItem('playlistID', id)
    if (user && playlist.playlist.type !=='user') {
      // console.log('kifffffffffffffffffffffff');
      await addHisFetch({
        id: id,
        type: "playlist",
      })
    }
  };
  const handledelete = async (e) => {
    e.preventDefault();
    const response = await deleteplaylist({ playlistId: id });
    if (response && response.EC === '0') {
        toast.success('Xóa thành công');
        const fetchPlaylist = async () => {
            const response = await userPLayList();
            if (response.EC === "0") {
              dispatch(setUserPlaylist(response.DT));
              navigate("/profile/myplaylist");
            }
          };
          fetchPlaylist();
    } else {
        toast.error('Xóa thất bại');
    }
};
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
                  <span className="user_name">Cập nhật: {moment(playlist.playlist.updatedAt).format('DD.MM.YYYY')}</span>

                  {/* <span className="user_name">{playlist.artistsNames}</span> */}
                  {/* <span className="total_song"> {playlist.song.total} bài hát</span> */}
                  {playlist.playlist.type !=='user'&&<span className="total_time"> {playlist.playlist.like > 1000 ? ((playlist.playlist.like / 1000).toFixed(1)) + 'k' : playlist.playlist.like} người yêu thích</span>}
                </div>
              </div>
            </div>
          </div>

          <div className="control">
            <button className="play_random" onClick={() => handlePlayPlaylist()} >
              <FontAwesomeIcon icon={faPlay} />
              <span>PHÁT TẤT CẢ</span>
            </button>
            <div className="child_btn_gr">
              {playlist.playlist.type !=='user'&&<Like_heart id={playlist.playlist.playlistId} type={'playlist'} />}


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
                  {playlist.playlist.type !=='user'&&<button className="menu-item" onClick={(e) => e.preventDefault()}>
                    <CreatePlaylist
                    idSongs={playlist.song.map((item) => {
                      return item.id
                    })}
                    />
                  </button>}
                  <CopyToClipboard text={"http://localhost:3000/playlist/" + playlist.playlist.playlistId}>
                    <button className="menu-item copy"><FontAwesomeIcon icon={faLink} /> Sao Chép Link</button>
                  </CopyToClipboard>
                  <button className="menu-item"><FontAwesomeIcon icon={faShare} /> Chia sẻ</button>
                {playlist.playlist.type ==='user'&&<button className="menu-item" onClick={(e)=>handledelete(e)}><FontAwesomeIcon icon={faTrash} /> Xoá playlist</button>}

                </div>
              </Popup>
            </div>
          </div>
        </div>

        <div className="list_body">
          <section className="description">
            <p>Lời tựa <span>
              {playlist.playlist.description}
            </span></p>

          </section>
          <div className="list">
            {playlist.song.map((data, index) => (
              <SongCard2
                key={'haha'+index}
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
      {playlist.artist.length > 0 && <div className="list_card">

        <h1>Nghệ sĩ tham gia</h1>
        <ArtistList data={playlist.artist} />
      </div>}
      {/* <div className="recommen">
        <div className="recommen_list">
          <Card playlist={data} />
        </div>

      </div> */}

    </section>
  );
};
export default Playlistpage;
