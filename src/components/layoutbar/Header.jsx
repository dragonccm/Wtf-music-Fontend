import instance from "../../setup/axios";
import React, { useContext, useState, useEffect, useCallback } from "react";
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
import { getLogout } from "../../services/registerService";
import { logouter } from "../../redux/slide/AuthenticationSlice";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Header = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const { toggleTheme } = useContext(ThemeContext);

    const dispatch = useDispatch();

    const isAuthentication = useSelector(
        (state) => state.Authentication.defaultUser
    );
    console.log(isAuthentication);

    const handleSearchData = useCallback((event) => {
        setSearchTerm(event.target.value);
        if (event.target.value.trim() === "") {
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
    setTimeout(() => { setIsVisible(true); }, 250);
  };
  const handleLogoutUser = async() => {
    let data = await getLogout();//clear cookies
    localStorage.removeItem('jwt') // clear local storage
    instance.defaults.headers.common['Authorization'] = undefined;
    dispatch(logouter()) //clear user in context
    if (data && data.EC === '0') {
      toast.success('Logout successful')
    } else {
      toast.error(data.EM)
    }
  }
  const renderData = () => {
    const groupedResults = searchResults.reduce((obj, result) => {
      if (obj[result.type]) {
        obj[result.type].push(result);
      } else {
        obj[result.type] = [result];
      }
      return obj;
    }, {});
  
    const sortedResults = Object.values(groupedResults).flat();
  
    return sortedResults.map((result) => {
      if (result.type === 1) {
        return <Songitem key={result.id} data={result} />;
      } else if (result.type === 4) {
        return <Artistsitem key={result.aliasName} data={result} />;
      } else if (result.type === 3) {
        return <Album key={result.id} data={result} />;
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
        <div className="">
        <NavLink to={`/songpage/${data.id}`} className="search_item_name">{data.name}</NavLink>

        </div>
      </section>
    );
  };
  const Album = ({ data }) => {
    return (
      <section className='search_item_song'>
        <div className="search_item_song_img">
          <img src={data.thumb} alt={data.name} />
        </div>
        <NavLink to={`/playlist/${data.id}`} className="search_item_name">{data.name}</NavLink>
      </section>
    );
  };

    const Artistsitem = ({ data }) => {
        return (
            <section className="search_item_artists">
                <div className="search_item_artists_img">
                    <img src={data.avatar} alt={data.name} />
                </div>
                <NavLink
                    to={`/artists/${data.aliasName}`}
                    className="search_item_name"
                >
                    {data.name}
                </NavLink>
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
                        onBlur={() => handleBlur()}
                    />
                    <button className="search_btn" onClick={debouncedFetchData}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <section
                        className={`result_box ${isVisible ? "visible" : ""}`}
                    >
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
                                checked={
                                    localStorage.getItem("theme") === "dark"
                                }
                                onChange={toggleTheme}
                            />

                            <span className="theme__icon">
                                <span className="theme__icon-part"></span>
                                <span className="theme__icon-part"></span>
                                <span className="theme__icon-part"></span>
                                <span className="theme__icon-part"></span>
                                <span className="theme__icon-part"></span>
                                <span className="theme__icon-part"></span>
                                <span className="theme__icon-part"></span>
                                <span className="theme__icon-part"></span>
                                <span className="theme__icon-part"></span>
                            </span>
                        </span>
                    </label>
                    <div className="h_avt_container">
                        {isAuthentication.isAuthenticated === true ? (
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
                                contentStyle={{
                                    padding: "0",
                                    border: "none",
                                    width: "150px",
                                    top: "55px",
                                    left: "1334px",
                                }}
                                arrow={false}
                            >
                                <div className="menu">
                                    <NavLink
                                        to="/profile/setting"
                                        className="nav-link list_nav_item menu-item"
                                    >
                                        <FontAwesomeIcon icon={faUser} /> Hồ sơ
                                        của bạn
                                    </NavLink>
                                    <NavLink
                                        onClick={() => handleLogoutUser()}
                                        className="nav-link list_nav_item menu-item"
                                    >
                                        <FontAwesomeIcon
                                            icon={faRightFromBracket}
                                        />{" "}
                                        Đăng xuất
                                    </NavLink>
                                </div>
                                <h1>{isAuthentication.account.username}</h1>
                            </Popup>
                        ) : (
                            <div className="group_authentication">
                                <div className="login_btn">
                                    <NavLink to="/login" className="">
                                        Đăng nhập
                                        <img src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.10.13/static/media/user-default.3ff115bb.png"></img>
                                    </NavLink>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
