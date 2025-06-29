import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { ReactSVG } from "react-svg";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import iconHome from "../../img/music-house-fill-svgrepo-com.svg";
import icon_Rating from "../../img/music-player-audio-bars-svgrepo-com.svg";
import icon_Category from "../../img/music-library-svgrepo-com.svg";
import icon_top from "../../img/music-upload-svgrepo-com.svg";
import icon_libary from "../../img/music-folder-svgrepo-com.svg";
import logo from "../../img/logo3 (1).png";
import { useSelector } from "react-redux";
import "../../css/RightSidebar.scss";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserPlaylist } from "../../redux/slide/InforUserSlice";
import { userPLayList } from "../../controller/MyPlaylist";
const RightSidebar = () => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.getSongData.isPlaying);
  // const idUser = useSelector((state) => state.inforUser.userInfor.DT);

  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(location.pathname.startsWith("/profile"));
  }, [location]);

  useEffect(() => {
    const fetchPlaylist = async () => {
      const response = await userPLayList();
      if (response.EC === "0") {
        dispatch(setUserPlaylist(response.DT));
      }
    };
    fetchPlaylist();
  }, [dispatch]);
  const userPlaylist = useSelector((state) => {
    return state.inforUser.userPlaylist;
  });
console.log("userPlaylist", userPlaylist);

  return (
    <div
      className="rightsidebar"
      style={{ height: isPlaying ? "calc(100vh - 92px)" : "100vh" }}
    >
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container style={{ padding: "0" }}>
          <Navbar.Brand as={NavLink} to="/" className="logo-name">
            <img
              src={logo}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav" className="rs_bottom_bar">
            <Nav className="me-auto list_nav">
              <NavLink to="/" className="nav-link list_nav_item">
                <div className="icon_list_nav_item">
                  <ReactSVG
                    beforeInjection={(svg) => {
                      svg.classList.add("icon_list_nav_item_svg");
                    }}
                    src={iconHome}
                  />
                </div>
                <span>Trang chủ</span>
              </NavLink>
              <NavLink to="/rating" className="nav-link list_nav_item">
                <div className="icon_list_nav_item">
                  <ReactSVG
                    beforeInjection={(svg) => {
                      svg.classList.add("icon_list_nav_item_svg");
                    }}
                    src={icon_Rating}
                  />
                </div>
                <span>Bảng xếp hạng</span>
              </NavLink>
              <NavLink to="/hub" className="nav-link list_nav_item">
                <div className="icon_list_nav_item">
                  <ReactSVG
                    beforeInjection={(svg) => {
                      svg.classList.add("icon_list_nav_item_svg");
                    }}
                    src={icon_Category}
                  />
                </div>
                <span>Chủ đề & thể loại</span>
              </NavLink>
              <NavLink to="/top100" className="nav-link list_nav_item">
                <div className="icon_list_nav_item">
                  <ReactSVG
                    beforeInjection={(svg) => {
                      svg.classList.add("icon_list_nav_item_svg");
                    }}
                    src={icon_top}
                  />
                </div>
                <span>Top 100</span>
              </NavLink>
              <NavLink
                to="/profile/mymusic"
                className={
                  isActive
                    ? "active nav-link list_nav_item"
                    : "nav-link list_nav_item"
                }
              >
                <div className="icon_list_nav_item">
                  <ReactSVG
                    beforeInjection={(svg) => {
                      svg.classList.add("icon_list_nav_item_svg");
                    }}
                    src={icon_libary}
                  />
                </div>
                <span>Thư viện</span>
              </NavLink>
            </Nav>

            {userPlaylist && Array.isArray(userPlaylist) && userPLayList.length >0 &&(
              <Nav className="me-auto list_nav">
                {
                  userPlaylist.map((item, index) => {
                    return (
                      item && (
                        <NavLink
                          to={`/playlist/${item.playlistId}`}
                          className="nav-link list_nav_item"
                          key={index}
                        >
                          <div className="icon_list_nav_item">
                            {item.thumbnail ? (
                              <img src={item.thumbnail} alt="playlist" />
                            ) : (
                              <img
                                src="https://i.pinimg.com/564x/7b/7b/7b/7b7b7b7b7b7b7b7b7b7b7b7b7b7b7b.jpg"
                                alt="playlist"
                              />
                            )}
                          </div>
                          <span>{item.playlistname}</span>
                        </NavLink>
                      )
                    );
                  })}
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Mascot /> */}
    </div>
  );
};
export default RightSidebar;
