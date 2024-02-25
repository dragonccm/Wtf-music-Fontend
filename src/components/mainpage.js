import React from "react";
import "../css/mainpage.css";
import Card from "./song_card";
import Playlistpage from "./Playlistpage";
import Songpage from "./Songpage";
import ListCard from "./ListCard";
import Header from "./Header";
import Footer from "./Footer";



const Mainpage = ({ playlists }) => {
  return (
    <div className="main_page">
      <>
        <Header />
          <section className="main_page_container">
            <ListCard data={playlists}/>

            {/* <Playlistpage /> */}

            {/* <Songpage /> */}
            <Footer />
          </section>
      </>
    </div>
  );
};
export default Mainpage;
