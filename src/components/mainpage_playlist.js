import React from "react";
import "../css/mainpage.css";
import Card from "./song_card";
import Detailed_list from "./Detailed_list";
import Songpage from "./Songpage";
import ListCard from "./ListCard";

const Mainpage_playlist = ({ playlists }) => {
  return (
    <div className="main_page">
      <>
        {/* <ListCard data={playlists}/> */}

        {/* <Detailed_list /> */}

        <Songpage/>
      </>
    </div>
  );
};
export default Mainpage_playlist;
