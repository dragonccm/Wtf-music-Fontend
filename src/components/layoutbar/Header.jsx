import React, { useContext,useState,useEffect } from 'react';
import ThemeContext from "../../lib/Context/ThemeContext";
import SongDataContext from '../../lib/Context/SongContext';
import "../../css/Header.scss";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../img/logo3 (1).png";
import { getSongData } from "../../services/SongService";
const Header = () => {
  const [currentData,setdata] = useState("");
  const { toggleTheme } = useContext(ThemeContext);
  const {setSongData} = useContext(SongDataContext)

  const handleSearchData = (event) => {
    setdata(event.target.value);
  }
  useEffect(() => {
    console.table("sdsdsdsds",currentData)
    if (currentData) {
      const fetchData = async () => {
        const data = await getSongData(currentData);
        if (data) {
          const newAudio = {
            name: data.songname,
            singer: data.artistsNames,
            cover: data.img,
            musicSrc: data.song,
            lyric: data.lyricsString,
          };
          setSongData(newAudio)
        }
      }
      fetchData();
    }
  },[currentData])


  return (
    <div className="Header">
      <div className="header_wrap">
        <div className="Navigation">

        </div>
        <div className="header_search">
          <input
            type="text"
            id="input__search"
            class="input__search"
            placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát,.."
            required=""
            onChange={handleSearchData}
          />
        </div>
        <div className="header_right">
          <label for="theme" class="theme">
            <span class="theme__toggle-wrap">
              {localStorage.getItem('theme') && localStorage.getItem('theme') == 'dark' ?
                <input
                  id="theme"
                  class="theme__toggle"
                  type="checkbox"
                  role="switch"
                  name="theme"
                  value="dark"
                  checked
                  onClick={toggleTheme}
                />
                :
                <input
                  id="theme"
                  class="theme__toggle"
                  type="checkbox"
                  role="switch"
                  name="theme"
                  value="dark"
                  onClick={toggleTheme}
                />
              }


              <span class="theme__icon">
                <span class="theme__icon-part"></span>
                <span class="theme__icon-part"></span>
                <span class="theme__icon-part"></span>
                <span class="theme__icon-part"></span>
                <span class="theme__icon-part"></span>
                <span class="theme__icon-part"></span>
                <span class="theme__icon-part"></span>
                <span class="theme__icon-part"></span>
                <span class="theme__icon-part"></span>
              </span>
            </span>
          </label>
          <div className="h_avt_container">
            <Popup
              trigger={
                <button className="avt_page">
                  <img src={logo} alt="f" />
                </button>
              }
              position="bottom right"
              nested
              closeOnDocumentClick
              mouseLeaveDelay={300}
              mouseEnterDelay={0}
              contentStyle={{ padding: "0", border: "none", width: "150px", top: '55px', left: '1334px' }}
              arrow={false}>
              <div className="menu">

                <NavLink to="/login" exact className="nav-link list_nav_item menu-item">
                  <FontAwesomeIcon icon={faUser} /> Hồ sơ của bạn
                </NavLink>
                <NavLink to="/profile" exact className="nav-link list_nav_item menu-item">
                  <FontAwesomeIcon icon={faRightFromBracket} /> Đăng xuất
                </NavLink>
              </div>
            </Popup>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
