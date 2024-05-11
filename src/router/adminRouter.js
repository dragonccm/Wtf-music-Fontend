import React, { useEffect, useContext } from "react";
import "../css/mainpage.scss";
import { useSelector } from "react-redux";

import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoutes from "./privateRoutes";
// page

import LoginPage from "../components/pages/loginpage";
import RegisterPage from "../components/pages/register";

// layout
import Header from "../components/layoutbar/Header";
import Footer from "../components/layoutbar/Footer";
import RightSidebar from "../components/sideNavigation/RightSidebar";
import Bottombar from "../components/sideNavigation/Bottombar";

// component

import ThemeContext from "../lib/Context/ThemeContext";
import HomeAdmin from "../components/pages/admin/home";
import UsersAdmin from "../components/pages/admin/users";
import KindsMusicAdmin from "../components/pages/admin/kindsmusic";
import SingersAdmin from "../components/pages/admin/singers";
// import SongsAdmin from "../components/pages/admin/songs";
// import { height } from "@mui/system";

const AdminRoutes = (props) => {
    const { theme } = useContext(ThemeContext);
    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
    }, [theme]);

    // get state from redux
    const isAuthentication = useSelector(
        (state) => state.Authentication.defaultUser
    );

    return (
        <div style={{ height: "100vh" }} className="main_content">
            <RightSidebar />
            <div className="main_page">
                <Header />
                <section className={`main_page_container ${theme}`}>
                    <Routes>
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
                        <Route path="/adminusers" element={<UsersAdmin />} />
                        <Route
                            path="/adminkinds"
                            element={<KindsMusicAdmin />}
                        />
                        <Route
                            path="/adminsingers"
                            element={<SingersAdmin />}
                        />
                        {/* <Route path="/adminsongs" element={<SongsAdmin />} /> */}

                        <Route path="/*" element={<HomeAdmin />} />

                        {/* <Route path="/admin"  element={<HomeAdmin/>}/> */}
                    </Routes>
                </section>
            </div>
        </div>
    );
};

export default AdminRoutes;
