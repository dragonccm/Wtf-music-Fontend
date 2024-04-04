import "../../css/Songpage.scss";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
// import { fetchPlayList } from '../../redux/slide/playlistSlice'
import { fetchPageSong } from '../../redux/slide/songPageSlice'
import { useSelector, useDispatch } from "react-redux";
import { fetchSongPlaying } from "../../redux/slide/songPlayingSlice";
// import ListCard from "../card/ListCard";

import Card from '../card/song_card'
const Songpage = () => {


  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPageSong(id)).then(() => setLoading(false));
  }, [dispatch, id]);

  const currSongData = useSelector((state) => state.songPage.pageData);
  console.log(currSongData)
  if (loading) {
    return <div>Loading...</div>;
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
          <p>PlayList</p>
          <h1 className="songpage_list_name">{currSongData.songname}</h1>
          <p className="songpage_info">
            <div className="songpage_small_avt">
              <img src={currSongData.img} alt="f" />
            </div>
            <div className="songpage_user_name">{currSongData.artistsNames}</div>
            .
            <div className="songpage_total_song">41 bài hát,</div>
            <div className="songpage_total_time">2 giờ 15 phút</div>
          </p>
        </div>
      </div>


      <div className="song_body">
        <div className="song_control">
          <button className="play_random" onClick={(e) => handlePlaying(e, id)}>
            <FontAwesomeIcon icon={faCirclePlay} />
          </button>
          <button className="like_btn">
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <Popup trigger={<button className="menu_btn">  <FontAwesomeIcon icon={faEllipsis} /></button>} position="left top"
            nested
            closeOnDocumentClick
            mouseLeaveDelay={300}
            mouseEnterDelay={0}
            contentStyle={{ padding: '0', border: 'none' }}
            arrow={false}>
            <div className="menu">
              <button className="menu-item"> item 1</button>
              <button className="menu-item"> item 2</button>
              <button className="menu-item"> item 3</button>
            </div>
          </Popup>


        </div>

        <div className="r_element">
          <div className="r_element_item">
            <h1>bài hát liên quan </h1>
            <Card playlist={usserplaylist} />
          </div>

          <div className="r_element_item">
            <h1>cùng thể loại</h1>
            <Card playlist={usserplaylist} />
          </div>

        </div>


      </div>
    </section>
  )
}

export default Songpage;