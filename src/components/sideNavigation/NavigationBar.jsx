import React from "react";
import instance from "../../setup/axios";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { ReactSVG } from "react-svg";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import icon_Home from "../../img/music-house-fill-svgrepo-com.svg";
import icon_Category from "../../img/category-admin.svg";
import icon_Playlist from "../../img/music-folder-svgrepo-com.svg";
import icon_User from "../../img/user-admin.svg";
import icon_Comment from "../../img/comment-admin.svg";
import icon_Singer from "../../img/singer-admin.svg";
import icon_Music from "../../img/play-music-admin.svg";
import icon_Statistical1 from "../../img/stats-1371-svgrepo-com.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../img/logo3 (1).png";
import "../../css/admin/NavigationBar.scss";
import "../../css/RightSidebar.scss";
import { useSelector, useDispatch } from "react-redux";
import { getLogout } from "../../services/registerService";
import { logouter } from "../../redux/slide/AuthenticationSlice";
import { toast } from "react-toastify";

const NavigationBar = () => {
    const user = useSelector(
        (state) => state.Authentication.defaultUser
    );
    const dispatch = useDispatch();

    const handleLogoutUser = async () => {
        let data = await getLogout(); //clear cookies
        localStorage.removeItem("jwt"); // clear local storage
        instance.defaults.headers.common["Authorization"] = undefined;
        dispatch(logouter()); //clear user in context
        if (data && data.EC === "0") {
            // toast.success("Logout successful");
        } else {
            toast.error(data.EM);
        }
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
                        <span>What Musics</span>
                    </Navbar.Brand>
                    <hr />
                    <Navbar
                        id="basic-navbar-nav"
                        className="rs_bottom_bar"
                    >
                        <Nav className="me-auto list_nav">
                            <NavLink
                                end
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
                        </Nav>
                        <hr />
                        <Nav>
                            {user && user.isAuthenticated === true ? (
                                <>
                                    <button
                                        onClick={() => handleLogoutUser()}
                                        className="nav-link list_nav_item menu-item"
                                    >
                                        <FontAwesomeIcon
                                            icon={faRightFromBracket}
                                        />
                                        Đăng xuất
                                    </button>
                                </>
                            ) : (
                                <>
                                    <NavLink to="/login" className="nav-link">
                                        Login
                                    </NavLink>
                                </>
                            )}
                        </Nav>
                    </Navbar>
                </Container>
            </Navbar>
            {/* <Mascot /> */}
        </div>
    );
};
export default NavigationBar;
