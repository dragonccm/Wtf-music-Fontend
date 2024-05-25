import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { ReactSVG } from "react-svg";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import icon_Home from "../../img/music-house-fill-svgrepo-com.svg";
import icon_Category from "../../img/category-admin.svg";
import icon_Playlist from "../../img/music-folder-svgrepo-com.svg";
import icon_Writer from "../../img/writer-admin.svg";
import icon_User from "../../img/user-admin.svg";
import icon_Singer from "../../img/singer-admin.svg";
import icon_Music from "../../img/play-music-admin.svg";
import logo from "../../img/logo3 (1).png";
import { useSelector } from "react-redux";
import "../../css/admin/NavigationBar.scss";
import "../../css/RightSidebar.scss";
import { useEffect, useState, useLocation } from "react";
import { getUserPl } from "../../redux/slide/getUserPlaylistSlice";
import { useDispatch } from "react-redux";

const NavigationBar = () => {
    const dispatch = useDispatch();
    const [userlist, setuserlist] = useState(null);
    const currData = useSelector((state) => state.Authentication);
    const usernames = currData.defaultUser.account.username;
    const userplaylist = useSelector((state) => state.getUserPl.userPlaylist);
    useEffect(() => {
        if (usernames) {
            dispatch(getUserPl({ userId: usernames }));
        }
    }, [dispatch, currData]);

    useEffect(() => {
        setuserlist(userplaylist);
    }, [userplaylist]);

    const isActive = (_, { pathname }) => {
        return pathname.startsWith("/profile");
    };
    return (
        <div className="h-100  navigationbar">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container style={{ padding: "0" }}>
                    <Navbar.Brand
                        as={NavLink}
                        to="/admin"
                        className="logo-name"
                    >
                        <img
                            src={logo}
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Collapse
                        id="basic-navbar-nav"
                        className="rs_bottom_bar"
                    >
                        <Nav className="me-auto list_nav">
                            <NavLink
                                to="/admin/dashboard"
                                className="nav-link list_nav_item"
                            >
                                <div className="icon_list_nav_item">
                                    <ReactSVG
                                        beforeInjection={(svg) => {
                                            svg.classList.add(
                                                "icon_list_nav_item_svg"
                                            );
                                        }}
                                        src={icon_Home}
                                    />
                                </div>
                                <span>Trang chủ</span>
                            </NavLink>
                            <NavLink
                                to="/admin/category"
                                className="nav-link list_nav_item"
                            >
                                <div className="icon_list_nav_item">
                                    <ReactSVG
                                        beforeInjection={(svg) => {
                                            svg.classList.add(
                                                "icon_list_nav_item_svg"
                                            );
                                        }}
                                        src={icon_Category}
                                    />
                                </div>
                                <span>Thể loại</span>
                            </NavLink>
                            <NavLink
                                to="/admin/playlist"
                                className="nav-link list_nav_item"
                            >
                                <div className="icon_list_nav_item">
                                    <ReactSVG
                                        beforeInjection={(svg) => {
                                            svg.classList.add(
                                                "icon_list_nav_item_svg"
                                            );
                                        }}
                                        src={icon_Playlist}
                                    />
                                </div>
                                <span>Danh sách phát</span>
                            </NavLink>
                            {/* <NavLink
                                to="/admin/writer"
                                className="nav-link list_nav_item"
                            >
                                <div className="icon_list_nav_item">
                                    <ReactSVG
                                        beforeInjection={(svg) => {
                                            svg.classList.add(
                                                "icon_list_nav_item_svg"
                                            );
                                        }}
                                        src={icon_Writer}
                                    />
                                </div>
                                <span>Nhạc sĩ</span>
                            </NavLink> */}
                            <NavLink
                                to="/admin/singer"
                                className="nav-link list_nav_item"
                            >
                                <div className="icon_list_nav_item">
                                    <ReactSVG
                                        beforeInjection={(svg) => {
                                            svg.classList.add(
                                                "icon_list_nav_item_svg"
                                            );
                                        }}
                                        src={icon_Singer}
                                    />
                                </div>
                                <span>Ca sĩ</span>
                            </NavLink>
                            <NavLink
                                to="/admin/song"
                                isActive={isActive}
                                className="nav-link list_nav_item"
                            >
                                <div className="icon_list_nav_item">
                                    <ReactSVG
                                        beforeInjection={(svg) => {
                                            svg.classList.add(
                                                "icon_list_nav_item_svg"
                                            );
                                        }}
                                        src={icon_Music}
                                    />
                                </div>
                                <span>Bài hát</span>
                            </NavLink>
                            <NavLink
                                to="/admin/user"
                                isActive={isActive}
                                className="nav-link list_nav_item"
                            >
                                <div className="icon_list_nav_item">
                                    <ReactSVG
                                        beforeInjection={(svg) => {
                                            svg.classList.add(
                                                "icon_list_nav_item_svg"
                                            );
                                        }}
                                        src={icon_User}
                                    />
                                </div>
                                <span>Người dùng</span>
                            </NavLink>
                        </Nav>
                        {/* <Nav>   
                  {user && user.isAuthenticated === true ? (
                    <>
                      <Nav.Item className="name-user nav-link ">
                        Hi, {user.account.username}!
                      </Nav.Item>
                      <NavDropdown title="Settings" id="basic-nav-dropdown">
                        <NavDropdown.Item><span >Change password</span></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item><span onClick={handleLogoutUser}>Log out</span></NavDropdown.Item>
                      </NavDropdown>
                    </>
                  ) : (
                    <>
                      <NavLink to="/login" className="nav-link">
                        Login
                      </NavLink>
                    </>
                  )}
                </Nav> */}
                    </Navbar.Collapse>
                    <div className="nav_bot_playlist">
                        {/* cái này có nav link  */}
                        {/* {userlist === null ? (
                            <h1>false</h1>
                        ) : (
                            Object.keys(userlist).map((key) => (
                                <NavLink to={'/playlist/' + userlist[key].playlistId} className="nav-link list_nav_item" key={key}>
                                    <div className="playlist_item">
                                        <div className="playlist_item_img">
                                            <img src={userlist[key].thumbnail} alt="f" />
                                        </div>
                                        <div className="playlist_item_content">
                                            <div className="content_name">
                                                <p>{userlist[key].playlistname}</p>
                                            </div>
                                            <div className="content_cate">Nghệ sĩ</div>
                                        </div>
                                    </div>
                                </NavLink>
                            ))
                        )} */}
                        {/* cái này thì del */}

                        {userlist === null ? (
                            <h1>false</h1>
                        ) : (
                            Object.keys(userlist).map((key, index) => (
                                <div
                                    className="playlist_item"
                                    key={"hahaha" + index}
                                >
                                    <div className="playlist_item_img">
                                        <img
                                            src={userlist[key].thumbnail}
                                            alt="f"
                                        />
                                    </div>
                                    <div className="playlist_item_content">
                                        <div className="content_name">
                                            <p>{userlist[key].playlistname}</p>
                                        </div>
                                        <div className="content_cate">
                                            Nghệ sĩ
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </Container>
            </Navbar>
            {/* <Mascot /> */}
        </div>
    );
};
export default NavigationBar;
