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


    const userdata = {
        avt: "https://i.redd.it/ykbmzd7rlyq01.jpg",
        name: "Dragonccm",
        email: "dragonccm@gmail.com",
        date: "10/02/2003",
        pass: "long20%long555"
    }
    const usserplaylist = [
        {
            id: "jdfhhjf",
            img: "https://th.bing.com/th/id/OIP.iP-3O89bhSHrVr2rUEe4ZQHaEK?rs=1&pid=ImgDetMain",
            name: "Gone"
        },
        {
            id: "jdfhhjf",
            img: "https://th.bing.com/th/id/OIP.za6JTNz9MpwwZHBiIleI0AHaLH?rs=1&pid=ImgDetMain",
            name: "house"
        },
        {
            id: "jdfhhjf",
            img: "https://6.viki.io/image/6b2ff0b5d027478cbe9b1a63a8705e10/dummy.jpeg?s=900x600&e=t",
            name: "Money"
        }
    ]
    const UserInfo = ({ data }) => (
        <div className="info_card_ctn">
            <div className="avt_container">
                <img src={data.avt} alt="f" />
            </div>
            <div className="info_card">
                <div className="info_card_item">
                    <label>Tên: </label>
                    <p>{userdata.name}</p>
                </div>
                <div className="info_card_item">
                    <label>Email: </label>
                    <p>{userdata.email}</p>
                </div>
                <div className="info_card_item">
                    <label>Ngày Sinh: </label>
                    <p>{userdata.date}</p>
                </div>
            </div>
        </div>
    );
    const Myplaylist = ({ datas }) => (
        <section className="mylist_page">
            <div className="mylisttitle">Danh Sách Phát Của bạn</div>
            <div className="list_container">
                {datas.map((data) => (
                    <div className="myListcard">
                        <div className="list_img">
                            <img src={data.img} alt="f" />
                        </div>
                        <p className="playlist_name">{data.name}</p>
                    </div>

                ))}
            </div>
        </section>
    );

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
                    <Route path='/info' element={<UserInfo data={userdata} />} />
                    <Route path='/setting' element={<Myplaylist datas={usserplaylist} />} />
                </Routes>
            </div>
        </div>
    );
}

export default Profile;



