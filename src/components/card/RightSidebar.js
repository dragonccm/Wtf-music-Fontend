import React from "react"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useLocation,useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faRankingStar,faIcons,faStar } from '@fortawesome/free-solid-svg-icons'
import logo from '../../img/logo3 (1).png'

import "../../css/RightSidebar.css"
const RightSidebar = () => {
    
    return (
        <div className="rightsidebar">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                <Navbar.Brand href="#home" className="logo-name">
                <img
                  src={logo}
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <Navbar.Collapse id="basic-navbar-nav" className="rs_bottom_bar">
                <Nav className="me-auto list_nav">
                  <NavLink to="/" exact className="nav-link list_nav_item">
                  <div className="icon_list_nav_item">
                        <FontAwesomeIcon icon={faHouse} />
                        </div>
                        <span>Trang chủ</span>
                  </NavLink>
                  <NavLink to="/users" className="nav-link list_nav_item">
                  <div className="icon_list_nav_item">
                        <FontAwesomeIcon icon={faRankingStar} />
                        </div>
                        <span>Bảng xếp hạng</span>
                  </NavLink>
                  <NavLink to="/roles" className="nav-link list_nav_item">
                  <div className="icon_list_nav_item">
                        <FontAwesomeIcon icon={faIcons} />
                        </div>
                        <span>Chủ đề & thể loại</span>
                  </NavLink>
                  <NavLink to="/group-role" className="nav-link list_nav_item">
                  <div className="icon_list_nav_item">
                        <FontAwesomeIcon icon={faStar} />
                        </div>
                        <span>Top 100</span>
                  </NavLink>
                  <NavLink to="/project" className="nav-link list_nav_item">
                    Project
                  </NavLink>
                  <NavLink to="/about" className="nav-link list_nav_item">
                    About
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
            {/* <div className="rs_bottom_bar">
                <div className="list_nav">
                    <a href="/home" className="list_nav_item active">
                        <div className="icon_list_nav_item">
                        <FontAwesomeIcon icon={faHouse} />
                        </div>
                        <span>Trang chủ</span>
                    </a>
                    <a href="/top100" className="list_nav_item">
                        <div className="icon_list_nav_item">
                        <FontAwesomeIcon icon={faRankingStar} />
                        </div>
                        <span>Bảng xếp hạng</span>
                    </a>
                    <a href='/category' className="list_nav_item">
                        <div className="icon_list_nav_item">
                        <FontAwesomeIcon icon={faIcons} />
                        </div>
                        <span>Chủ đề & thể loại</span>
                    </a>
                    <a href="/listcard" className="list_nav_item">
                        <div className="icon_list_nav_item">
                        <FontAwesomeIcon icon={faStar} />
                        </div>
                        <span>Top 100</span>
                    </a>

                </div>
            </div> */}
            </Container>
            </Navbar>
        </div>
    )
}
export default RightSidebar