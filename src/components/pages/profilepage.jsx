import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableList, faHistory, faGear, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Routes, Route } from 'react-router-dom';
import Recommended from "../card/Recommended";
import ListCard from "../card/ListCard";


import "../../css/profile.scss"
function Profile() {


    const playlistsData = [
        ({
            id: 1,
            name: `Jisoo`,
            image:"https://i.pinimg.com/originals/3a/f1/e7/3af1e70ef7617658aeb52141f47f51b0.jpg",
            artists_list: ["Jisso"],
        }),
        ({
            id: 1,
            name: `Jennie`,
            image:"https://th.bing.com/th/id/OIP.0nv52jyNLFV9dMf8FydGBQAAAA?rs=1&pid=ImgDetMain",
            artists_list: ["Jennie"],
        }),
        ({
            id: 1,
            name: `Lisa`,
            image:"https://th.bing.com/th/id/OIP.yXzNZo5S4j75KDC6uzAwKAHaJ4?w=800&h=1067&rs=1&pid=ImgDetMain",
            artists_list: ["Lisa"],
        }),
        ({
            id: 1,
            name: `Rosé`,
            image:"https://lh3.googleusercontent.com/LjrrZepK7r13k7KIA7hkqOKFN0rLntt_994Fp9QS6_UGbi5YdI8OnDK0n2C9lxd3pXr1ImX7VFCGfoFeMazK7oRAN1ehejD0aA=w960-rj-nu-e365",
            artists_list: ["Rosé"],
        }),
        ({
            id: 1,
            name: `jang Wongyoung`,
            image:"https://th.bing.com/th/id/R.95272410e0cd81f991eb92c07e6a503c?rik=XjGqEwoeZgRuSQ&pid=ImgRaw&r=0",
            artists_list: ["Jang Wongyoung"],
        })
    ]

    const element = [
        ({
            title: "Danh Sách Nghệ Sĩ Yêu Thích",
            list: playlistsData,
        }),
        ({
            title: "nghe Nhiều Gần Đây",
            list: playlistsData,
        }),
        ({
            title: "Đề Xuất Cho Bạn",
            list: playlistsData,
        })
    ] 

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
    const Recommendeds = [
        {
            id: "jhfjh",
            name: `Flowers`,
            image: "https://th.bing.com/th/id/OIP.MfAV8J9NzWpF06S-jLvakQHaLH?rs=1&pid=ImgDetMain",
            category: "playlist",
            songartist: "jisoo",
            songname: "Flower",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            total: "3:00",
            root_album: "Solo"
        },
        {
            id: "kdjfkdj",
            name: `typaGirls`,
            image: "https://th.bing.com/th/id/OIP.9duyi1x-V3x4rdP1ax7DLQHaHa?rs=1&pid=ImgDetMain",
            category: "playlist",
            songartist: "BlackPink",
            songname: "Flower",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            total: "3:00",
            root_album: "Solo"
        },
        {
            id: "jshdjshdjs",
            name: `Pink Venom`,
            image: "https://th.bing.com/th/id/OIP.h45FTfoat7cj5tmNKzffcgHaHa?rs=1&pid=ImgDetMain",
            category: "playlist",
            songartist: "BlackPink",
            songname: "Flower",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            total: "3:00",
            root_album: "Solo"
        },
        {
            id: "859485948",
            name: `Hard To Love`,
            image: "https://i.ytimg.com/vi/TfaOe66vRpY/maxresdefault.jpg",
            category: "playlist",
            songartist: "Rosé",
            songname: "Flower",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            total: "3:00",
            root_album: "Solo"
        },
        {
            id: "987598495",
            name: ` HOW YOU LIKE THAT`,
            image: "https://th.bing.com/th/id/R.29b5df9442fe7d7ab67361bb6c354ebf?rik=hnHONhheHbyY9A&pid=ImgRaw&r=0",
            category: "playlist",
            songartist: "BlackPink",
            songname: " HOW YOU LIKE THAT",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            total: "3:00",
            root_album: "Solo"
        },
        {
            id: "jhfjh",
            name: `Flowers`,
            image: "https://th.bing.com/th/id/OIP.MfAV8J9NzWpF06S-jLvakQHaLH?rs=1&pid=ImgDetMain",
            category: "playlist",
            songartist: "jisoo",
            songname: "Flower",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            total: "3:00",
            root_album: "Solo"
        },
        {
            id: "kdjfkdj",
            name: `typaGirls`,
            image: "https://th.bing.com/th/id/OIP.9duyi1x-V3x4rdP1ax7DLQHaHa?rs=1&pid=ImgDetMain",
            category: "playlist",
            songartist: "BlackPink",
            songname: "Flower",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            total: "3:00",
            root_album: "Solo"
        },
        {
            id: "jshdjshdjs",
            name: `Pink Venom`,
            image: "https://th.bing.com/th/id/OIP.h45FTfoat7cj5tmNKzffcgHaHa?rs=1&pid=ImgDetMain",
            category: "playlist",
            songartist: "BlackPink",
            songname: "Flower",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            total: "3:00",
            root_album: "Solo"
        },
        {
            id: "859485948",
            name: `Hard To Love`,
            image: "https://i.ytimg.com/vi/TfaOe66vRpY/maxresdefault.jpg",
            category: "playlist",
            songartist: "Rosé",
            songname: "Flower",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            total: "3:00",
            root_album: "Solo"
        },
        {
            id: "987598495",
            name: ` HOW YOU LIKE THAT`,
            image: "https://th.bing.com/th/id/R.29b5df9442fe7d7ab67361bb6c354ebf?rik=hnHONhheHbyY9A&pid=ImgRaw&r=0",
            category: "playlist",
            songartist: "BlackPink",
            songname: " HOW YOU LIKE THAT",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            total: "3:00",
            root_album: "Solo"
        },
        {
            id: "jhfjh",
            name: `Flowers`,
            image: "https://th.bing.com/th/id/OIP.MfAV8J9NzWpF06S-jLvakQHaLH?rs=1&pid=ImgDetMain",
            category: "playlist",
            songartist: "jisoo",
            songname: "Flower",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            total: "3:00",
            root_album: "Solo"
        },
        {
            id: "kdjfkdj",
            name: `typaGirls`,
            image: "https://th.bing.com/th/id/OIP.9duyi1x-V3x4rdP1ax7DLQHaHa?rs=1&pid=ImgDetMain",
            category: "playlist",
            songartist: "BlackPink",
            songname: "Flower",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            total: "3:00",
            root_album: "Solo"
        },
        {
            id: "jshdjshdjs",
            name: `Pink Venom`,
            image: "https://th.bing.com/th/id/OIP.h45FTfoat7cj5tmNKzffcgHaHa?rs=1&pid=ImgDetMain",
            category: "playlist",
            songartist: "BlackPink",
            songname: "Flower",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            total: "3:00",
            root_album: "Solo"
        },
        {
            id: "859485948",
            name: `Hard To Love`,
            image: "https://i.ytimg.com/vi/TfaOe66vRpY/maxresdefault.jpg",
            category: "playlist",
            songartist: "Rosé",
            songname: "Flower",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            total: "3:00",
            root_album: "Solo"
        },
        {
            id: "987598495",
            name: ` HOW YOU LIKE THAT`,
            image: "https://th.bing.com/th/id/R.29b5df9442fe7d7ab67361bb6c354ebf?rik=hnHONhheHbyY9A&pid=ImgRaw&r=0",
            category: "playlist",
            songartist: "BlackPink",
            songname: " HOW YOU LIKE THAT",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            total: "3:00",
            root_album: "Solo"
        },
    ];
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
    const History = ({ data }) => (
        <div className="history_ctn">
            <Recommended datas={data} type={"Lịch Sử"} describe={'Đã Xem Gần Đây'} />
        </div>
    )
    const Setting = () => (
        <div className="setting_ctn">
            <h1>setting</h1>
        </div>
    )
    const Artist = ({ data }) => {
        return (
            <div className="history_ctn">
                <ListCard data={data} />
            </div>
        );
    }



    return (
        <div className="profile_container">


            <UserInfo data={userdata} />

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Collapse id="basic-navbar-nav" className="profile_bar">
                        <Nav className="me-auto list_nav list_nav_pr">
                            <NavLink to="artist" className="nav-link list_nav_item  list_nav_item_pr">
                                <div className="icon_list_nav_item">
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                                <span>Yêu Thích</span>
                            </NavLink>
                            <NavLink to="myplaylist" className="nav-link list_nav_item  list_nav_item_pr">
                                <div className="icon_list_nav_item">
                                    <FontAwesomeIcon icon={faTableList} />
                                </div>
                                <span>PlayList</span>
                            </NavLink>
                            <NavLink to="history" className="nav-link list_nav_item  list_nav_item_pr">
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
                    <Route path='/myplaylist' element={<Myplaylist datas={usserplaylist} />} />
                    <Route path='/history' element={<History data={Recommendeds} />} />
                    <Route path='/setting' element={<Setting />} />
                    <Route path='/artist' element={<Artist data={element} />} />
                </Routes>

                {/* <div className="artist_ctn">
                    <div className="artist_card">
                        <div className="artist_card">
                            <img src="https://th.bing.com/th/id/OIP.mquf4eUVLnuM6W29sL0v9gHaLG?rs=1&pid=ImgDetMain" alt="artist" />
                        </div>

                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Profile;



