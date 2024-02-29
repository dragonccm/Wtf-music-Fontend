import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faTableList, faHistory, faGear } from '@fortawesome/free-solid-svg-icons'
import "../../css/profile.css"
function Profile() {
    return (
        <div className="">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Collapse id="basic-navbar-nav" className="profile_bar">
                        <Nav className="me-auto list_nav list_nav_pr">
                            <NavLink to="/" exact className="nav-link list_nav_item  list_nav_item_pr">
                                <div className="icon_list_nav_item">
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <span>Hồ Sơ Của Bạn</span>
                            </NavLink>
                            <NavLink to="/users" className="nav-link list_nav_item  list_nav_item_pr">
                                <div className="icon_list_nav_item">
                                    <FontAwesomeIcon icon={faTableList} />
                                </div>
                                <span>PlayList</span>
                            </NavLink>
                            <NavLink to="/roles" className="nav-link list_nav_item  list_nav_item_pr">
                                <div className="icon_list_nav_item">
                                    <FontAwesomeIcon icon={faHistory} />
                                </div>
                                <span>Lịch Sử</span>
                            </NavLink>
                            <NavLink to="/group-role" className="nav-link list_nav_item  list_nav_item_pr">
                                <div className="icon_list_nav_item">
                                    <FontAwesomeIcon icon={faGear} />
                                </div>
                                <span>Cài Đặt</span>
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
                                    <div className="icon_list_nav_ite
                                    
                                    </div>
                                    <span>Trang chủ</span>
                                </a>
                                <a href="/top100" className="list_nav_item">
                                    <div className="icon_list_nav_ite
                                    
                                    </div>
                                    <span>Bảng xếp hạng</span>
                                </a>
                                <a href='/category' className="list_nav_item">
                                    <div className="icon_list_nav_ite
                                    
                                    </div>
                                    <span>Chủ đề & thể loại</span>
                                </a>
                                <a href="/listcard" className="list_nav_item">
                                    <div className="icon_list_nav_ite
                                    
                                    </div>
                                    <span>Top 100</span>
                                </a>

                            </div>
                        </div> */}
                </Container>
            </Navbar>
        </div>
    );
}

export default Profile;



