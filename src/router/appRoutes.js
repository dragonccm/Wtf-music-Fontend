import React, { useEffect } from "react";
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
import HubPage from "../components/pages/hubPage";
import HubItem from "../components/pages/hubItem";
import Profile from "../components/pages/profile/profilepage";
import LoginPageGG from "../components/pages/loginGG"

// layout
import Header from "../components/layoutbar/Header";
import Footer from "../components/layoutbar/Footer";
import RightSidebar from "../components/sideNavigation/RightSidebar";
import Bottombar from "../components/sideNavigation/Bottombar";

// component

import Rating from "../components/pages/Rating";
import SearchPage from "../components/pages/searchpage";
import RatingWeek from "../components/pages/rating_week";
import { useLocation } from 'react-router-dom';

// import { height } from "@mui/system";

const AppRoutes = (props) => {
    const theme = useSelector((state) => state.theme.theme);
    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
    }, [theme]);

    // get state from redux
    const isAuthentication = useSelector(
        (state) => state.Authentication.defaultUser
    );

    const isPlaying = useSelector((state) => state.getSongData.isPlaying);
    const { pathname } = useLocation();
    const prevPath = localStorage.getItem('prevPath') || '/';
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <RightSidebar />
            <div
                className="main_page"
                style={{ height: isPlaying ? "calc(100vh - 92px)" : "100vh" }}
            >
                <Header />
                <section className={`main_page_container ${theme}`}>
                    <Routes>
                        <Route
                            path="/playlistpage"
                            element={<Playlistpage />}
                        />
                        <Route path="/song/:id" element={<Songpage />} />
                        <Route path="/artists/:id" element={<Singerpage />} />
                        <Route path="/rating" element={<Rating />} />
                        <Route path="/search/:id" element={<SearchPage />} />
                        <Route
                            path="/rating_week/:id"
                            exact
                            element={<RatingWeek />}
                        />
                        <Route path="/top100" element={<Top100 />} />
                        <Route path="/hub" element={<HubPage />} />
                        <Route path="/hub/:id" element={<HubItem/>} />
                        <Route
                            path="/playlist/:id"
                            element={<Playlistpage />}
                        />

                        {/* //authentication */}
                       
                        <Route
                            path="/login-gg-success/:id"
                            element={
                                isAuthentication &&
                                isAuthentication.isAuthenticated === true ? (
                                        <Navigate to={prevPath} />
                                ) : (
                                    <LoginPageGG />
                                )
                            }
                        />
                        
                        <Route
                            path="/profile/*"
                            element={<PrivateRoutes component={Profile} />}
                        />

                        <Route path="/*" element={<HomePage />} />

                        <Route path="*">404 not found</Route>
                    </Routes>
                </section>

                <Footer />
            </div>
            <Bottombar />
        </>
    );
};

export default AppRoutes;
