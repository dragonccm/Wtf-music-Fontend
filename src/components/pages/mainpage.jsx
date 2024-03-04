import React from "react";
import "../../css/mainpage.scss";
import Playlistpage from "./Playlistpage";
import Songpage from "./Songpage";
import ListCard from "../card/ListCard";
import SliderBar from "../card/Slider_bar";
import Col3Layout from "../card/col_3_layout";
import Header from "../layoutbar/Header";
import Footer from "../layoutbar/Footer";
import Profile from "./profilepage";
import { Routes, Route } from "react-router-dom";

const Mainpage = ({ playlists }) => {
  const listSong = Array.from({ length: 9 }, (_, index) => ({
    img: 'https://media.baoquangninh.vn/upload/image/202307/medium/2100199_5fc049b4e26927b1f8e9720acdec299c.jpg',
    name: "Không phải gu",
    artist:'Hiếu Thứ Hai'
    
  }));
  document.title = "This is demo Component";
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
                <ListCard data={playlists} />
              </>
            } />
            <Route path="/listcard" element={<ListCard data={playlists} />} />
            <Route path="/playlistpage" element={<Playlistpage />} />
            <Route path="/songpage" element={<Songpage />} />
            <Route path="/profile*" element={<Profile />} />
          </Routes>
          <Footer />
        </section>
      </>
    </div>
  );
};
export default Mainpage;
