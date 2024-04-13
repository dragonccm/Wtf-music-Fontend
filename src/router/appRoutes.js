import React, { useEffect, useContext } from "react";
import "../css/mainpage.scss";
import { useSelector } from "react-redux";


import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoutes from "./privateRoutes";
// page
import HomePage from "../components/pages/home";
import Playlistpage from "../components/pages/Playlistpage";
import Songpage from "../components/pages/Songpage";
import Singerpage from "../components/pages/Singerpage";
import Top100 from "../components/pages/top100";
import Profile from "../components/pages/profile/profilepage";
// import HubPage from "../components/pages/hubPage";
// import Letclone from "./admin/letclone";
import LoginPage from "../components/pages/loginpage";
import RegisterPage from "../components/pages/register";

// layout
import Header from "../components/layoutbar/Header";
import Footer from "../components/layoutbar/Footer";
// component

import ListCard from "../components/card/ListCard";
import Rating from "../components/pages/Rating";
import Rating_week from "../components/pages/rating_week";


import ThemeContext from "../lib/Context/ThemeContext";
import HomeAdmin from "../components/pages/admin/home";
import UsersAdmin from "../components/pages/admin/users";
import KindsMusicAdmin from "../components/pages/admin/kindsmusic";
import SingersAdmin from "../components/pages/admin/singers";
import SongsAdmin from "../components/pages/admin/songs";
// import { height } from "@mui/system";

const AppRoutes = ({ playlists }, props) => {
  

    const { theme } = useContext(ThemeContext);
    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
    }, [theme]);

    // song page


  


    // get state from redux
    const isAuthentication = useSelector(
        (state) => state.Authentication.defaultUser
    );

    const isPlaying = useSelector((state) => state.getSongData.isPlaying);
   
    return (
        <div
            className="main_page"
            style={{ height: isPlaying ? "calc(100vh - 92px)" : "100vh" }}
        >
            <Header />
            <section className={`main_page_container ${theme}`}>
                <Routes>
                    <Route
                        path="/listcard"
                        element={<ListCard data={playlists} />}
                    />
                    <Route path="/playlistpage" element={<Playlistpage />} />
                    <Route path="/song/:id" element={<Songpage />} />
                    <Route path="/artists/:id" element={<Singerpage />} />
                    <Route path="/rating" element={<Rating />} />
                    <Route path="/rating_week/:id" exact element={<Rating_week />} />
                    <Route path="/top100" element={<Top100 />} />
                    <Route path="/playlist/:id" element={<Playlistpage />} />

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
                    <Route path="/adminhome" element={<HomeAdmin />} />
                    <Route path="/adminusers" element={<UsersAdmin />} />
                    <Route path="/adminkinds" element={<KindsMusicAdmin />} />
                    <Route path="/adminsingers" element={<SingersAdmin />} />
                    <Route path="/adminsongs" element={<SongsAdmin />} />

                    <Route
                        path="/profile/*"
                        element={<PrivateRoutes component={Profile} />}
                    />

                    <Route
                        path="/*"
                        element={
                            <HomePage/>
                        }
                    />

                    <Route path="*">404 not found</Route>
                </Routes>
            </section>

            <Footer />
        </div>
    );
};

export default AppRoutes;
