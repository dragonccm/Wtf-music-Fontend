import React from "react";
import "../../css/mainpage.scss";
import Playlistpage from "./Playlistpage";
import Songpage from "./Songpage";
import ListCard from "../card/ListCard";
import Header from "../layoutbar/Header";
import Footer from "../layoutbar/Footer";
import Profile from "./profilepage";
import {Routes, Route } from 'react-router-dom';

const Mainpage = ({ playlists }) => {
  return (
    <div className="main_page">
      <>
        <Header />
        <section className="main_page_container">
          <Routes>
            <Route path='/*' element={<ListCard data={playlists}/>} />
            <Route path='/listcard' element={<ListCard data={playlists}/>} />
            <Route path='/playlistpage' element={<Playlistpage />} />
            <Route path='/songpage' element={<Songpage />} />
            <Route path='/profile*' element={<Profile />} />
          </Routes>
          <Footer />
        </section>
      </>
    </div>
  );
};
export default Mainpage;
