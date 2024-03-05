import React, { useEffect, useState } from "react";
import { getSongData } from "../../controller/firstfetch";
import "../../css/mainpage.scss";
import Playlistpage from "./Playlistpage";
import Songpage from "./Songpage";
import ListCard from "../card/ListCard";
import SliderBar from "../card/Slider_bar";
import Col3Layout from "../card/col_3_layout";
import HomeRating from "../card/Home_ rating";
import Header from "../layoutbar/Header";
import Footer from "../layoutbar/Footer";
import Profile from "./profilepage";
import Rating from "./Rating";
import Card from "../card/song_card";

import { Routes, Route } from "react-router-dom";

const Mainpage = ({ playlists }) => {
  const [audioList, setAudioList] = useState([]);

  // song page
  const Recommendeds = Array.from({ length: 5 }, (_, index) => ({
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

  const playlistsData = Array.from({ length: 5 }, (_, index) => ({
    id: index,
    name: `Playlist ${index + 1}`,
    image: "https://th.bing.com/th/id/OIP.XusXZvUJb2jQFc8QvjBnIwHaL2?rs=1&pid=ImgDetMain",
    artists_list: ["Jisso", "Jisso", "Jisso", "Jisso", "Jisso"],
  }));

  const element = [
    {
      title: 'POPULAR',
      list: playlistsData,
    },
    {
      title: 'chill day',
      list: playlistsData,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSongData();
      if (data) {
        const newAudio = {
          avt: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/f/3/a/f/f3af71df0b7a68ec44955faa5dc7d0ce.jpg",
          songname: data.songname,
          Recommended: Recommendeds,
          element: element,
          ar:data.artistsNames,
          small:data.img,
        };
        setAudioList(newAudio);
      }
    };
    fetchData();
  }, []);
  console.log("cái gì ", audioList);
  const songpagedata = audioList
  // song page



  const listSong = Array.from({ length: 9 }, (_, index) => ({
    img: 'https://media.baoquangninh.vn/upload/image/202307/medium/2100199_5fc049b4e26927b1f8e9720acdec299c.jpg',
    name: "Không phải gu",
    artist: 'Hiếu Thứ Hai'
  }));
  document.title = "What The Fuck Music Never die";
  return (
    <div className="main_page">
      <>
        <Header />
        <section className="main_page_container">
          <Routes>
            <Route path="/*" element={
              <>
                <SliderBar />
                <div className="for_you">
                  <h1>Gợi Ý Dành Riêng Cho Bạn</h1>
                  <Col3Layout data={listSong} />
                </div>
                <div className="list_card">
                  <h1>Có thể bạn muốn nghe</h1>
                  <Card playlist={playlistsData} />
                </div>
                <div className="for_you">
                  <h1>Gợi Ý Dành Riêng Cho Bạn</h1>
                  <div class="radio-inputs">
                    <label>
                      <input class="radio-input " type="radio" name="engine" />
                      <span class="radio-tile ">
                        <span class="radio-icon">
                          Tất cả
                        </span>
                      </span>
                    </label>

                    <label>
                      <input class="radio-input " type="radio" name="engine" />
                      <span class="radio-tile ">
                        <span class="radio-icon">
                          Việt Nam
                        </span>
                      </span>
                    </label>

                    <label>
                      <input class="radio-input " type="radio" name="engine" />
                      <span class="radio-tile ">
                        <span class="radio-icon">
                          Quốc tế
                        </span>
                      </span>
                    </label>
                  </div>

                  <Col3Layout data={listSong} />
                </div>
                <div className="list_card">
                  <h1>Nhạc hot gây bão</h1>
                  <Card playlist={playlistsData} />
                </div>
                <div className="list_card">
                  <h1>Remix hay hết sảy</h1>
                  <Card playlist={playlistsData} />
                </div>
                <div className="list_card">
                  <h1>Chill</h1>
                  <Card playlist={playlistsData} />
                </div>
                <div className="list_card">
                  <h1>Nhạc buồn tâm trạng</h1>
                  <Card playlist={playlistsData} />
                </div>
                <div className="ratings">
                  <h1>BXH nhạc mới</h1>
                  <HomeRating />
                  </div>
                <div className="list_card">
                  <h1>Top 100</h1>
                  <Card playlist={playlistsData} />
                </div>
                <div className="list_card">
                  <h1>Album hot</h1>
                  <Card playlist={playlistsData} />
                </div>
              </>
            } />
            <Route path="/listcard" element={<ListCard data={playlists} />} />
            <Route path="/playlistpage" element={<Playlistpage />} />
            <Route path="/songpage" element={<Songpage data={songpagedata} />} />
            <Route path="/rating" element={<Rating />} />
            <Route path="/profile*" element={<Profile />} />

          </Routes>
        </section>
          <Footer />
      </>
    </div>
  );
};
export default Mainpage;
