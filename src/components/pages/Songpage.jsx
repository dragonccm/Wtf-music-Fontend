import "../../css/Songpage.scss";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faShare } from '@fortawesome/free-solid-svg-icons'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faSquarePlus, faPlay, faLink } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
// import { fetchPlayList } from '../../redux/slide/playlistSlice'
import { fetchPageSong } from '../../redux/slide/songPageSlice'
import { useSelector, useDispatch } from "react-redux";
import { fetchSongPlaying } from "../../redux/slide/songPlayingSlice";
// import ListCard from "../card/ListCard";
import Loading from "../sideNavigation/mascot_animation";
import Card from '../card/playlist_card'
import CreatePlaylist from "../card/createPlaylist";
import Like_heart from "../card/like";

const Songpage = () => {


  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPageSong(id));
  }, [id]);

  const currSongData = useSelector((state) => state.songPage.pageData);
  const isLoading = useSelector((state) => state.songPage.isLoading);
  if (isLoading || !currSongData || !Object.keys(currSongData).length > 0 || !currSongData.img) {
    return <div><Loading /></div>;
  }
  const handlePlaying = (e, id) => {
    e.preventDefault();
    dispatch(fetchSongPlaying(id));
  }
  const usserplaylist = [
    {
      id: "jdfhhjf",
      img: "https://th.bing.com/th/id/OIP.iP-3O89bhSHrVr2rUEe4ZQHaEK?rs=1&pid=ImgDetMain",
      name: "Gone",
    },
    {
      id: "jdfhhjf",
      img: "https://th.bing.com/th/id/OIP.za6JTNz9MpwwZHBiIleI0AHaLH?rs=1&pid=ImgDetMain",
      name: "house",
    },
    {
      id: "jdfhhjf",
      img: "https://6.viki.io/image/6b2ff0b5d027478cbe9b1a63a8705e10/dummy.jpeg?s=900x600&e=t",
      name: "Money",
    },
    {
      id: "jdfhhjf",
      img: "https://6.viki.io/image/6b2ff0b5d027478cbe9b1a63a8705e10/dummy.jpeg?s=900x600&e=t",
      name: "Money",
    },
    {
      id: "jdfhhjf",
      img: "https://6.viki.io/image/6b2ff0b5d027478cbe9b1a63a8705e10/dummy.jpeg?s=900x600&e=t",
      name: "Money",
    },
  ];
  return (
    <section className="songpage_main">

      <div className="songpage_list_head">

        <div className="songpage_left_head">
          <img src={currSongData.img} alt="f" />
        </div>

        <div className="songpage_mid_head">
          <h5>Bài hát</h5>
          <h1 className="songpage_list_name">{currSongData.songname}</h1>
          <p className="songpage_info">

            <div className="songpage_user_name">{currSongData.artistInfo[0].name}</div>

            <div className="songpage_total_song">{currSongData.like > 1000 ? currSongData.like / 1000 + 'k' : currSongData.like} người yêu thích</div>
            <div className="songpage_total_time">{String(Math.floor(currSongData.duration / 60)).padStart(2, "0") + ':' + String(currSongData.duration % 60).padStart(2, "0")}</div>
          </p>
        </div>
      </div>


      <div className="song_body">
        <div className="song_control">
          <button className="play_random" onClick={(e) => handlePlaying(e, id)}>
            <FontAwesomeIcon icon={faCirclePlay} />
          </button>
          <Like_heart id={id} type={'song'} />
          <Popup trigger={<button className="menu_btn">  <FontAwesomeIcon icon={faEllipsis} /></button>} position="right top"
            nested
            closeOnDocumentClick
            mouseLeaveDelay={300}
            mouseEnterDelay={0}
            contentStyle={{ padding: '0', border: 'none' }}
            arrow={false}>

            <div className="menu-plalist">
              <button className="menu-item" onClick={(e) => e.preventDefault()}><CreatePlaylist
                idSongs={[id]} /></button>
              <button className="menu-item"><FontAwesomeIcon icon={faLink} /> Sao Chép Link</button>
              <button className="menu-item"><FontAwesomeIcon icon={faShare} /> Chia Sẽ</button>
            </div>
          </Popup>


        </div>

        <div className="r_element">
          <div className="r_element_item">
            <h1>Bài hát liên quan </h1>
            <Card playlist={usserplaylist} />
          </div>

          <div className="r_element_item">
            <h1>Cùng thể loại</h1>
            <Card playlist={usserplaylist} />
          </div>

        </div>


      </div>
    </section>
  )
}

export default Songpage;