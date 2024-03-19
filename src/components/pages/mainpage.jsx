import React, { useEffect, useContext } from "react";

import "../../css/mainpage.scss";
// page
import Playlistpage from "./Playlistpage";
import Songpage from "./Songpage";
import Singerpage from "./Singerpage";
import Top100 from "./top100";
import Profile from "./profilepage";
import HomeRating from "../card/Home_ rating";
import HubPage from "./hubPage";

// layout
import Header from "../layoutbar/Header";
import SliderBar from "../card/Slider_bar";
import Footer from "../layoutbar/Footer";
// component
import Col3Layout from "../card/col_3_layout";
import ListCard from "../card/ListCard";
import Loginform from "../pages/loginpage";
import Rating from "./Rating";
import Card from "../card/song_card";
// react fucnc
import ThemeContext from "../../lib/Context/ThemeContext";
import HomeAdmin from "./admin/home";

import { Routes, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import React, { useEffect, useContext } from "react";
import { useLocation } from 'react-router-dom';

const Mainpage = ({ playlists }) => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  // song page
  const playlistsData = [
    {
      id: 1,
      name: `Playlist ${3 + 1}`,
      image:
        "https://th.bing.com/th/id/OIP.2Taaw3tCXQRTYFNqPYXOdgHaHa?rs=1&pid=ImgDetMain",
      artists_list: ["Jisso"],
    },
    {
      id: 3,
      name: `Playlist ${3 + 1}`,
      image: "https://i.redd.it/3sx2ys0arsv21.jpg",
      artists_list: ["Jisso"],
    },
    {
      id: 4,
      name: `Playlist ${3 + 1}`,
      image:
        "https://www.allkpop.com/upload/2021/01/content/070658/1610020733-20210107-rose.jpg",
      artists_list: ["Jisso"],
    },
    {
      id: 5,
      name: `Playlist ${3 + 1}`,
      image:
        "https://i2.wp.com/blackpinkupdate.com/wp-content/uploads/2019/05/1-BLACKPINK-Jennie-Instagram-Update-25-May-2019.jpg?fit=1080%2C1080&ssl=1",
      artists_list: ["Jisso"],
    },
    {
      id: 6,
      name: `Playlist ${3 + 1}`,
      image:
        "https://i.pinimg.com/736x/a7/a6/9d/a7a69d9337d6cd2b8b84290a7b9145ad.jpg",
      artists_list: ["Jisso"],
    },
  ];

  // song page

  const listSong = Array.from({ length: 9 }, (_, index) => ({
    img: "https://media.baoquangninh.vn/upload/image/202307/medium/2100199_5fc049b4e26927b1f8e9720acdec299c.jpg",
    name: "Không phải gu",
    artist: "Hiếu Thứ Hai",
  }));

  document.title = "What The Fuck Music Never die";
  return (
    <div className="main_page">
      <>
        <Header />
        <section className={`main_page_container ${theme}`}>
          <Routes>
            <Route
              path="/*"
              element={
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
                    <div className="radio-inputs">
                      <label>
                        <input
                          className="radio-input "
                          type="radio"
                          name="engine"
                        />
                        <span className="radio-tile ">
                          <span className="radio-icon">Tất cả</span>
                        </span>
                      </label>

                      <label>
                        <input
                          className="radio-input "
                          type="radio"
                          name="engine"
                        />
                        <span className="radio-tile ">
                          <span className="radio-icon">Việt Nam</span>
                        </span>
                      </label>

                      <label>
                        <input
                          className="radio-input "
                          type="radio"
                          name="engine"
                        />
                        <span className="radio-tile ">
                          <span className="radio-icon">Quốc tế</span>
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
              }
            />
            <Route path="/listcard" element={<ListCard data={playlists} />} />
            <Route path="/playlistpage" element={<Playlistpage />} />
            <Route path="/songpage/:id" element={<Songpage />} />
            <Route path="/artists" element={<Singerpage />} />
            <Route path="/rating" element={<Rating />} />
            <Route path="/profile*" element={<Profile />} />
            <Route path="/top100" element={<Top100 data={playlistsData} />} />
            <Route path="/playlist" element={<Playlistpage />} />
            <Route path="/login" element={<Loginform />} />
            <Route path="/admin" element={<HomeAdmin />} />
          </Routes>
        </section>

        <Footer />
      </>
    </div>
  );
};
export default Mainpage;
