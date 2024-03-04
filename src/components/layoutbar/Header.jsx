import React from "react";
import "../../css/Header.scss";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faChevronRight,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../img/logo3 (1).png";

const Header = () => {
  return (
    <div className="Header">
      <div className="header_wrap">
        <div className="Navigation">
          <button className="Navigation_btn previous_page">
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button className="Navigation_btn next_page">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        <div className="header_search">
          <input
            type="email"
            id="input__search"
            class="input__search"
            placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát,.."
            required=""
          />
        </div>
        <div className="header_right">
          <label for="theme" class="theme">
            <span class="theme__toggle-wrap">
              <input
                id="theme"
                class="theme__toggle"
                type="checkbox"
                role="switch"
                name="theme"
                value="dark"
              />
              <span class="theme__fill"></span>
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
                          contentStyle={{ padding: "0", border: "none", width: "150px", top: '55px', left:'1334px' }}
              arrow={false}>
              <div className="menu">
                <a href="/login" className="menu-item">
                  <FontAwesomeIcon icon={faUser} /> Hồ sơ của bạn
                </a>
                <a href="/profile/info" className="menu-item">
                  <FontAwesomeIcon icon={faRightFromBracket} /> Đăng xuất
                </a>
              </div>
            </Popup>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
