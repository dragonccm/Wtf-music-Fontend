import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTableList,
  faHistory,
  faGear,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Routes, Route } from "react-router-dom";
import ProfileMyMusic from "./profileMyMusic";
import ProfileHistory from "./profileHistory";
import ProfileMyPlaylist from "./profileMyPlaylist";
import BlockedSong from "./profileBlocked";
import ProfileSetting from "./Profile-setting/profile_setting";


import "../../../css/profile.scss";
// import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";



function Profile() {
  return (
    <div className="profile_container">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav" className="profile_bar">
            <Nav className="me-auto list_nav list_nav_pr">
              <NavLink
                to="mymusic"
                className="nav-link list_nav_item  list_nav_item_pr"
              >
                <div className="icon_list_nav_item">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <span>Yêu Thích</span>
              </NavLink>
              <NavLink
                to="blocked"
                className="nav-link list_nav_item  list_nav_item_pr"
              >
                <div className="icon_list_nav_item">
                  <FontAwesomeIcon icon={faHeart} />
                </div>
                <span>Chặn</span>
              </NavLink>
              <NavLink
                to="myplaylist"
                className="nav-link list_nav_item  list_nav_item_pr"
              >
                <div className="icon_list_nav_item">
                  <FontAwesomeIcon icon={faTableList} />
                </div>
                <span>PlayList</span>
              </NavLink>
              <NavLink
                to="history"
                className="nav-link list_nav_item  list_nav_item_pr"
              >
                <div className="icon_list_nav_item">
                  <FontAwesomeIcon icon={faHistory} />
                </div>
                <span>Lịch Sử</span>
              </NavLink>
              <NavLink
                to="setting"
                className="nav-link list_nav_item  list_nav_item_pr"
              >
                <div className="icon_list_nav_item">
                  <FontAwesomeIcon icon={faGear} />
                </div>
                <span>Cài Đặt</span>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="profile_content">
        <Routes>
        <Route
            path="/mymusic"
            element={
              <ProfileMyMusic type={'mymusic'} />
            }
          />
          <Route
            path="/myplaylist"
            element={
              <ProfileMyPlaylist />
            }
          />
          <Route
            path="/history"
            element={
              <ProfileHistory type={'history'} />
            }
          />
          <Route
            path="/blocked"
            element={
              <BlockedSong/>
            }
          />
          <Route
            path="/setting"
            element={
              <ProfileSetting />
            }
          />
         
          
          {/* <Route path="/" element={<Artist data={element} />} /> */}
        </Routes>

      </div>
    </div>
  );
}

export default Profile;
