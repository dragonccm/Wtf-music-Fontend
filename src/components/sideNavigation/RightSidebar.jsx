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
import { useLocation } from 'react-router-dom';
const RightSidebar = () => {
  
    const isPlaying = useSelector((state) => state.getSongData.isPlaying);

    const location = useLocation();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        // Cập nhật trạng thái `isActive` dựa trên `pathname`
        setIsActive(location.pathname.startsWith("/profile"));
    }, [location]);
    
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
                                to="/profile/mymusic"
                                className={
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
                </Container>
            </Navbar>
            {/* <Mascot /> */}
        </div>
    );
};
export default RightSidebar;
