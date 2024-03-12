import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getSongData } from "../../services/SongService";
import "../../css/Songpage.scss";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


import Recommended from '../card/Recommended'
const Songpage = () => {
    const [audioList, setAudioList] = useState([]);
    
    const { id } = useParams();
    
    
    useEffect(() => {
        const Recommendeds = Array.from({ length: 100 }, (_, index) => ({
          id: index,
          name: `Playlist ${index + 1}`,
          image: "https://th.bing.com/th/id/OIP.XusXZvUJb2jQFc8QvjBnIwHaL2?rs=1&pid=ImgDetMain",
          category: "playlist",
          songartist: "jisoo",
          songname: "Flower",
          addedday: "11 thg 11, 2021",
          liked_state: false,
          songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
          total: "3:00",
          root_album: "Solo"
        }));
      
        const playlistsData = [
          {
            id: 3,
            name: `Playlist ${3 + 1}`,
            image: "https://th.bing.com/th/id/OIP.2Taaw3tCXQRTYFNqPYXOdgHaHa?rs=1&pid=ImgDetMain",
            artists_list: ["Jisso"],
          },
          {
            id: 3,
            name: `Playlist ${3 + 1}`,
            image: "https://i.redd.it/3sx2ys0arsv21.jpg",
            artists_list: ["Jisso"],
          },
          {
            id: 3,
            name: `Playlist ${3 + 1}`,
            image: "https://www.allkpop.com/upload/2021/01/content/070658/1610020733-20210107-rose.jpg",
            artists_list: ["Jisso"],
          },
          {
            id: 3,
            name: `Playlist ${3 + 1}`,
            image: "https://i2.wp.com/blackpinkupdate.com/wp-content/uploads/2019/05/1-BLACKPINK-Jennie-Instagram-Update-25-May-2019.jpg?fit=1080%2C1080&ssl=1",
            artists_list: ["Jisso"],
          },
          {
            id: 3,
            name: `Playlist ${3 + 1}`,
            image: "https://i.pinimg.com/736x/a7/a6/9d/a7a69d9337d6cd2b8b84290a7b9145ad.jpg",
            artists_list: ["Jisso"],
          },
        ]
      
        const element = [
          {
            title: '100 Việt',
            list: playlistsData,
          },
          {
            title: '100 Hàn',
            list: playlistsData,
          },
          {
            title: '100 POP',
            list: playlistsData,
          },
          {
            title: '100 Us-Uk',
            list: playlistsData,
          },
        ];
        const fetchData = async () => {
          const data = await getSongData(`${id}`);
          if (data) {
            const newAudio = {
              avt: data.img,
              songname: data.songname,
              Recommended: Recommendeds,
              element: element,
              ar: data.artistsNames,
              small: data.img,
            };
            setAudioList(newAudio);
          }
        };
        fetchData();
      }, [id]);
      console.table(audioList);
    const hasRecommendedData = audioList && Array.isArray(audioList.Recommended);



    return (
        <section className="songpage_main">
            <div className="songpage_list_head">

                <div className="songpage_left_head">
                    <img src={audioList.avt} alt="f" />
                </div>

                <div className="songpage_mid_head">
                    <p>PlayList</p>
                    <h1 className="songpage_list_name">{audioList.songname}</h1>
                    <p className="songpage_info">
                        <div className="songpage_small_avt">
                            <img src={audioList.small} alt="f" />
                        </div>
                        <div className="songpage_user_name">{audioList.ar}</div>
                        .
                        <div className="songpage_total_song">41 bài hát,</div>
                        <div className="songpage_total_time">2 giờ 15 phút</div>
                    </p>
                </div>
            </div>


            <div className="song_body">
                <div className="song_control">
                    <button className="play_random">
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

                {hasRecommendedData && (
                    <>
                        <Recommended datas={audioList.Recommended} type={"Recommended"} describe={'Based on this song'} maxItemsToShow="5" />
                        <Recommended datas={audioList.Recommended} type={"Popular"} describe={'Rap Việt'} maxItemsToShow="5" />
                    </>
                )}
            </div>
        </section>
    )
}

export default Songpage;