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
import icon_Comment from "../../img/comment-admin.svg";
import icon_Singer from "../../img/singer-admin.svg";
import icon_Music from "../../img/play-music-admin.svg";
import icon_Statistical from "../../img/statistical-chart-svgrepo-com.svg";
import icon_Statistical1 from "../../img/stats-1371-svgrepo-com.svg";
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
                    <Navbar.Brand as={NavLink} to="/" className="logo-name">
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
                                to="/admin"
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
                                to="/admin/chart"
                                className="nav-link list_nav_item"
                            >
                                <div className="icon_list_nav_item">
                                    <ReactSVG
                                        beforeInjection={(svg) => {
                                            svg.classList.add(
                                                "icon_list_nav_item_svg"
                                            );
                                        }}
                                        src={icon_Statistical1}
                                    />
                                </div>
                                <span>Thống kê dữ liệu</span>
                            </NavLink>
                            
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
                                className={({ isActive }) =>
                                    isActive ? "active nav-link list_nav_item" : "nav-link list_nav_item"
                                  }
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
                            <NavLink
                                to="/admin/user"
                                className={({ isActive }) =>
                                    isActive ? "active nav-link list_nav_item" : "nav-link list_nav_item"
                                  }
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
                            <NavLink
                                to="/admin/comment"
                                className={({ isActive }) =>
                                    isActive ? "active nav-link list_nav_item" : "nav-link list_nav_item"
                                  }
                            >
                                <div className="icon_list_nav_item">
                                    <ReactSVG
                                        beforeInjection={(svg) => {
                                            svg.classList.add(
                                                "icon_list_nav_item_svg"
                                            );
                                        }}
                                        src={icon_Comment}
                                    />
                                </div>
                                <span>Bình luận</span>
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
                                to="/admin/adminupload"
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
                                <span>adminupload</span>
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
                </Container>
            </Navbar>
            {/* <Mascot /> */}
        </div>
    );
};
export default NavigationBar;
