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
import Mascot from "./mascot_animation";
import { useSelector } from "react-redux";
import "../../css/RightSidebar.scss";

const RightSidebar = () => {
    const isPlaying = useSelector((state) => state.getSongData.isPlaying);
    return (
        <div
            className="rightsidebar"
            style={{ height: isPlaying ? "calc(100vh - 92px)" : "100vh" }}
        >
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/" className="logo-name">
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
                            <NavLink to="/" className="nav-link list_nav_item">
                                <div className="icon_list_nav_item">
                                    <ReactSVG
                                        beforeInjection={(svg) => {
                                            svg.classList.add(
                                                "icon_list_nav_item_svg"
                                            );
                                        }}
                                        src={iconHome}
                                    />
                                </div>
                                <span>Trang chủ</span>
                            </NavLink>
                            <NavLink
                                to="/rating"
                                className="nav-link list_nav_item"
                            >
                                <div className="icon_list_nav_item">
                                    <ReactSVG
                                        beforeInjection={(svg) => {
                                            svg.classList.add(
                                                "icon_list_nav_item_svg"
                                            );
                                        }}
                                        src={icon_Rating}
                                    />
                                </div>
                                <span>Bảng xếp hạng</span>
                            </NavLink>
                            <NavLink
                                to="/hub"
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
                                <span>Chủ đề & thể loại</span>
                            </NavLink>
                            <NavLink
                                to="/top100"
                                className="nav-link list_nav_item"
                            >
                                <div className="icon_list_nav_item">
                                    <ReactSVG
                                        beforeInjection={(svg) => {
                                            svg.classList.add(
                                                "icon_list_nav_item_svg"
                                            );
                                        }}
                                        src={icon_top}
                                    />
                                </div>
                                <span>Top 100</span>
                            </NavLink>
                            <NavLink
                                to="/profile/artist"
                                className="nav-link list_nav_item"
                            >
                                <div className="icon_list_nav_item">
                                    <ReactSVG
                                        beforeInjection={(svg) => {
                                            svg.classList.add(
                                                "icon_list_nav_item_svg"
                                            );
                                        }}
                                        src={icon_libary}
                                    />
                                </div>
                                <span>Thư viện</span>
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
                        <div className="playlist_item">
                            <div className="playlist_item_img">
                                <img
                                    src="https://media.baoquangninh.vn/upload/image/202307/medium/2100199_5fc049b4e26927b1f8e9720acdec299c.jpg"
                                    alt="f"
                                />
                            </div>
                            <div className="playlist_item_content">
                                <div className="content_name">
                                    <p>Rose</p>
                                </div>
                                <div className="content_cate">Nghệ sĩ</div>
                            </div>
                        </div>
                        <div className="playlist_item">
                            <div className="playlist_item_img">
                                <img
                                    src="https://media.baoquangninh.vn/upload/image/202307/medium/2100199_5fc049b4e26927b1f8e9720acdec299c.jpg"
                                    alt="f"
                                />
                            </div>
                            <div className="playlist_item_content">
                                <div className="content_name">
                                    <p>Rose</p>
                                </div>
                                <div className="content_cate">Nghệ sĩ</div>
                            </div>
                        </div>
                        <div className="playlist_item">
                            <div className="playlist_item_img">
                                <img
                                    src="https://media.baoquangninh.vn/upload/image/202307/medium/2100199_5fc049b4e26927b1f8e9720acdec299c.jpg"
                                    alt="f"
                                />
                            </div>
                            <div className="playlist_item_content">
                                <div className="content_name">
                                    <p>Rose</p>
                                </div>
                                <div className="content_cate">Nghệ sĩ</div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Navbar>
            {/* <Mascot /> */}
        </div>
    );
};
export default RightSidebar;
