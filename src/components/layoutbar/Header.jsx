import React, { useContext, useState, useEffect, useCallback } from 'react';
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

  const handleSearchData = useCallback((event) => {
    setSearchTerm(event.target.value);
    if (event.target.value.trim() === '') {
      setIsVisible(true);
    }
  }, []);

  // Assuming that 'debounce' does not require any state or props, we can define it outside the component
  // or just remove its useCallback wrapper if no dependency will ever be included.
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

  const letfetch = useCallback(async () => {
    if (searchTerm.trim()) {
      const data = await searchFetch(searchTerm);
      console.table("search debug", data);
      if (data && data.result) {
        setSearchResults(data.result);
        setIsVisible(false);
      }
    } else {
      setSearchResults([]);
      setIsVisible(true);
    }
    // Removed searchFetch from dependency array
  }, [searchTerm]);

  // Passing an inline function to debounce inside useCallback
  const debouncedFetchData = useCallback(() => {
    const fetchData = debounce(() => {
      letfetch();
    }, 500);
    fetchData();
    // letfetch is the only dependency since it's the only function from the component scope used inside the callback
  }, [letfetch]);

  useEffect(() => {
    if (searchTerm.trim()) {
      debouncedFetchData();
    } else {
      setSearchResults([]);
      setIsVisible(true);
    }
  }, [searchTerm, debouncedFetchData]);

  const handleBlur = () => {
    setTimeout(() => { setIsVisible(false); }, 200);
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
          <img src={data.thumb} alt={data.name} />
        </div>
        <NavLink to={`/songpage/${data.id}`} className="search_item_name">{data.name}</NavLink>
      </section>
    );
  };

  const Artistsitem = ({ data }) => {
    return (
      <section className='search_item_artists'>
        <div className="search_item_artists_img">
          <img src={data.avatar} alt={data.name} />
        </div>
        <NavLink to={`/artistspage/${data.id}`} className="search_item_name">{data.name}</NavLink>
      </section>
    );
  };

  return (
    <div className="Header">
      <div className="header_wrap">
        <div className="Navigation">
          {/* Potentially other navigation elements */}
        </div>
        <div className="header_search">
          <input
            type="text"
            id="input__search"
            className="input__search"
            placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát,.."
            required=""
            onChange={handleSearchData}
            onBlur={handleBlur}
          />
          <button className='search_btn' onClick={debouncedFetchData}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
          <section className={`result_box ${isVisible ? 'visible' : ''}`}>
            {renderData()}
          </section>
        </div>
        <div className="header_right">
          <label htmlFor="theme" className="theme">
            <span className="theme__toggle-wrap">
              <input
                id="theme"
                className="theme__toggle"
                type="checkbox"
                role="switch"
                name="theme"
                value="dark"
                checked={localStorage.getItem('theme') === 'dark'}
                onChange={toggleTheme}
              />

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
                  <img src={logo} alt="profile" />
                </button>
              }
              position="bottom right"
              nested
              closeOnDocumentClick
              mouseLeaveDelay={300}
              mouseEnterDelay={0}
              contentStyle={{ padding: "0", border: "none", width: "150px", top: '55px', left: '1334px' }}
              arrow={false}
            >
              <div className="menu">
                <NavLink to="/login" className="nav-link list_nav_item menu-item">
                  <FontAwesomeIcon icon={faUser} /> Hồ sơ của bạn
                </NavLink>
                <NavLink to="/profile" className="nav-link list_nav_item menu-item">
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