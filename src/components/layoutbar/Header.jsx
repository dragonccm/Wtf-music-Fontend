import React, { useContext, useState, useEffect } from 'react';
import ThemeContext from "../../lib/Context/ThemeContext";
import "../../css/Header.scss";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faRightFromBracket,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../img/logo3 (1).png";
import { searchFetch } from "../../services/searchService";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isVisible, setIsVisible] = useState(false); 
  const { toggleTheme } = useContext(ThemeContext);

  const handleSearchData = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value.trim() === '') {
      setIsVisible(true); 
    }
  };
  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };
  const debouncedFetchData = debounce(() => {
    letfetch();
  }, 500);

  useEffect(() => {
    if (searchTerm.trim()) {
      debouncedFetchData(); 
    } else {
      setSearchResults([]);
      setIsVisible(true);
    }
  }, [searchTerm]);
  const letfetch = () => {
    if (searchTerm.trim()) {
      const fetchData = async () => {
        const data = await searchFetch(searchTerm);
        console.table("search debug",data);
        if (data && data.result) {
          setSearchResults(data.result); 
          setIsVisible(false); 
        }
      };
      fetchData();
    } else {
      setSearchResults([]); 
      setIsVisible(true); 
    }
  };
  const handleBlur = () => {
    setTimeout(() => {setIsVisible(true);},[2000])
    
  };
  const renderData = () => {
    return searchResults.map((d) => {
      if (d.type === 1) { 
        return <Songitem key={d.id} data={d} />;
      } else if (d.type === 4) {
        return <Artistsitem key={d.id} data={d} />;
      }
      return null;
    });
  };

  const Songitem = ({ data }) => {
    return (
      <section className='search_item_song'>
        <div className="search_item_song_img">
          <img src={data.thumb} alt="d" />
        </div>
        <NavLink to={`/songpage/${data.id}`} exact className="search_item_name">{data.name}</NavLink>
      </section>
    );
  }

  const Artistsitem = ({ data }) => {
    return (
      <section className='search_item_artists'>
        <div className="search_item_artists_img">
          <img src={data.avatar} alt="d" />
        </div>
        <NavLink to={`/songpage/${data.id}`} exact className="search_item_name">{data.name}</NavLink>
      </section>
    );
  }


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
            onChange={handleSearchData || letfetch}
            onBlur={handleBlur}
          />
          <button className='search_btn' onClick={letfetch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <section className={`result_box ${isVisible ? 'visible' : ''}`}>
            {renderData()}
          </section>
        </div>
        <div className="header_right">
          <label for="theme" class="theme">
            <span class="theme__toggle-wrap">
              {localStorage.getItem('theme') && localStorage.getItem('theme') === 'dark' ?
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
