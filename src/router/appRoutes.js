import React, { useEffect, useContext } from "react";
import "../css/mainpage.scss";
import { useSelector } from "react-redux";

import { Routes, Route, Navigate } from "react-router-dom";
// import Login from "./components/pages/loginpage";
// import Register from "../component/register/register";
// import Users from "../component/users/users";
// import Role from "../component/role/roles";
// import GroupRole from "../component/groupRole/groupRole";
import PrivateRoutes from "./privateRoutes";
// page
import Playlistpage from "../components/pages/Playlistpage";
import Songpage from "../components/pages/Songpage";
import Singerpage from "../components/pages/Singerpage";
import Top100 from "../components/pages/top100";
import Profile from "../components/pages/profilepage";
import HomeRating from "../components/card/Home_ rating";
// import HubPage from "../components/pages/hubPage";
// import Letclone from "./admin/letclone";
import LoginPage from "../components/pages/loginpage";
import RegisterPage from "../components/pages/register";

// layout
import Header from "../components/layoutbar/Header";
import SliderBar from "../components/card/Slider_bar";
import Footer from "../components/layoutbar/Footer";
// component
import Col3Layout from "../components/card/col_3_layout";
import ListCard from "../components/card/ListCard";
import Rating from "../components/pages/Rating";
import Card from "../components/card/song_card";

import ThemeContext from "../lib/Context/ThemeContext";
import HomeAdmin from "../components/pages/admin/home";

const AppRoutes = ({ playlists }, props) => {
    const { theme } = useContext(ThemeContext);
    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
    }, [theme]);
    // song page
    const playlistsData = [
        {
            id: 1,
            name: `Playlist ${3 + 1}`,
            image: "https://th.bing.com/th/id/OIP.2Taaw3tCXQRTYFNqPYXOdgHaHa?rs=1&pid=ImgDetMain",
            artists_list: ["Jisso"],
        },
        {
            id: 3,
            name: `Playlist ${3 + 1}`,
            image: "https://i.redd.it/3sx2ys0arsv21.jpg",
            artists_list: ["Jisso"],
        },
        {
            id: 4,
            name: `Playlist ${3 + 1}`,
            image: "https://www.allkpop.com/upload/2021/01/content/070658/1610020733-20210107-rose.jpg",
            artists_list: ["Jisso"],
        },
        {
            id: 5,
            name: `Playlist ${3 + 1}`,
            image: "https://i2.wp.com/blackpinkupdate.com/wp-content/uploads/2019/05/1-BLACKPINK-Jennie-Instagram-Update-25-May-2019.jpg?fit=1080%2C1080&ssl=1",
            artists_list: ["Jisso"],
        },
        {
            id: 6,
            name: `Playlist ${3 + 1}`,
            image: "https://i.pinimg.com/736x/a7/a6/9d/a7a69d9337d6cd2b8b84290a7b9145ad.jpg",
            artists_list: ["Jisso"],
        },
    ];
    const newRelease = useSelector((state) => state.home.newRelease);
    const songHot = useSelector((state) => state.home.songHot);
    const songRemix = useSelector((state) => state.home.songRemix);
    const songChill = useSelector((state) => state.home.songChill);
    const songSad = useSelector((state) => state.home.songSad);
    const top100 = useSelector((state) => state.home.top100);
    const albumHot = useSelector((state) => state.home.albumHot);
    const hNewrelease = useSelector((state) => state.home.hNewrelease);

    // get state from redux
    const isAuthentication = useSelector(
        (state) => state.Authentication.defaultUser
    );

    return (
        <div className="main_page">
            <>
                <Header />
                <section className={`main_page_container ${theme}`}>
                    <Routes>
                        <Route
                            path="/listcard"
                            element={<ListCard data={playlists} />}
                        />
                        <Route
                            path="/playlistpage"
                            element={<Playlistpage />}
                        />
                        <Route path="/songpage/:id" element={<Songpage />} />
                        <Route path="/artists/:id" element={<Singerpage />} />
                        <Route path="/rating" element={<Rating />} />
                        <Route path="/top100" element={<Top100 />} />
                        <Route
                            path="/playlist/:id"
                            element={<Playlistpage />}
                        />

                        {/* //authentication */}
                        <Route
                            path="/login"
                            element={
                                isAuthentication &&
                                isAuthentication.isAuthenticated === true ? (
                                    <Navigate to="/" />
                                ) : (
                                    <LoginPage />
                                )
                            }
                        />
                        <Route path="/register" element={<RegisterPage />} />

                        {/* admin */}
                        <Route path="/admin" element={<HomeAdmin />} />

                        <Route
                            path="/profile/*"
                            element={<PrivateRoutes component={Profile} />}
                        />

                        <Route
                            path="/*"
                            element={
                                <>
                                    <SliderBar />
                                    <div className="for_you">
                                        <h1>Gợi Ý Dành Riêng Cho Bạn</h1>
                                        <Col3Layout data={newRelease} />
                                    </div>
                                    <div className="list_card">
                                        <h1>Có thể bạn muốn nghe</h1>
                                        <Card playlist={playlistsData} />
                                    </div>
                                    <div className="for_you">
                                        <h1>Mới phát hành</h1>
                                        <div className="radio-inputs">
                                            <label>
                                                <input
                                                    className="radio-input "
                                                    type="radio"
                                                    name="engine"
                                                />
                                                <span className="radio-tile ">
                                                    <span className="radio-icon">
                                                        Tất cả
                                                    </span>
                                                </span>
                                            </label>

                                            <label>
                                                <input
                                                    className="radio-input "
                                                    type="radio"
                                                    name="engine"
                                                />
                                                <span className="radio-tile ">
                                                    <span className="radio-icon">
                                                        Việt Nam
                                                    </span>
                                                </span>
                                            </label>

                                            <label>
                                                <input
                                                    className="radio-input "
                                                    type="radio"
                                                    name="engine"
                                                />
                                                <span className="radio-tile ">
                                                    <span className="radio-icon">
                                                        Quốc tế
                                                    </span>
                                                </span>
                                            </label>
                                        </div>

                                        <Col3Layout data={newRelease} />
                                    </div>
                                    <div className="list_card">
                                        <h1>Nhạc hot gây bão</h1>
                                        <Card playlist={songHot} />
                                    </div>
                                    <div className="list_card">
                                        <h1>Remix hay hết sảy</h1>
                                        <Card playlist={songRemix} />
                                    </div>
                                    <div className="list_card">
                                        <h1>Chill</h1>
                                        <Card playlist={songChill} />
                                    </div>
                                    <div className="list_card">
                                        <h1>Nhạc buồn tâm trạng</h1>
                                        <Card playlist={songSad} />
                                    </div>
                                    <div className="ratings">
                                        <h1>BXH nhạc mới</h1>
                                        <HomeRating data={hNewrelease} />
                                    </div>
                                    <div className="list_card">
                                        <h1>Top 100</h1>
                                        <Card playlist={top100} />
                                    </div>
                                    <div className="list_card">
                                        <h1>Album hot</h1>
                                        <Card playlist={albumHot} />
                                    </div>
                                </>
                            }
                        />

                        <Route path="*">404 not found</Route>
                    </Routes>
                </section>

                <Footer />
            </>
        </div>
    );
};

export default AppRoutes;
