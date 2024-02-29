import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faTableList, faHistory, faGear } from '@fortawesome/free-solid-svg-icons'
import { Routes, Route } from 'react-router-dom';
import ListCard from "../card/ListCard";
import Recommended from "../card/Recommended";

import "../../css/profile.css"
function Profile() {
    const playlistsData = Array.from({ length: 5 }, (_, index) => ({
        id: index,
        name: `Playlist ${index + 1}`,
        image: "../../img/_e1a54268-fb6e-4c76-98a4-8a32aef31266.jpg",
        artists_list: ["Jisso", "Jisso", "Jisso", "Jisso", "Jisso"],
    }));

    const element = Array.from({ length: 5 }, (_, index) => ({
        title: 'title',
        list: playlistsData,
    }));

    const Recommendeds = Array.from({ length: 5 }, (_, index) => ({
        id: index,
        name: `Playlist ${index + 1}`,
        image: { Image },
        category: "playlist",
        songartist: "jisoo",
        songname: "Flower",
        addedday: "11 thg 11, 2021",
        liked_state: false,
        songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
        total: "3:00",
        root_album: "Solo"
    }));
    const UserInfo = () => <h1>Hồ Sơ Của Bạn</h1>;
    const UserSettings = () => <h1>Cài Đặt</h1>;

    return (
        <div className="profile_container">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Collapse id="basic-navbar-nav" className="profile_bar">
                        <Nav className="me-auto list_nav list_nav_pr">
                            <NavLink to="info" exact className="nav-link list_nav_item  list_nav_item_pr">
                                <div className="icon_list_nav_item">
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <span>Hồ Sơ Của Bạn</span>
                            </NavLink>
                            <NavLink to="info" className="nav-link list_nav_item  list_nav_item_pr">
                                <div className="icon_list_nav_item">
                                    <FontAwesomeIcon icon={faTableList} />
                                </div>
                                <span>PlayList</span>
                            </NavLink>
                            <NavLink to="setting" className="nav-link list_nav_item  list_nav_item_pr">
                                <div className="icon_list_nav_item">
                                    <FontAwesomeIcon icon={faHistory} />
                                </div>
                                <span>Lịch Sử</span>
                            </NavLink>
                            <NavLink to="setting" className="nav-link list_nav_item  list_nav_item_pr">
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
                    {/* Đảm bảo path và element tương ứng đúng với nhau */}
                    <Route path='/info' element={<ListCard data={element}/>} />
                    <Route path='/setting' element={ <Recommended datas={Recommendeds} type={"Popular"} describe={'Rap Việt'} />} />
                </Routes>
            </div>
        </div>
    );
}

export default Profile;



